import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navibar from '../components/Navbar';
import * as React from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    console.log("This is comming from productdetails");
    console.log(product.id, product.title);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Navibar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh', // Ensure the content fills the full height of the screen
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          <ArrowBackIcon /> BACK
        </Button>

        <Card sx={{ maxWidth: 400, width: '18rem' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.title}
              height="350"
              image={product.image}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {product.description}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Price: ${product.price}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Rating: {product.rating.rate}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          sx={{ marginTop: '20px' }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
