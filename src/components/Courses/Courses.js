import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus, faStarHalfAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
  return (
  /* courses show in homepage*/
    <>
      <div className="col-md-3 card-container-course text-left mb-5" >
        <div className="card-course">
          <div className="card-body">
            <h5 className="card-title-course">
              React with Redux
            </h5>
            <img className="card-img"
              src="https://i.ibb.co/ch8dHPv/4.jpg"
              alt="" />
            <div className="card-text">
              <p className="instructor-course">
                <FontAwesomeIcon
                  className="user-icon"
                  icon={faUserAlt} />
                Stephen Grider
              </p>
              <p>
                <span className="rating-course">
                  4.5
                </span>
                <FontAwesomeIcon
                  className="star-icon-course"
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon-course"
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon-course"
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon-course"
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon-course"
                  icon={faStarHalfAlt} />
                <span className="badge-course">
                  (300899)
                  </span>
              </p>
              <p className="price-course">
                $139.99
              </p>
              <p className="duration-course">
                4 months 10hours/week
              </p>
              <p className="level-course">
                Beginner
              </p>
              <button
                className="badge-course">
                Best-seller
              </button>
            </div>
          </div>

          {/* enroll button */}
          <button
            className="enroll-course"
            type="button"
          >
            <FontAwesomeIcon
              icon={faCartPlus} />
              Add To Cart
          </button>
        </div>
      </div>
      </>
  );
};

export default Courses;