import { createSelector } from 'reselect';

const rootSelector = state => state;

export const restaurantsList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);

export const restaurantsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const restaurantsIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
