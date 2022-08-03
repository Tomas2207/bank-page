import { useState, useEffect } from 'react';

const SignForm = (props) => {
  const initialValues = { username: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormErrors({ noerrors: true });
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      props.handleUser(formValues.username);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be\n longer than 8 characters';
    }

    return errors;
  };
  const sign = props.signed;
  return (
    <div className="sign-form">
      <div className="dont-share">
        Don't share personal information by email, phone, SMS or social media
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Username: </label>
        <input
          type="text"
          name="username"
          id="name"
          value={formValues.username}
          onChange={handleChange}
        />
        {formErrors.username && (
          <p className="form-error">{formErrors.username}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && (
          <p className="form-error">{formErrors.password}</p>
        )}
        <button
          className="carrousel-btn"
          // onClick={(e) => {
          //   props.handleUser(e, inputValue, validated);
          // }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignForm;
