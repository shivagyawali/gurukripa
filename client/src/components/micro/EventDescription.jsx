

import React, { useState } from 'react';

const EventDescription = ({ event }) => {
  if (!event || !event?.attributes?.detail) {
    return null; // or handle the case when event or event.description is undefined
  }

  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };



  const truncatedDescription = event?.attributes?.detail.slice(0, 180); // Adjust the length as needed

  return (
    <div>
      <p className="text-gray-600 text-justify">
        {expanded ? event?.attributes?.detail : truncatedDescription}
        {!expanded && event?.attributes.detail.length > 180 && (
          <span
            className="text-blue-500 cursor-pointer font-bold"
            onClick={toggleDescription}
          >
            {" "}
            Read more
          </span>
        )}
        {expanded && (
          <span
            className="text-blue-500 cursor-pointer font-bold"
            onClick={toggleDescription}
          >
            {" "}
            Read less
          </span>
        )}
      </p>
    </div>
  );
};

export default EventDescription;
