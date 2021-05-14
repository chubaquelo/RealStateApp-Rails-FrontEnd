import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PropertySheet = () => {
  const propertyId = parseInt(useParams().id, 10);
  const allProperties = useSelector((state) => state.properties);

  const productInfo = allProperties.filter((p) => p.id === propertyId)[0];

  return (
    <main className="text-center">
      <header className="bg-gray-300 py-5">
        <h1 className="text-5xl italic">
          Property Sheet for
          {` ${productInfo.title}`}
        </h1>
      </header>
      <div className="flex flex-wrap p-10">
        { `useParams property ID: ${propertyId}` }
      </div>
    </main>
  );
};

export default PropertySheet;
