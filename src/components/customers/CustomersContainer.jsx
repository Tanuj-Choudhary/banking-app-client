import React, { useEffect, useState } from 'react';

import CustomersView from './CustomersView';
import bankingAPI from '../../api/bankingAPI';
import { renderFailToast } from '../../utils/toast';

function CustomersContainer() {
  const [customers, setcustomers] = useState([]);

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

  return <CustomersView customers={customers} />;
}

export default CustomersContainer;
