import React, {useEffect, useState,useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './thirdEyeForm.css'
import { sendEmailWithRegistration } from "../../helper/contactUsApi";
import provinces from '../../data/province.json';
import districts from '../../data/districts.json';
import municipalities from "../../data/municipalities.json";
import { formatShortDate } from "../../helper/dateFormat";
import SearchableDropdown from "../../components/micro/SearchableDropdown";
import toast from "react-hot-toast";
const ThirdEyeRegistrationForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
   const currentDate = new Date();
   const shortDate = formatShortDate(currentDate);
  const [isFormComplete, setIsFormComplete] = useState(false);
 const [formData, setFormData] = useState({
   fullName: "",
   dob: "",
   currentLocation: "",
   tole: "",
   gender: "",
   email: "",
   mobileNo: "",
   emeNo: "",
   emeFullName: "",
   emeRelation:"",
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };
 const handleFileInputChange = (event) => {
   const file = event.target.files[0];
   setSelectedFile(file);

   if (file) {
     const reader = new FileReader();
     reader.onload = () => {
       setPreviewUrl(reader.result);
     };
     reader.readAsDataURL(file);
   }
 };
  const divRef = useRef(null);
 
  const generatePdf = async () => {
    try {
      const input = divRef.current;
      const inputs = input.querySelectorAll("input");
      inputs.forEach((input) => {
        input.style.border = "0.3px solid black";
        input.style.backgroundColor = "#ffff";
        input.style.height = "40px";
        input.style.paddingTop = "3px";
        input.style.boxShadow = "none";
      });

      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/jpeg", 0.8); // Adjust quality here
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

      const pdfFileName = `${formData.fullName.replace(/\s+/g, "-")}-${
        formData.dob
      }.pdf`;
      const pdfDataUri = pdf.output("datauristring");

      return {
        pdfDataUri,
        pdfFileName,
      };
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw error;
    }
  };
  const validateFormData = (formData) => {
    // Add validation rules here
    // For example, check if all required fields are filled in
    for (const key in formData) {
      if (formData[key] === "") {
        console.error(`Field '${key}' is required`);
        return false;
      }
    }

    // Additional validation rules can be added as needed

    return true; // Return true if all validation passes
  };
  const handleSubmit = async () => {
    try {
      
      if (selectedFile === null) {
        toast.error("Add your photo");
        return;
      }
      if (!validateFormData(formData) ) {
        toast.error("Form data validation failed");
        return;
      }
      let pdfData = await generatePdf();
      const formDataToSend = new FormData();
      formDataToSend.append("file", pdfData.pdfDataUri);
      formDataToSend.append("fileName", pdfData.pdfFileName);
      formDataToSend.append("personName", formData.fullName);
      formDataToSend.append(
        "subject",
        "Mantra sadhana/Inner healing सदस्यता फारम"
      );

      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
       setIsFormComplete(false);
      await sendEmailWithRegistration(formDataToSend);
       setIsFormComplete(true);

    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

 useEffect(() => {
   const { problem, ...formFieldsWithoutProblem } = formData;
   const isComplete = Object.values(formFieldsWithoutProblem).every(
     (value) => value.trim() !== "" || null 
   );
   setIsFormComplete(isComplete);
 }, [formData]);



  return (
    <div className="min-h-screen no-gray-on-print">
      <div
        className="container mx-auto py-8  p-48 mt-2"
        id="pdf-content"
        ref={divRef}
      >
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-16 mr-4" />
          </div>
          {/* Organization Name */}
          <h1 className="text-xl flex-grow text-center text-gray-700">
            <span className="font-bold text-2xl">Guru Kripa Foundation</span>
            <br />
            Udayapur, Gaighat
            <br />
            Chakra healing
          </h1>

          <div className="relative h-24 w-24 border border-black flex items-center justify-center">
            <label htmlFor="fileInput" className="cursor-pointer">
              <p className="text-center">Photo</p>
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileInputChange}
            />
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <span className="text-gray-700 mr-4 text-md self-end">
            <div className="ml-14 px-2 z-50">{shortDate}</div>
            Date .............................................
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name / पुरा नाम
            </label>
            <input
              className="no-gray-on-print shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              Date of Birth / जन्म मिति
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="dob"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="currentLocation"
            >
              Current Location / वर्तमान स्थान
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="currentLocation"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
            />
          </div>
          <SearchableDropdown
            items={provinces}
            label="Province / प्रान्त"
            formData={formData.province}
            handleChange={handleChange}
          />
          <SearchableDropdown
            items={districts}
            label="District / जिल्ला"
            formData={formData.district}
            handleChange={handleChange}
          />
          <SearchableDropdown
            items={municipalities}
            label="Municipality / नगरपालिका"
            formData={formData.municipality}
            handleChange={handleChange}
          />

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tole"
            >
              Tole / टोल
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="tole"
              name="tole"
              value={formData.tole}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender / लिङ्ग
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email / इमेल
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNo"
            >
              Mobile No. / मोबाइल नम्बर
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNo"
            >
              Reffered/Inspired by (संदर्भित/प्रेरित गर्ने)
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="referBy"
              name="referBy"
              value={formData.referBy}
              onChange={handleChange}
            />
          </div>

          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNo"
            >
              Emergency Contact No. (आपातकालीन सम्पर्क नम्बर)
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="emeNo"
              name="emeNo"
              value={formData.emeNo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNo"
            >
              Full Name (पूरा नाम)
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="emeFullName"
              name="emeFullName"
              value={formData.emeFullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNo"
            >
              Relation (सम्बन्ध)
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="emeRelation"
              name="emeRelation"
              value={formData.emeRelation}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNo"
            >
              Health problem (if any) (स्वास्थ्य समस्या - यदि कुनै)
            </label>
            <textarea
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
              id="problem"
              name="problem"
              value={formData.problem}
              rows={4}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-48">
        <button
          className={`${
            isFormComplete == true
              ? "bg-brand hover:bg-brand text-white"
              : "bg-gray-600 hover:bg-gray-500 text-white"
          }  font-bold py-2 px-4 rounded  col-span-3 w-40`}
          onClick={handleSubmit}
          disabled={!isFormComplete}
        >
          {!isFormComplete == true ? (
            <>
              <svg
                aria-hidden="true"
                role="status"
                class="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                ></path>
              </svg>
              Filling ...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

export default ThirdEyeRegistrationForm;
