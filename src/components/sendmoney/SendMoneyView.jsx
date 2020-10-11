import React from 'react';

import './sendMoneyView.css';
import { renderToast } from '../../utils/toast';
import { renderOvalLoader } from '../../utils/loader';


function SendMoneyView({ customers, senderID, onClick }) {
  const renderCustomers = () => {
    if (customers.length === 0) {
      return (
        <div className="loader__center">
         {renderOvalLoader()}
        </div>
      )
    }

    return customers.map((customer) => {
      if (customer._id !== senderID) {
        return (
          <div
            onClick={onClick}
            id={customer._id}
            key={customer._id}
            className="customer"
          >
            <div className="customer__name">
              Name:{' '}
              <span className="customer__text__span">{customer.name}</span>
            </div>
            <div className="customer__balance">
              Balance:
              <span className="customer__text__span">
                ₹{customer.currentBalance}
              </span>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="customers-page">
      {renderToast()}
      <h1 className="customers__heading">Send money to</h1>
      <div className="customers-list">{renderCustomers()}</div>
    </div>
  );
}

export default SendMoneyView;
