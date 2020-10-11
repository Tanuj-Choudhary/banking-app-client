import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { renderToast } from '../../utils/toast';
import { renderOvalLoader } from '../../utils/loader';
import './customerView.css';

function CustomerView({ customer, onInputChange, fields, onSubmit }) {
  const renderCustomerPage = () => {
    if (!customer) {
      return (
        <div className="center">
         {renderOvalLoader()}
        </div>
      )
    }

    return (
      <div className="single__customer__page">
        <h1 className="single__customer__heading">Account holder</h1>
        <div className="single__customer__name">Name: {customer.name}</div>
        <div className="single__customer__balance">
          Balance: ₹{customer.currentBalance}
        </div>
        <form onSubmit={onSubmit} className="form__send-money">
          <input
            onChange={onInputChange}
            value={fields.amount}
            autoComplete="off"
            name="amount"
            placeholder="Enter amount"
            className="form__send-money__input"
            type="text"
          />
          <button type="submit" className="btn-send-money">
            Send Money
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      {renderToast()}
      {renderCustomerPage()}
    </>
  );
}

export default CustomerView;
