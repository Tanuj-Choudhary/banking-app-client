import React from 'react';
import { Link } from 'react-router-dom';

import './homeView.css';

function HomeView() {
  return (
    <div className="home-page">
      <Link className="customers-link" to={{ pathname: '/customers' }}>
        view all customers
      </Link>
    </div>
  );
}

export default HomeView;
