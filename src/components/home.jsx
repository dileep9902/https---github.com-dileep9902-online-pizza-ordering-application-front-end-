import React ,{useState} from 'react';
import { Carousel } from 'react-bootstrap';
import pizza2 from "../images/pizza2.jpg";
import pizza3 from "../images/pizza3.jpg";
import delivery1 from "../images/delivery1.jpg"
import Image from './image';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <Image />
      </div>
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"100%"}}>
      <Carousel.Item>
        <img
          className=" w-100"
          src={pizza2}
          height="600px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizza3}
          height="600px"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={delivery1}
          height="600px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;