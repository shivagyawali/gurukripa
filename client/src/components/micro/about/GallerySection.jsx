import React, { useEffect, useState } from "react";
import { getPhotos } from "../../../helper/galleryApi";
import { imageUrl } from "../../../helper/imageUrl";

// Only Swiper inside the modal
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPhotos();
        const formatted = res.data.map((item) => ({
          src:
            imageUrl(item) ||
            "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png",
          title: item.title || "",
        }));
        setImages(formatted);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const openLightbox = (index) => {
    setStartIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      {/* YOUR ORIGINAL GRID — CLEAN & PERFECT */}
      <section className="py-12 px-8">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
            Explore Our Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-medium tracking-wider">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX — NO MODAL, NO #ROOT, PURE CSS */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          {/* Close on background click */}
          <button
            className="absolute top-8 right-8 text-white text-6xl font-thin hover:text-gray-400 transition cursor-pointer"
            onClick={() => setModalOpen(false)}
          >
            ×
          </button>

          {/* Swiper Lightbox */}
          <Swiper
            initialSlide={startIndex}
            modules={[Navigation, Keyboard]}
            navigation={{
              prevEl: ".lb-prev",
              nextEl: ".lb-next",
            }}
            keyboard={{ enabled: true }}
            loop={true}
            grabCursor={true}
            className="w-full h-full"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-full px-10">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="max-w-full max-h-full object-contain"
                    onClick={(e) => e.stopPropagation()} // prevent close when clicking image
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default GallerySection;