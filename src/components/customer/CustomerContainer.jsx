import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CustomerView from './CustomerView';
import bankingAPI from '../../api/bankingAPI';
import { renderFailToast } from '../../utils/toast';

function CustomerContainer(props) {
  const history = useHistory();
  const [customer, setcustomer] = useState(null);
  const [fields, setfields] = useState({ amount: '' });
  const userID = props.match.params.id;

  useEffect(() => {
    const getCustomer = async () => {
      const res = await bankingAPI.get(`/users/${userID}`);
      const customer = res.data.data.data;

      setcustomer(customer);
    };

    getCustomer();
  }, [props.match.params.id, userID]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const error = validate();
      renderFailToast(error);
      return;
    }

    const pushToLink = `/customers/${userID}/sendMoney?amount=${fields.amount}`;
    history.push(pushToLink);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const newFields = { ...fields, [name]: value };

    setfields(newFields);
  };

  const validate = () => {
    let error = null;

    if (!fields.amount) {
      error = 'Please enter amount';
    }

    if (isNaN(fields.amount)) {
      error = 'Please enter a number';
    }

    if (fields.amount > customer.currentBalance) {
      error = 'Insuffient Funds';
    }

    return error;
  };

  return (
    <CustomerView
      onInputChange={onInputChange}
      fields={fields}
      onSubmit={onSubmit}
      customer={customer}
    />
  );
}

export default CustomerContainer;
