import React, { useEffect, useState } from 'react'
import goal from '../../../data/advantages.json'
import { getAllAdvantageOfMeditation } from '../../../helper/meditationApi';
const AdvantageOfMeditation = () => {
   const [data, setdata] = useState([]);

   const fetchData = async () => {
     try {
       const result = await getAllAdvantageOfMeditation();
       
       setdata(result.data);
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
            <h2 className="mb-4 text-3xl font-bold text-brand sm:text-4xl md:text-[40px]">
              ध्यानका फाईदाहरु
            </h2>
          </div>
        </div>
      </div>
      <div className="md:container md:mx-auto mb-24 grid grid-cols-1 md:grid-cols-3 gap-5">
        {data && data?.map((item, idx) => (
          <div
            className="border-gray-300 border-2 rounded-2xl py-4 px-3 shadow-md hover:shadow-2xl cursor-pointer"
            key={idx}
          >
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-1">
                <img src={item?.attributes?.image} />
              </div>
              <div className="col-span-3">
                <p className="text-brand font-extrabold">
                  {item?.attributes?.title}
                </p>
                <p className="text-gray-600 mt-4 leading-normal">
                  {item?.attributes?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdvantageOfMeditation