import React from 'react';
import classnames from 'classnames';
import { FormControlBasePropTypes } from '../base-prop-types';
import './Input.css';

const Input = ({
  className,
  label,
  name,
  value,
  onChange,
}) => (
  <label className={classnames('form-control', className)}>
    {label && (
      <span className="form-control__label">
        {label}
      </span>
    )}
    <input
      className="input form-control__input"
      name={name}
      value={value}
      onChange={onChange}
    />
  </label>
);

Input.propTypes = {
  ...FormControlBasePropTypes,
};

Input.defaultProps = {
  className: '',
  label: '',
  value: '',
};

export default Input;
