import React, { useEffect } from "react";
import Video from "./Video";
import CardDescription from "./CardDescription";
import CourseMap from "../SingleCourse/CourseMap";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { detailAcademyOutline } from "../actions/academyActions";
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";

const CourseVideo = () => {
  const { academyId = "", outlineId = "" } = useParams();
  console.log(academyId);
  console.log(outlineId);

  const dispatch = useDispatch();

  const outlineDetail = useSelector((state) => state.outlineDetail);
  const { loading, error, outline } = outlineDetail;
  useEffect(() => {
      dispatch(detailAcademyOutline(outlineId));
  }, [dispatch, outlineId]);

  console.log(outline);

  return (
    <>
      <div style={{ minHeight: "75vh" }}>
        <Container fluid={true}>
          <Row>
            {loading ? <LoadingBox />
            : error ? <MessageBox>{error}</MessageBox>
            : (
              <>
              <Col xs={9}>
                <Video url={outline.url_video} />
                <CardDescription outlineDetail={outline} />
                
              </Col>
              <Col xs={3}>
                <CourseMap academyId={academyId}/>
              </Col>
              </>
            )
            }
            
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CourseVideo;
