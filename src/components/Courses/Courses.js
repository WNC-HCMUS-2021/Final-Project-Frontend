import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus, faStarHalfAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
  return (
  /* courses show in homepage*/
    <>
      <div className="col-md-3 card-container text-left mb-5" >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              React with Redux
            </h5>
            <img className="card-img"
              src="https://i.ibb.co/ch8dHPv/4.jpg"
              alt="" />
            <div className="card-text">
              <p className="instructor">
                <FontAwesomeIcon
                  className="user-icon"
                  icon={faUserAlt} />
                Stephen Grider
              </p>
              <p>
                <span className="rating">
                  4.5
                </span>
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
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon"
                  icon={faStarHalfAlt} />
                <span className="student">
                  (300899)
                  </span>
              </p>
              <p className="price">
                $139.99
              </p>
              <p className="duration">
                4 months 10hours/week
              </p>
              <p className="level">
                Beginner
              </p>
              <button
                className="badge">
                Best-seller
              </button>
            </div>
          </div>

          {/* enroll button */}
          <button
            className="enroll"
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