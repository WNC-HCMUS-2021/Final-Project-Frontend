import React, { useEffect } from 'react';
import Courses from '../Courses/Courses';
import Carousel from "react-multi-carousel";
import { Container } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import Icons from "../common/Icons";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listAcademys } from '../actions/academyActions';

const MainPart = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 5
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

  const dispatch = useDispatch();
  const academyList = useSelector((state) => state.academyList);
  const { loading, error, academys } = academyList; 
  useEffect(() => {
    dispatch(listAcademys);
  }, [dispatch]);

  return (
    <Container className="mt-5">

    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox>{error}</MessageBox>
    ) : (
      <>
        <div className="course-item">
          <h5 className="mb-2" style={{float: 'left'}}> 
            <Icons icon="eye" className="mr-2 text-danger" />
            Most-watched courses:
          </h5>
          <Carousel
            ssr
            responsive={responsive}
            containerClass="container"
            draggable
          >
            {
              academys.listMostView.map(academy => (
                <Courses key={academy.academy_id} academy={academy} />
              ))
            }
          </Carousel>
        </div>
        <div className="course-item">
          <h5 className="mb-2" style={{float: 'left'}}> 
            <Icons icon="fire" className="mr-2 text-danger" />
            Newest courses:
          </h5>
          <Carousel
            ssr
            responsive={responsive}
            containerClass="container"
            draggable
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {
              academys.listLatest.map(academy => (
                <Courses key={academy.academy_id} academy={academy} />
              ))
            }
          </Carousel>
        </div>

        <div className="course-item">
          <h5 className="mb-2" style={{float: 'left'}}> 
            <Icons icon="books" className="mr-2 text-danger" />
            Best-selling courses:
          </h5>
          <Carousel
            ssr
            responsive={responsive}
            containerClass="container"
            draggable
          >
            {
              academys.listOutstanding.map(academy => (
                <Courses key={academy.academy_id} academy={academy} />
              ))
            }
          </Carousel>
        </div>

        
      </>
    )
    }
    </Container>
  );
};
// Sau này tách các div này ra xử lý, thêm carousel danh sách chủ đề mua nhiều nhất dạng hình ảnh, đẹp!

export default MainPart;