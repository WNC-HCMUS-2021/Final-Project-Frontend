import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import "./Rating.css";

export default function Rating(props) {
  const { rate, register } = props;
  return (
    <div>
        <span className="rating">
            {rate + " "}
        </span>
        <span>
            <FontAwesomeIcon
            className="star-icon"
            icon={
                rate >= 1
                  ? faStar
                  : rate >= 0.5
                  ? faStarHalfAlt
                  : null
              } 
            />
            <FontAwesomeIcon
            className="star-icon"
            icon={
                rate >= 2
                  ? faStar
                  : rate >= 1.5
                  ? faStarHalfAlt
                  : null
              } 
            />
            <FontAwesomeIcon
            className="star-icon"
            icon={
                rate >= 3
                  ? faStar
                  : rate >= 2.5
                  ? faStarHalfAlt
                  : null
              } 
            />
            <FontAwesomeIcon
            className="star-icon"
            icon={
                rate >= 4
                  ? faStar
                  : rate >= 3.5
                  ? faStarHalfAlt
                  : null
              } 
            />
            <FontAwesomeIcon
            className="star-icon"
            icon={
                rate >= 5
                  ? faStar
                  : rate >= 4.5
                  ? faStarHalfAlt
                  : null
              } 
            />
        </span>
        {/* <span>
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
        </span> */}
        <span className="student">
            ({register + " students"})
        </span>
    </div>
    
  );
}