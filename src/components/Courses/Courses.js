import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Rating from '../Rating/Rating';

const Courses = ({ academy }) => {
  const academyId = academy.academy_id;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (academyId) {
      dispatch(addToCart(academyId));
    }
  }

  return (
  /* courses show in homepage*/
    <>
      <div key={academy.academy_id} className="col-md-3 card-container-courses text-left mb-5" >
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
                {" " + academy.teacher.name}
              </p>
              <Rating rate={academy.rate} register={academy.register} />
              <span className="price-discount-course-list">
                  ${academy.price_discount} 
              </span>
              <span className="price-original-course-list ml-2">
                  ${academy.price}
              </span>
              {/* <p className="duration-course">
                4 months 10hours/week
              </p>
              <p className="level-course">
                Beginner
              </p>
              <button
                className="badge-course">
                Best-seller
              </button> */}
            </div>
            {/* enroll button */}
            <button
              className="enroll-course mt-2"
              type="button"
              onClick={addToCartHandler}
            >
              <FontAwesomeIcon
                className="mt-1"
                icon={faCartPlus} />
                <span className="ml-1">Add To Cart</span>
            </button>
          </div>

          
        </div>
      </div>
      </>
  );
};

export default Courses;