import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./SingleCourse.css"

function Banner() {
  // const pic_url = author.user_pic ? author.user_pic : "/img/noPic.jpg";

  return (
    <section
      className="px-0 py-5 m-0"
      style={{
        backgroundColor: "#1a274e",
        color: "whi_te",
      }}
    >
      <div className="container">
        <div className="row pt-5 d-flex" style={{ zIndex: 1 }}>
          <div className="col-12 col-md-6">
            <div className="shape-before">
              <Link to="/coursevideo">
                <Card.Img
                  className="shadow-lg"
                  style={{
                    position: "relative",
                    boxShadow: "0 2px 55px rgba(47,85,212,0.3) !important",
                  }}
                  src="https://firebasestorage.googleapis.com/v0/b/tu-academia.appspot.com/o/course-pics%2F557-ddadadasda.png?alt=media&token=c0efa91d-68be-486b-b129-405bc68f9fe1"
                ></Card.Img>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 pl-lg-4 pr-lg-3" style={{textAlign: "left"}}>
            <div className="title-heading">
              <Link to="/coursevideo">
              <h1
                className="h2 my-4 mt-md-0 text-shadow"
                style={{ color: "#fff" }}
              >
                React with Redux
              </h1>
              </Link>
              <p
                className="mb-4 mr-5"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "#fff" }}
              >
                A practical programming course for office workers, academics, and administrators who want to improve their productivity.
              </p>
            </div>

            <div className="teacher d-flex align-items-center px-2 mt-3">
              <img
                alt="author name"
                className="avatar avatar-md-sm rounded-circle shadow"
                src="https://firebasestorage.googleapis.com/v0/b/tu-academia.appspot.com/o/user-pics%2F366-tomas_vasquez?alt=media&token=61a8fc1e-936a-4cdb-a71e-ecb9063f42b2"
                style={{height: "40px", width: "40px"}}
              />
              <div className="ml-2">
                <h6
                  className="mb-0 text-shadow"
                  style={{ color: "#fff" }}
                >Stephen Grider</h6>
                <p
                  className="small my-0 text-muted"
                  style={{ color: "#fff" }}
                >
                  Web developer
                </p>
              </div>
            </div>

            <div className="mt-2">
              <span className="rating">
              4.5
              </span>
              <FontAwesomeIcon
              className="star-icon ml-2"
              icon={faStar} />
              <FontAwesomeIcon
              className="star-icon"
              icon={faStar} />
              <FontAwesomeIcon
              className="star-icon"
              icon={faStar} />
              <FontAwesomeIcon
              className="star-icon"
              icon={faStar} />
              <FontAwesomeIcon
              className="star-icon"
              icon={faStarHalfAlt} />
              <span className="student-course-detail">
              (300899)
              </span>
            </div>

            <div className="price">
              <span className="price-discount">
                  $139.99
              </span>
              <span className="price-original">
                  $199.99
              </span>
            </div>
            
            <button
              className="enroll mt-1"
              type="button"
            >
              <FontAwesomeIcon
                icon={faCartPlus} />
                <span className="ml-1">Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
