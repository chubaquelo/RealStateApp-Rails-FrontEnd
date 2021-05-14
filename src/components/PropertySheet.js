import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PropertySheet = () => {
  const propertyId = parseInt(useParams().id, 10);
  const allProperties = useSelector((state) => state.properties);

  const propertyInfo = allProperties.filter((p) => p.id === propertyId)[0];

  return (
    <main>
      <header className="bg-gray-300 py-5">
        <h1 className="text-2xl pl-5 md:text-5xl italic">
          Property Sheet for
          {` ${propertyInfo.title}`}
        </h1>
      </header>
      <div className="flex flex-wrap p-10">
        <div className="w-full md:w-1/2">
          <img src={propertyInfo.img_url} alt={propertyInfo.title} />
        </div>
        <div className="mt-4 lg:mt-0 lg:pl-5">
          <h2 className="text-2xl font-black">{propertyInfo.title}</h2>
          <p>{`Address: ${propertyInfo.address}`}</p>
          <p className="mt-4 italic font-black">Description:</p>
          <p className="mb-4 italic">{propertyInfo.desc}</p>
          <p>{`Sqr Meters: ${propertyInfo.sqrmeters}`}</p>
          <p>{`Bedrooms: ${propertyInfo.bedrooms}`}</p>
          <p>{`Bathrooms: ${propertyInfo.baths}`}</p>
          <p className="text-green-700 font-black text-xl mt-5">{`Price: $${propertyInfo.price}`}</p>
        </div>
      </div>
    </main>
  );
};

export default PropertySheet;
