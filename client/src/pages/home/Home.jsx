
import ProgramComponent from "../../components/micro/home/ProgramComponent";
import AdvantageOfMeditation from "../../components/micro/home/AdvantageOfMeditation";
import Modal from "react-modal";
import { API } from "../../helper/api";
import { useState } from "react";
const Home = () => {
const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <main className="min-h-screen ">
      <div className="md:container md:mx-auto mt-10">
        {/* hero */}
        <div className="hero bg-gray-100">
          {/* container */}
          <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            {/* hero wrapper */}
            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* hero text */}
              <div className="hero-text col-span-6">
                <h1 className="font-bold text-3xl md:text-4xl max-w-xl text-gray-900 leading-tight text-justify">
                  "ध्यानमा भरोसा गर्नुस्, लक्ष्यमा दृढ
                  <span className="text-brand"> रहनुस; </span>
                  प्रगती
                  <span className="text-subbrand"> आँफै हुन्छ।</span> "
                </h1>
                <p className="text-gray-800 text-base leading-relaxed mt-8 text-xl text-justify">
                  आधुनिक जीवनको द्रुत-गति भएकोमा, आध्यात्मिक दुनियासँग सम्बन्ध
                  बनाउनु अत्यन्त आवश्यक बनेको छ। गुरु कृपा फाउन्डेसनमा, हामी
                  साधकहरू र भ्रान्तहरूसँग एक सानो आमंत्रण दिएँछौं, तपाईंलाई
                  आत्म-अन्वेषण, बोध, र आध्यात्मिक नयाँ जीवनको गहिरो यात्रामा
                  साथी बनाउनका लागि। नेपालको आध्यात्मिक भूगोलमा मूलित भएको,
                  हाम्रो फाउन्डेसन समय-अनुसार बुद्धिमा सुनित ज्ञानको बत्ती हो,
                  जुन तपाईंलाई आध्यात्मिक परिवर्तनको मार्गमा मार्गदर्शन गर्न
                  सावित गरेको छ।
                </p>
                <div className="get-app flex space-x-3 mt-10 justify-center md:justify-start">
                  <button className="apple bg-white shadow-md px-4 py-2 rounded-lg flex items-center space-x-4">
                    <div className="logo">
                      <img src="/img/lifetime.png" className="h-6 w-6" />
                    </div>
                    <a href="/permanent-register">
                      <div className="text">
                        <p
                          className="text-xs text-gray-600"
                          style={{ fontSize: "0.5rem" }}
                        >
                          Permanent Register
                        </p>
                        <p className="text-xs font-semibold text-gray-900">
                          LifeTime Membership
                        </p>
                      </div>
                    </a>
                  </button>
                  <button className="google bg-white shadow-md px-4 py-2 rounded-lg flex items-center space-x-4">
                    <div className="image">
                      <img src="/img/third-eye.png" className="h-6 w-6" />
                    </div>
                    <a href="inner-healing">
                      <div className="text">
                        <p
                          className="text-xs text-gray-600"
                          style={{ fontSize: "0.5rem" }}
                        >
                          Register
                        </p>
                        <p className="text-xs font-semibold text-gray-900">
                          Mantra sadhana/Inner healing
                        </p>
                      </div>
                    </a>
                  </button>
                  <button className="google bg-white shadow-md px-4 py-2 rounded-lg flex items-center space-x-4">
                    <div className="image">
                      <img src="/img/donate.png" className="h-6 w-6" />
                    </div>
                    <div onClick={() => openModal("/img/donateqr.png")}>
                      <div className="text">
                        <p
                          className="text-xs text-gray-600"
                          style={{ fontSize: "0.5rem" }}
                        >
                          Donate
                        </p>
                        <p className="text-xs font-semibold text-gray-900">
                          Pay with QR Code
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="hero-image col-span-6">
                <img
                  src="/img/hero.png"
                  className="object-cover max-w-xl w-full mx-auto"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end hero */}
      </div>
      <AdvantageOfMeditation />
      <ProgramComponent />
      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="View Image"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "400px", // Set maximum width for the modal
            width: "100%", // Make modal width 100% of its container
          },
          overlay: {
            zIndex: 10000000000000,
          },
        }}
      >
        <div className="relative flex flex-col items-center justify-center h-full">
          <button
            onClick={closeModal}
            className="absolute top-0 -right-2 m-0 p-1 text-red-500 text-lg font-semibold bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-center text-2xl font-bold mb-6 text-brand">
            Scan the QR code to Pay
          </h2>
          {selectedImage !== null && (
            <div className="max-w-md rounded-lg overflow-hidden shadow-lg">
              <img
                src={selectedImage}
                alt={`QR Code`}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </Modal>
    </main>
  );
};

export default Home;
