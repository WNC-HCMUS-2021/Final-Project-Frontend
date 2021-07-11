import { useState } from "react";
import "./Profile.css";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faPhone,
  faEnvelope,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { axiosInstance, parseJwt } from "../../../utils";
import moment from "moment";

const Profile = (props) => {
  let [profile, setProfile] = useState(async () => {
    {
      const res = await axiosInstance.get("/user/profile");

      if (res.data) {
        res.data.birthday = moment(res.data.birthday)
          .format("DD/MM/YYYY")
          .toString();
        profile = setProfile(res.data);
      } else {
        alert("Invalid login.");
      }
    }
  }, []);
  // const myProfile = async () => {
  //   const res = await axiosInstance.get("/user/profile", {
  //     headers: {
  //       "x-access-token": localStorage.token,
  //     },
  //   });

  //   if (res.data) {
  //     res.data.birthday = moment(res.data.birthday)
  //       .format("DD/MM/YYYY")
  //       .toString();
  //     profile = setProfile(res.data);
  //   } else {
  //     alert("Invalid login.");
  //   }
  // };

  // myProfile();

  return (
    <Container fluid style={{ width: "50%" }}>
      <Card border="secondary px-2 py-3">
        <Row>
          <Col md={4}>
            <div className="profile-image">
              <img
                src="https://cdn.nohat.cc/thumb/f/720/comvecteezy420553.jpg"
                style={{ height: "220px", width: "220px" }}
              />
              <div className="btn-update">Update avatar</div>
            </div>
          </Col>
          <Col md={8}>
            <p className="m-t-0 m-b-0 profile-name">{profile.name}</p>
            <div className="information">
              <FontAwesomeIcon className="user-icon" icon={faBirthdayCake} />{" "}
              {profile.birthday}
            </div>
            <div className="information">
              <FontAwesomeIcon className="user-icon" icon={faVenusMars} />{" "}
              {profile.gender}
            </div>
            <div className="information">
              <FontAwesomeIcon className="user-icon" icon={faPhone} />{" "}
              {profile.phone_number}
            </div>
            <div className="information">
              <FontAwesomeIcon className="user-icon" icon={faEnvelope} />{" "}
              {profile.email}
            </div>

            <Row className="justify-content-md-end pr-4 mb-3">
              <div className="mr-2">
                <Button variant="primary">Update profile</Button>
              </div>
              <div>
                <Button variant="primary">Change password</Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Profile;
