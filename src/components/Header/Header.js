import React, { Component } from 'react';
import Input from '../Input/Input';
import './Header.scss';

class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
    isMobileSearchVisible: !isMobileSearchVisible,
    isMobileDeliveryInfoVisible: false,
  }))

  toggleDeliveryInfo = () => this.setState((prevState) => {
    const { isMobileDeliveryInfoVisible } = prevState;

    return {
      isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    };
  })

  closeMobile = () => this.setState({
    isMobileDeliveryInfoVisible: false,
    isMobileSearchVisible: false,
  })

  render() {
    const { address, time, search, isMobileSearchVisible, isMobileDeliveryInfoVisible } = this.state;

    console.log(this.state);

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/logo.svg" alt="Uber Eats" className="header__logo" />

            <div className="header__delivery-info">
              <Input
                name="address"
                label="where"
                onChange={this.handleChange}
                value={address}
                placeholder="address"
                iconUrl="./images/place.svg"
                isSmall={false}
              />

              <Input
                name="time"
                label="To"
                onChange={this.handleChange}
                value={time}
                placeholder="Time"
                type="time"
                isSmall={false}
              />
            </div>

            <div className="header__search">
              <Input
                name="search"
                label="Find"
                onChange={this.handleChange}
                value={search}
                placeholder="search"
                iconUrl="./images/search.svg"
              />
            </div>

            <div className="header__toggle-buttons">
              <button type="button" className="header__toggle-btn" onClick={this.toggleDeliveryInfo}>
                <img
                  src="./images/place.svg"
                  alt="Place icon"
                  // className="control__icon"
                />
              </button>
              <button type="button" className="header__toggle-btn" onClick={this.toggleSearch}>
                <img
                  src="./images/search.svg"
                  alt="Search icon"
                />
              </button>
            </div>

            <a
              href="/sign-up"
              className="header__link"
            >
          Sign up
            </a>
          </div>

          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  onChange={this.handleChange}
                  value={search}
                  placeholder="search"
                  iconUrl="./images/search.svg"
                  className="header__search-mobile"
                  isSmall={false}
                />
              )}

              {isMobileDeliveryInfoVisible && (
                <div>
                  <Input
                    label="Where"
                    name="address"
                    onChange={this.handleChange}
                    value={address}
                    placeholder="address"
                    iconUrl="./images/place.svg"
                    className="mobile-controls--is-big"
                    isSmall={false}
                  />

                  <Input
                    label="To"
                    name="time"
                    onChange={this.handleChange}
                    value={time}
                    placeholder="Time"
                    type="time"
                    className="mobile-controls--is-big"
                    isSmall={false}
                  />
                </div>
              )}

              <button type="button" className="mobile-controls__close" onClick={this.closeMobile}>
                <img
                  src="./images/close.svg"
                  alt="Search icon"
                />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
