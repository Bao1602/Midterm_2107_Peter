import { Carousel } from 'react-bootstrap';

const CarouselBanner = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1681487985079-b299ac8ba1df?q=80&w=1057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
          style={{height: "60rem"}}
        />
        <Carousel.Caption>
          <h1>Reliable</h1>
          <p>Some description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1683796112978-fa4b9fa79e58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
          style={{height: "60rem"}}
        />
        <Carousel.Caption>
          <h1>Fast</h1>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1729759671723-3ade40f5d5ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
          style={{height: "60rem"}}
        />
        <Carousel.Caption>
          <h1>Out of idea</h1>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBanner;
