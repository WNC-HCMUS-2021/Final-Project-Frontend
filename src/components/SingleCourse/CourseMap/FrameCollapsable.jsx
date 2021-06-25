import React from "react";
import { Collapse, Nav } from "react-bootstrap";
import SingleItem from "./SingleItem";

const FrameCollapsable = ({active}) => (
  <Collapse in={active} style={{textAlign: "left"}}>
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">
        <SingleItem />
      </Nav.Link>
      <Nav.Link href="/home">
        <SingleItem />
      </Nav.Link>
      <Nav.Link href="/home">
        <SingleItem />
      </Nav.Link>
      <Nav.Link href="/home">
        <SingleItem />
      </Nav.Link>
      <Nav.Link href="/home">
        <SingleItem />
      </Nav.Link>
    </Nav>
  </Collapse>
);

export default FrameCollapsable;
