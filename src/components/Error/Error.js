import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

const Error = (props) => {
  const { message } = props;

  return (
    <div className="error">
      <p className="error__text">
        {message}
      </p>

      <a href="/" className="error__link">Home</a>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Sorry, smth went wrong',
};

export default Error;
