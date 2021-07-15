import React, { useState } from "react";
import Banner from "./Banner";
import Description from "./Description";
import MoreCourses from "./MoreCourses";
import { createReview } from "../actions/academyActions";
import { useSelector, useDispatch } from "react-redux";
import MessageBox from "../MessageBox";
import LoadingBox from "../LoadingBox";

export default function SingleCourse({academy}) {
  const academyId = academy.academy_id.toString();
  const dispatch = useDispatch();
  const userToken = '' + localStorage.token;
  const academyReviewCreate = useSelector((state) => state.academyReviewCreate);
  const {loading, error } = academyReviewCreate;

  const [point, setPoint] = useState(0);
  const [comment, setComment] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && point) {
      const pointInt = Number(point);
      dispatch(
        createReview(userToken, { point: pointInt, comment, academy_id: academyId })
      );
    } else {
      alert('Please enter comment and point');
    }
  };

  return (
    <>
      <Banner academy={academy}/>
      <Description academy={academy}/>
      <MoreCourses academy={academy}/>
      <li>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h2>Review Course</h2>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              value={point}
              onChange={(e) => setPoint(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="1">1- Poor</option>
              <option value="2">2- Fair</option>
              <option value="3">3- Good</option>
              <option value="4">4- Very good</option>
              <option value="5">5- Excelent</option>
            </select>
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Leave a rating
            </button>
          </div>
          <div>
            {loading && <LoadingBox></LoadingBox>}
            {error && (
              <MessageBox variant="danger">
                {error}
              </MessageBox>
            )}
          </div>
        </form>
      </li>
    </>
  );
}
