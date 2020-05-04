import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestourants } from '../../store/actions';
import { restaurantsList, restaurantsListError, restaurantsIsLoading } from '../../store/selectors';

const mapStateToProps = state => ({
  restourantsData: restaurantsList(state),
  error: restaurantsListError(state),
  isLoading: restaurantsIsLoading(state),
  // restaurantsListData: state.selectRestaurantsList,
});

const mapDispatchToProps = {
  loadRestourants,
};

const connectedRestourantsListPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsListPage);

export {
  connectedRestourantsListPage as RestaurantsListPage,
};
