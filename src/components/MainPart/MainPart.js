import React from 'react';
import Courses from '../Courses/Courses';
import Carousel from "react-multi-carousel";
import { Container } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";

const MainPart = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };
  return (
    <Container>
      <div className="course-item">
        <Carousel
          ssr
          partialVisbile
          responsive={responsive}
          containerClass="container"
          draggable
        >
              <Courses />
              <Courses />
              <Courses />
              <Courses />
              <Courses />
              <Courses />
              <Courses />
              <Courses />
        </Carousel>
      </div>

      <div className="course-item">
        <Carousel
          ssr
          partialVisbile
          responsive={responsive}
          containerClass="container"
          draggable
        >
              <Courses />
              <Courses />
              <Courses />
              <Courses />
              <Courses />
              <Courses />
              <Courses />
              <Courses />
        </Carousel>
      </div>
    </Container>
  );
};

export default MainPart;