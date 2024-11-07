import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import Productdetails from './Pages/Productdetails';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  let element = useRoutes([
    {
      //go to home page
      path: '/',
      element: <Home />
    },
    {
      //productdetails Page
      path: '/products/:id',
      element: <Productdetails />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/checkout',
      element: <Checkout />
    },
    {
      path: '*',
      element: <NotFoundPage />
    },
  ]);

  return (
    <>
      {element}
    </>
  );
}

export default App;