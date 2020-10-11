import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import SendMoneyView from './SendMoneyView';
import bankingAPI from '../../api/bankingAPI';
import { renderFailToast } from '../../utils/toast';
import { useHistory } from 'react-router-dom';

function SendMoneyContainer(props) {
  const history = useHistory();
  const [customers, setcustomers] = useState([]);
  const query = queryString.parse(props.location.search);
  const senderID = props.match.params.id;

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const res = await bankingAPI.get('/users');
        const customers = res.data.data.data;
        setcustomers(customers);
      } catch (err) {
        renderFailToast(err.message);
      }
    };

    getCustomers();
  }, []);

  const onClick = async (e) => {
    e.preventDefault();

    const recieverID = e.target.closest('.customer').id;
    const data = { money: parseInt(query.amount) };

    try {
      await bankingAPI.post(`/users/${senderID}/sendmoney/${recieverID}`, data);
      alert('Money succesfully sent');
      history.push('/customers');
    } catch (err) {
      if (err.response) {
        renderFailToast(err.response.data.message);
      } else {
        renderFailToast(err.message);
      }
    }
  };

  return (
    <SendMoneyView
      customers={customers}
      senderID={senderID}
      onClick={onClick}
    />
  );
}

export default SendMoneyContainer;
