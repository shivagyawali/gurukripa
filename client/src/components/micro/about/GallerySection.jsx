import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { getPhotos } from "../../../helper/galleryApi";
import { API } from "../../../helper/api";
import { imageUrl } from "../../../helper/imageUrl";

Modal.setAppElement("#root");

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const result = await getPhotos();
      setdata(result.data);
    } catch (error) {
      //setdata(goal);
    }
  };
  const openModal = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  console.log(selectedImage);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Explore Our Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((i, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={
                imageUrl(i) ||
                "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
              }
              alt={`Image ${index + 1}`}
              className="w-full h-96 object-cover object-center p-2 rounded-2xl"
            />
            {selectedImage !== null ||
              (selectedImage !== undefined && (
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300">
                  <div className="flex items-center justify-center h-full">
                    <button
                      className="bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200 transition-bg duration-300"
                      onClick={() => openModal(imageUrl(i))}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      {selectedImage !== null ||
        (selectedImage !== undefined && (
          <Modal
            isOpen={selectedImage !== null}
            onRequestClose={closeModal}
            contentLabel="View Image"
            style={{ zIndex: 10000000000000 }}
          >
            <button onClick={closeModal} className="text-red-500 text-2xl">
              Close
            </button>
            {selectedImage !== null && (
              <img
                src={selectedImage}
                alt={`Image ${selectedImage + 1}`}
                className="w-full h-full object-contain "
              />
            )}
          </Modal>
        ))}
    </div>
  );
};

export default GallerySection;
