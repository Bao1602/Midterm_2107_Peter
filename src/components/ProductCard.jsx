import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {

  return (
    <Card style={{ width: '19rem', margin: '10px'}}>
      <Card.Img variant="top" src={product.image} style={{height: "20rem",padding: "10px"}} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
        <Card.Text>
          Category : {product.category}
        </Card.Text>
        <Button variant="primary">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>

    
  );
};

export default ProductCard;