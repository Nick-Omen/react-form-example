import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormControlBasePropTypes } from '../base-prop-types';
import './Select.css';

const Select = ({
  className,
  label,
  name,
  value,
  options,
  onChange,
}) => (
  <label className={classnames('form-control', className)}>
    {label && (
      <span className="form-control__label">
        {label}
      </span>
    )}
    <select
      className="select form-control__input"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">---</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

Select.propTypes = {
  ...FormControlBasePropTypes,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  ).isRequired,
};

Select.defaultProps = {
  className: '',
  label: '',
  value: '',
};

export default Select;
