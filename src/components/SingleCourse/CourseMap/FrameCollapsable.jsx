import React from "react";
import { Collapse, Nav } from "react-bootstrap";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const FrameCollapsable = ({active}) => (
  <Collapse in={active} style={{textAlign: "left"}}>
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link>
        <Link to="/coursevideo">
          <SingleItem />
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/coursevideo">
          <SingleItem />
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/coursevideo">
          <SingleItem />
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/coursevideo">
          <SingleItem />
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/coursevideo">
          <SingleItem />
        </Link>
      </Nav.Link>
    </Nav>
  </Collapse>
);

export default FrameCollapsable;
