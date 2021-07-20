import React from "react";
import api from "../API/listAPI";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoadingBox from "../components/LoadingBox";
import WatchList from "../components/User/WatchList/WatchList";

function MyWatchList() {
  let [watchList, setWatchList] = useState();
  useEffect(() => {
    const getWatchList = async () => {
      try {
        let res = await api.watchList();
        if (res.data) {
          setWatchList(res.data.data);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      }
    };

    getWatchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  document.title = "My Academy";
  return !watchList ? (
    <LoadingBox />
  ) : (
    <Container>
      <Row>
        <Col>
          {watchList.map((academy) => (
            <WatchList
              key={academy.academy_id}
              academy={academy}
              setWatchList={setWatchList}
              watchList={watchList}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default MyWatchList;
