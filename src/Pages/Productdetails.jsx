import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Productdetails = () => {

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <Card style={{ width: '18rem' }}>
      <h1>Item details</h1>
    </Card>
  );
};

export default Productdetails;