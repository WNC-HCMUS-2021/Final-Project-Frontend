import React from "react";
import Icons from "../../common/Icons";

const SingleItem = () => {
  return (
    <li className="w-100">
      <div
        className="nav-link border-bottom"
      >
        {/* <Link
          href="/"
          replace
        > */}
          <div style={{ cursor: "pointer" }}>
            <p className="m-0">
              <Icons
                icon="play"
                className="mr-2"
              />

              "1. What Is React?"
            </p>
            <small className="text-muted">
              video
            </small>
          </div>
        {/* </Link> */}
      </div>
    </li>
  );
};

export default SingleItem;
