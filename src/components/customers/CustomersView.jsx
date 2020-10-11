import React from 'react';
import { Link } from 'react-router-dom';

import './customersView.css';
import { renderToast } from '../../utils/toast';

function CustomersView({ customers }) {
  const renderCustomers = () => {
    return customers.map((customer) => (
      <Link
        className="customer__link"
        to={{ pathname: `/customers/${customer._id}` }}
        key={customer._id}
      >
        <div key={customer._id} className="customer">
          <div className="customer__name">
            Name: <span className="customer__text__span">{customer.name}</span>
          </div>
          <div className="customer__balance">
            Balance:
            <span className="customer__text__span">
              ₹{customer.currentBalance}
            </span>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="customers-page">
      {renderToast()}
      <h1 className="customers__heading">Customers</h1>
      <div className="customers-list">{renderCustomers()}</div>
    </div>
  );
}

export default CustomersView;
