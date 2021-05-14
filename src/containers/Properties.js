import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Properties = ({ category }) => {
  const allProperties = useSelector((state) => state.properties);
  const filteredProperties = allProperties.filter(
    (property) => property.category === category,
  );

  const propertiesMap = filteredProperties.map((prop) => (
    <article key={prop.id} className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3 p-6">
      <h1 className="text-2xl mb-3">{prop.title}</h1>
      <div className="w-full h-70">
        <img src={prop.img_url} alt="Awesome property" />
      </div>
      <div className="flex justify-between mt-2">
        <p className="p-2">
          Price:
          {` $${prop.price}`}
        </p>
        <p className="p-2">
          {`${prop.sqrmeters} m2`}
        </p>
        <Link to={`/properties/${prop.id}`} className="p-2 bg-green-300 rounded">
          More Info
        </Link>
      </div>
    </article>
  ));

  return (
    <main className="text-center">
      <header className="bg-gray-300 py-5">
        <h1 className="text-5xl italic">
          { propertiesMap.length }
          { category === 'houses' ? ' Houses ' : ' Appartments ' }
          available
        </h1>
      </header>
      <div className="flex flex-wrap p-10">
        { propertiesMap }
      </div>
    </main>
  );
};

export default Properties;

Properties.propTypes = {
  category: PropTypes.string,
};

Properties.defaultProps = {
  category: 'houses',
};
