import React from "react";
import "./MyCourses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "../../Rating/Rating";

const MyCourses = ({ academy }) => {
  return (
    /* courses show in homepage*/
    <>
      <div
        key={academy.academy_id}
        className="card-container-courses text-left mb-3"
      >
        <div className="card-my-courses">
          <div className="card-body">
            <Link
              to={`/coursedetail/${academy.academy_id}`}
              style={{ color: "black" }}
            >
              <h5 className="card-title-course">{academy.academy_name}</h5>
            </Link>
            <Link to={`/coursedetail/${academy.academy_id}`}>
              <img
                className="card-img"
                src={academy.avatar || "/no-image.png"}
                alt=""
              />
            </Link>
            <div className="card-text">
              <p className="instructor-course">
                <FontAwesomeIcon className="user-icon" icon={faUserAlt} />
                {" " + academy.teacher.name}
              </p>
              <Rating rate={academy.rate} register={academy.register} />
              <span className="price-discount-course-list">
                ${academy.price_discount}
              </span>
              <span className="price-original-course-list ml-2">
                ${academy.price}
              </span>
              {academy.register >= 5 ? (
                <button
                  className="badge-best-seller"
                  style={{ float: "right" }}
                >
                  Best-seller
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
