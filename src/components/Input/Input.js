import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import cx from 'classnames';

class Input extends PureComponent {
  state = {
    isFocused: false,
  }

inputRef = createRef();

handleFocus = () => this.setState({ isFocused: true });

handleBlur = () => this.setState({ isFocused: false });

focus = () => this.inputRef.current.focus();

render() {
  const {
    iconUrl,
    value,
    name,
    onChange,
    type,
    placeholder,
    className,
    isSmall,
    label,
  } = this.props;
  const { isFocused } = this.state;

  console.log({isSmall})

  // если установить npm install classnames и заимпортить import cx from 'classnames;
  // можно переписать короче:
  // const rootClass = cs(`control, {
  //   'control-focused': isFocused,
  //   [className]: !!className,
  // })

  // const inputWrapper = `control__input-wrapper ${isFocused ? `control__input-wrapper--focused` : ''} ${className}`;

  // const inputClass = `control__input ${isFocused ? `control__input-small` : isSmall} ${className}`;
  // const inputClass = `control__input ${isFocused ? `control__input-small` : isSmall} ${className}`;

  //   const inputClass = cx(`control__input , {
  //   'control__input-small': isSmall,
  //   'control__input-time': type === time,
  // });

  const inputWrapper = cx(
    'control__input-wrapper', {
      'control__input-wrapper--focused': isFocused,
      [className]: !!className,
    }
  );

  const inputClass = cx(
    'control__input', {
      'control__input--small': isSmall,
      'control__input--time': type === 'time',
    }
  );

  return (
    // <div className="control" onClick={this.focus} role="presentation">
    <label className="control">
      {label && (
        <p className="control__label">{label}</p>
      )}
      <div className={inputWrapper}>
        {!!iconUrl && (
          <img
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )}

        <input
          ref={this.inputRef}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className={inputClass}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}
}

// const Input = (props) => {

// };

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  isSmall: PropTypes.bool,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
  isSmall: true,
  label: '',
};

export default Input;
