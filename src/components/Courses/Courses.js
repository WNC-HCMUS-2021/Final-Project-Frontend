import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus, faStarHalfAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Courses = ({ academy }) => {
  return (
  /* courses show in homepage*/
    <>
      <div key={academy.academy_id} className="col-md-3 card-container-course text-left mb-5" >
        <div className="card-course">
          <div className="card-body">
            <Link to={`/coursedetail/${academy.academy_id}`} style={{ color: 'black' }}>
              <h5 className="card-title-course">
                {academy.academy_name}
              </h5>
            </Link>
            <Link to={`/coursedetail/${academy.academy_id}`}>
              <img className="card-img"
                src={academy.avatar}
                alt="" />
            </Link>
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
              className="mt-1"
              icon={faCartPlus} />
              <span className="ml-1">Add To Cart</span>
          </button>
        </div>
      </div>
      </>
  );
};

export default Courses;