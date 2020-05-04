import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantsCard } from '../RestourantsCard';
import './RestaurantsListPage.scss';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

// heroImageUrl, title, uuid, category, etaRange

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestourants } = this.props;

    loadRestourants();
  }

  render() {
    const {
      restourantsData,
      error,
      isLoading,
    } = this.props;

    // console.log(restourantsData);

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error message={error} />;
    }

    return (
      <div className="restaurants-list">

        {restourantsData.map((restaurant) => {
          const {
            heroImageUrl,
            title,
            uuid,
            categories,
            etaRange,
          } = restaurant;

          return (
            <RestaurantsCard
              key={uuid}
              uuid={uuid}
              imageUrl={heroImageUrl}
              title={title}
              categories={categories}
              etaRange={etaRange.text}
            />
          );
        })}

        {/* <pre>
          {JSON.stringify(restourantsData, null, 4)}
        </pre> */}
      </div>
    );
  }
}

RestaurantsListPage.propTypes = {
  // For future
  restourantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestourants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restourantsData: [],
  error: null,
  isLoading: false,
};
