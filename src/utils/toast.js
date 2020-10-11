import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const renderFailToast = (message) =>
  toast.error(`🦄 Oops! ${message}`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const renderToast = () => (
  <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover
  />
);
