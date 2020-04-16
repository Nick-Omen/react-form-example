import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Form.css';

const Form = ({
  className,
  children,
  onSubmit,
}) => {
  const [formValue, setFormValue] = useState({});
  const onFormValueUpdate = ({ target: { name, value } }) => {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(formValue);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={classnames('form', className)}
    >
      {React.Children
        .toArray(children)
        .map((child) => React.cloneElement(child, {
          value: formValue[child.props.name] || '',
          className: classnames(child.props.className, 'form__control'),
          onChange: onFormValueUpdate,
        }))}

      <button
        className="button form__submit"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.node,
    ),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  className: '',
};

export default Form;
