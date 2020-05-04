import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { RestaurantsListPage } from './components/RestourantsListPage';
// import Loader from './components/Loader/Loader';

const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <div className="content">
        <RestaurantsListPage />
        {/* <Loader /> */}
      </div>
    </main>
    <Footer />
  </Provider>
);

export default App;
