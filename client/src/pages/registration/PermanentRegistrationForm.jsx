import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./permanentForm.css";
import { sendEmailWithRegistration } from "../../helper/contactUsApi";
import { formatShortDate } from "../../helper/dateFormat";
import toast from "react-hot-toast";
import SearchableDropdown from "../../components/micro/SearchableDropdown";
import provinces from "../../data/province.json";
import districts from "../../data/districts.json";
import municipalities from "../../data/municipalities.json";
const PermanentRegistrationForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const currentDate = new Date();
  const shortDate = formatShortDate(currentDate);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    currentLocation: "",
    tole: "",
    gender: "",
    email: "",
    mobileNo: "",
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
        if (!validateFormData(formData)) {
         toast.error("Form data validation failed");
          return;
        }
      let pdfData = await generatePdf();
      const formDataToSend = new FormData();
      formDataToSend.append("file", pdfData.pdfDataUri);
      formDataToSend.append("fileName", pdfData.pdfFileName);
      formDataToSend.append("personName", formData.fullName);
      formDataToSend.append("subject", "स्थायी सदस्यता फारम");

      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      await sendEmailWithRegistration(formDataToSend);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

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
            <span className="font-bold text-2xl">गुरुकृपा फाउन्डेसन</span>
            <br />
            उदयपुर गाईघाट
            <br />
            स्थायी सदस्यता फारम
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
        <div className="flex justify-end mb-10">
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
        </div>
      </div>

      <div className="container mx-auto px-48">
        <button
          className="bg-brand hover:bg-brand text-white font-bold py-2 px-4 rounded  col-span-3 w-40"
          onClick={handleSubmit}
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default PermanentRegistrationForm;
