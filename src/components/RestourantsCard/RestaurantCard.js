import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';

export const RestaurantsCard = (props) => {
  const {
    imageUrl,
    title,
    uuid,
    categories,
    etaRange,
  } = props;
  // console.log(categories.join(' • '))

  return (

    <div className="rest-card">
      <img src={imageUrl} alt={title} className="rest-card__img" />
      <h2 className="rest-card__title">{title}</h2>
      <div className="rest-card__categories">
        {categories.join(' • ')}
      </div>
      <div className="rest-card__eta">
        {etaRange}
      </div>
    </div>
  );
};

// export default RestaurantsCard;

RestaurantsCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
};

RestaurantsCard.defaultProps = {
  categories: [],
  etaRange: '',
};
