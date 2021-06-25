// import CourseMap from "components/course/CourseMap";
import React from "react";
import { Container, Row } from "react-bootstrap";
import CourseMap from "./CourseMap";

export default function Description() {
  return (
    <Container className="mt-3" style={{textAlign: "left"}}>
      <Row>
        <div className="co-12 col-md-6">
          <>
            <div className="section-title mt-4 my-2">
              <h3 className="mb-0">
                Course Details: 
              </h3>
            </div>
            Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web Aprende sobre la libreria mas popular para hacer interfaces de usuario en la web
          </>
        </div>

        <div className="col-12 col-md-6">
          <div className="section-title mt-4 my-2">
            <h3 className="mb-0">
              Course Content:
            </h3>
          </div>
          <div className="border mt-2">
            <CourseMap />
          </div>
        </div>
      </Row>
    </Container>
  );
}
