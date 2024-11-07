import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import Productdetails from './Pages/Productdetails';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

function App() {
  let element = useRoutes([
    {
      //go to home page
      path: '/',
      element: <Home />
    },
    {
      //productdetails Page
      path: '/product/:id',
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
  ]);

  return (
    <>
      {element}
    </>
  );
}

export default App;