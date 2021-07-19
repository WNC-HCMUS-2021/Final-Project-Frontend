import React from "react";
import "./WatchList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "../../Rating/Rating";
import api from "../../../API/listAPI";

const WatchList = ({ academy }) => {
  async function removeFromWatchList() {
    try {
      await api.removeFromWatchList(academy.academy_id);
      window.location.reload();
    } catch (err) {
      if (err.response) {
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  }

  return (
    /* courses show in homepage*/
    <>
      <div
        key={academy.academy_id}
        className="card-container-courses text-left mb-3"
      >
        <div className="card-watch-list">
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
            <button
              className="enroll-course mt-3"
              type="button"
              onClick={removeFromWatchList}
            >
              <FontAwesomeIcon className="mt-1" icon={faTrashAlt} />
              <span className="ml-1">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchList;
