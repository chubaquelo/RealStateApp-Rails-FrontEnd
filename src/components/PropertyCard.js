import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = ({
  id,
  title,
  desc,
  price,
  bedrooms,
  baths,
  sqrmeters,
  imgUrl,
}) => {
  const hi = 'hi';
  window.console.log(hi);
  return (
    <div className="width-1/4">
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>
        Price:
        {price}
      </p>
      <p>
        Bedrooms:
        {bedrooms}
      </p>
      <p>
        Bathrooms:
        {baths}
      </p>
      <p>
        Sqr Meters:
        {sqrmeters}
      </p>
      <p>
        Image URL:
        {imgUrl}
      </p>
      <p>
        ID for link:
        {id}
      </p>
    </div>
  );
};

PropertyCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
  bedrooms: PropTypes.string,
  baths: PropTypes.string,
  sqrmeters: PropTypes.string,
  imgUrl: PropTypes.string,
};

PropertyCard.defaultProps = {
  id: '0',
  title: '',
  desc: '',
  price: '',
  bedrooms: '',
  baths: '',
  sqrmeters: '',
  imgUrl: '',
};

export default PropertyCard;
