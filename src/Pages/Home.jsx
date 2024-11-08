import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { Container, Row } from 'react-bootstrap';
import Navibar from '../components/Navbar';
import CarouselBanner from '../components/CarouselBanner';
import { API_URL } from "../constant";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = (item) => {
    setSearchQuery(item);
  };

  const seachedProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{backgroundColor: 'grey'}}>
      <Navibar />
      <CarouselBanner />
      <h1>Find your product here </h1>
      <SearchBar onSearch={handleSearch} />
      <Container>
        <Row>
          {seachedProduct.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
