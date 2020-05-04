import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';
import Footer from '../Footer/Footer';

const Select = (props) => {
  const {
    name,
    value,
    onSelect,
    options,
    iconUrl,
  } = props;

  return (
    <div className="select">
      <select
        name={name}
        value={value}
        onSelect={onSelect}
        className="select__input"
      >
        {options.map(({ value: optionValue, label }) => (
          <option value="optionValue" selected={value === optionValue}>
            {label}
          </option>
        ))}
      </select>
      {!!iconUrl && (
        <img src={iconUrl} alt="select icon" className="select__icon" />
      )}

      <img src="./images/arrow.svg" alt="arrow down" className="select__arrow" />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  iconUrl: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  iconUrl: '',
  onSelect: () => {},
};

export default Select;
