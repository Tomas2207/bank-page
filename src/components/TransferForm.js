import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { accounts } from './AccountArray';

const TransferForm = (props) => {
  const location = useLocation();
  const { from, handleAmount } = location.state;

  const initialValues = {
    alias: '',
    amount: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [succesful, setSuccesful] = useState(false);

  const handleChange = (e) => {
    setSuccesful(false);
    setFormErrors({ noerrors: true });
    e.preventDefault();
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
      setSuccesful(true);
      const index = accounts.map((x) => x.name).indexOf(from);

      props.handleAmount(index, formValues.amount, formValues.alias, from);
      setFormValues(initialValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const index = accounts.map((x) => x.name).indexOf(from);

    if (!values.alias) {
      errors.alias = 'CVU/Alias is required';
    }
    if (!values.amount) {
      errors.amount = 'Select an amount to transfer';
    } else if (isNaN(values.amount)) {
      errors.amount = 'Amount needs to be a number';
    } else if (parseInt(values.amount) > accounts[index].amount) {
      errors.amount = 'Account amount exceeded';
    }

    return errors;
  };

  return (
    <div className="transfer-container">
      <h3>Transfer</h3>
      <form action="" className="transfer-form" onSubmit={handleSubmit}>
        <h4 className="transfer-h4">{from} account</h4>
        <div>
          <label htmlFor="alias">CVU/Alias</label>
          <input
            type="text"
            name="alias"
            id=""
            value={formValues.alias}
            onChange={handleChange}
          />
          {formErrors.alias && <p className="form-error">{formErrors.alias}</p>}
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="tel"
            name="amount"
            value={formValues.amount}
            onChange={handleChange}
          />
          {formErrors.amount && (
            <p className="form-error">{formErrors.amount}</p>
          )}
        </div>
        <div>
          <label htmlFor="motive">Motive (optional)</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        {succesful && (
          <p className="succesful-transfer">Transfer was succesful!</p>
        )}
        <button className="carrousel-btn">Send</button>
      </form>
    </div>
  );
};

export default TransferForm;
