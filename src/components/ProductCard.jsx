import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {

  return (
    <Card style={{ width: '19rem', margin: '10px', backgroundColor:'beige'}}>
      <Link to={`/products/${product.id}`}>
        <Card.Img variant="top" src={product.image} style={{height: "20rem",padding: "10px"}} />
      </Link>
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