import React, { useEffect, useState } from 'react'
import { getAllPrograms } from '../../../helper/programApi';
import { API } from '../../../helper/api';
import { imageUrl } from '../../../helper/imageUrl';
const ProgramComponent = () => {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const result = await getAllPrograms();
      if (result) {
        setdata(result.data.slice(0,3));
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="md:container md:mx-auto mt-10">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-brand">
              Our Programs
            </span>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-[40px]">
              Program Details
            </h2>
          </div>
        </div>
      </div>
      {data &&
        data.map((item, idx) => (
          <div key={idx}>
            {idx % 2 === 0 ? (
              <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row sm:px-8 lg:px-16 xl:px-20">
                <div className="flex flex-col space-y-6 md:w-1/2 mx-auto">
                  <h2 className="max-w-lg text-xl font-medium text-slate-900 text-center md:text-left">
                    {item?.attributes?.title}
                  </h2>
                  <hr className="h-1 bg-subbrand items-center justify-center w-48 rounded-full mx-auto md:mx-0" />
                  <p className="item-center justify-center">
                    <img
                      src={imageUrl(item)}
                      onError={(e) => {
                        e.target.src =
                          "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
                      }}
                      className="hero-image rounded-2xl md:w-8/12 transition ease-in-out delay-100 over:-translate-y-1 duration-200 hover:scale-110 "
                      alt=""
                    />
                  </p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2">
                  {item?.attributes?.points.map((point, index) => (
                    <div
                      className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row shadow-md hover:shadow-lg p-4 rounded-lg cursor-pointer"
                      key={index}
                    >
                      <div className="rounded-l-full md:bg-transparent">
                        <div className="flex items-center space-x-2">
                          <div className="px-4 py-2 text-white rounded-full md:py-1 bg-subbrand">
                            {point.number}
                          </div>
                          <h3 className="hidden font-bold md:mb-4 md:hidden">
                            {point.title}
                          </h3>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-brand mb-4 text-lg font-bold md:block">
                          {point.title}
                        </h3>
                        <p className="text-gray-600 font-semibold text-justify leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row sm:px-8 lg:px-16 xl:px-20 mt-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="relative z-10 inline-block pt-11 lg:pt-0">
                    <img
                      src={imageUrl(item)}
                      onError={(e) => {
                        e.target.src =
                          "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
                      }}
                      alt="hero"
                      className="rounded-lg rounded-2xl md:max-w-sm rounded-lg shadow-2xl transition ease-in-out delay-100 over:-translate-y-1 duration-200 hover:scale-110"
                    />
                    <span className="absolute -left-8 -bottom-8 z-[-1]">
                      <svg
                        width={93}
                        height={93}
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG circles */}
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h2 className="max-w-md text-xl font-medium text-slate-900 text-center md:text-left mb-4">
                      {item?.attributes?.title}
                    </h2>
                    <hr className="h-1 bg-subbrand items-center justify-center w-48 rounded-full mx-auto md:mx-0 mb-8" />
                    {item?.attributes?.points.map((point, index) => (
                      <div
                        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row shadow-md hover:shadow-lg p-4 rounded-lg cursor-pointer"
                        key={index}
                      >
                        {/* Point */}
                        <div className="rounded-l-full md:bg-transparent">
                          <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-subbrand">
                              {point.number}
                            </div>
                            <h3 className="hidden font-bold md:mb-4 md:hidden">
                              {point.title}:
                            </h3>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-brand mb-4 text-lg font-bold md:block">
                            {point.title}:
                          </h3>
                          <p className="text-gray-600 font-semibold text-justify leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}

export default ProgramComponent