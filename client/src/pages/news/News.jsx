import { useEffect, useState } from 'react'
import { getAllFacebookPosts } from '../../helper/newsApi';
import Loading from '../../components/micro/Loading';
import EventDescription from '../../components/micro/EventDescription';
import events from "../../data/eventsData.json";
import { API } from '../../helper/api';
const News = () => {

   const [eventsData, setEventsData] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchPosts= async () => {
     try {
       const data = await getAllFacebookPosts();
      
         setEventsData(data.data);
        
     } catch (error) {
       
       setEventsData(events);
     } finally {
       setLoading(false);
     }
   };

   useEffect(() => {
     fetchPosts();
   }, []);


  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center mt-8">
          Latest News and Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {loading && <Loading />}
          {/* Show loading component when data is loading */}

          {!loading &&
            eventsData.length > 0 &&
            eventsData.map((event, index) => (
              <div className="bg-white rounded-lg p-6 shadow" key={index}>
                <h3 className="text-xl font-semibold mb-2 capitalize text-teal-500">
                  {event?.attributes?.title}
                </h3>
                <img
                  src={`${event?.attributes?.image?.data?.attributes?.url}`}
                  onError={(e) => {
                    e.target.src =
                      "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
                  }}
                  alt=""
                  className="w-full h-58 mb-4 rounded-md object-cover"
                />

                <EventDescription event={event} />
              </div>
            ))}
          <h3>{!loading && eventsData.length === 0 ? "No Post found" : ""}</h3>
        </div>
      </div>
    </div>
  );
}

export default News