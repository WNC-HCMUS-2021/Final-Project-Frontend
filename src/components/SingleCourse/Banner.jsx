import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./SingleCourse.css";
import { useHistory } from "react-router-dom";

function Banner(props) {
  // const pic_url = author.user_pic ? author.user_pic : "/img/noPic.jpg";

  const history = useHistory();
  const addToCartHandler = () => {
    console.log(props.academy.academy_id);
    history.push(`cart/${props.academy.academy_id}`);
  }

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
                  src={props.academy.avatar}
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
                {props.academy.academy_name}
              </h1>
              </Link>
              <p
                className="mb-4 mr-5"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "#fff" }}
              >
                {props.academy.description_short}
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
               {props.academy.rate}
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
              ({props.academy.register})
              </span>
            </div>

            <div className="price">
              <span className="price-discount">
                  {`$${props.academy.price_discount}`}
              </span>
              <span className="price-original">
              {`$${props.academy.price}`}
              </span>
            </div>

            {
              props.academy.is_delete !== true && (
                <button
                  className="enroll mt-1"
                  type="button"
                  onClick={addToCartHandler}
                >
                  <FontAwesomeIcon
                    icon={faCartPlus} />
                    <span className="ml-1">Add To Cart</span>
                </button>
              )
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
