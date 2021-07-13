import { useState } from "react";
import "./Profile.css";
import {
  Button,
  Container,
  Card,
  Row,
  Col,
  Tabs,
  Tab,
  Modal,
  Alert,
} from "react-bootstrap";
import moment from "moment";
import { useForm } from "react-hook-form";
import api from "../../../API/listAPI";

const Profile = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  let [profile, setProfile] = useState(async () => {
    const res = await api.myProfile();

    if (res.data) {
      res.data.birthday = moment(res.data.birthday)
        .format("DD/MM/YYYY")
        .toString();
      profile = setProfile(res.data);
    } else {
      alert("Invalid login.");
    }
  }, []);

  function setError(data) {
    setErrorMessage(data);
    setSuccessMessage(false);
  }

  function setSuccess(data) {
    setSuccessMessage(data);
    setErrorMessage(false);
  }

  const onSubmitChangePassword = async function (data) {
    try {
      await api.changePassword(data);
      setSuccess("Cập nhật mật khẩu thành công!");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

  const onSubmitUpdateProfile = async function (data) {
    try {
      await api.updateProfile(data);
      window.location.reload();
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

  const [showDialogChangPassword, setShowDialogChangPassword] = useState(false);

  const handleCloseDiaLogChangPassWord = () =>
    setShowDialogChangPassword(false);
  const handleShowDiaLogChangPassWord = () => {
    setShowDialogChangPassword(true);
    setSuccessMessage(false);
    setErrorMessage(false);
  };

  const [showDialogUpdateProfile, setShowDialogUpdateProfile] = useState(false);

  const handleCloseDiaLogUpdateProfile = () =>
    setShowDialogUpdateProfile(false);
  const handleShowDiaLogUpdateProfile = () => {
    setShowDialogUpdateProfile(true);
    setSuccessMessage(false);
    setErrorMessage(false);
  };

  return (
    <Container fluid style={{ width: "70%" }}>
      <Card border="secondary px-2 py-3">
        <Row>
          <Col md={4}>
            <div className="d-flex justify-content-center">
              <div className="profile-image">
                <img
                  src="https://cdn.nohat.cc/thumb/f/720/comvecteezy420553.jpg"
                  alt="Avatar"
                  style={{ height: "230px", width: "230px" }}
                />
                <div className="btn-update">Update avatar</div>
              </div>
            </div>

            <p className="m-t-0 m-b-0 profile-name">{profile.name}</p>
          </Col>
          <Col md={8}>
            <Tabs defaultActiveKey="my-profile" className="mb-1">
              <Tab eventKey="my-profile" title="My profile">
                <div className="profile-tab">
                  <Row>
                    <Col md={4}>
                      <label>Username</label>
                    </Col>
                    <Col md={8}>
                      <p>{profile.username}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <label>Name</label>
                    </Col>
                    <Col md={8}>
                      <p>{profile.name}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <label>Gender</label>
                    </Col>
                    <Col md={8}>
                      <p>{profile.gender}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <label>Birthday</label>
                    </Col>
                    <Col md={8}>
                      <p>{profile.birthday}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <label>Email</label>
                    </Col>
                    <Col md={8}>
                      <p>{profile.email}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <label>Phone</label>
                    </Col>
                    <Col md={8}>
                      <p>{profile.phone_number}</p>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab eventKey="my-courses" title="My courses">
                <div className="profile-tab">
                  <Row>
                    <Col md={4}>
                      <label>Experience</label>
                    </Col>
                    <Col md={8}>
                      <p>Expert</p>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab eventKey="watch-list" title="Watch list">
                <div className="profile-tab">
                  <Row>
                    <Col md={4}>
                      <label>Experience</label>
                    </Col>
                    <Col md={8}>
                      <p>Expert</p>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                className="mr-2"
                onClick={handleShowDiaLogUpdateProfile}
              >
                Update Profile
              </Button>{" "}
              <Button variant="primary" onClick={handleShowDiaLogChangPassWord}>
                Chang Password
              </Button>{" "}
              {/* dialog change password */}
              <Modal
                show={showDialogChangPassword}
                onHide={handleCloseDiaLogChangPassWord}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {errorMessage ? (
                    <Alert
                      variant="warning"
                      onClose={() => setError(false)}
                      dismissible
                    >
                      {errorMessage}
                    </Alert>
                  ) : null}
                  {successMessage ? (
                    <Alert
                      variant="success"
                      onClose={() => {
                        setSuccess(false);
                      }}
                      dismissible
                    >
                      {successMessage}
                    </Alert>
                  ) : null}
                  <form
                    id="form-change-password"
                    onSubmit={handleSubmit2(onSubmitChangePassword)}
                    key={2}
                  >
                    <div className="form-group">
                      <label>
                        Old password{" "}
                        {errors2["oldPassword"] && <span color="red">*</span>}
                      </label>
                      <input
                        className="form-control"
                        placeholder="Enter old password"
                        type="password"
                        {...register2("oldPassword", { required: true })}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        New password{" "}
                        {errors2["newPassword"] && <span color="red">*</span>}
                      </label>
                      <input
                        className="form-control"
                        placeholder="Enter new password"
                        type="password"
                        {...register2("newPassword", { required: true })}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Retype password{" "}
                        {errors2["rePassword"] && <span color="red">*</span>}
                      </label>
                      <input
                        className="form-control"
                        placeholder="Retype password"
                        type="password"
                        {...register2("rePassword", { required: true })}
                      />
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={handleCloseDiaLogChangPassWord}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    form="form-change-password"
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* dialog Update profile */}
              <Modal
                show={showDialogUpdateProfile}
                onHide={handleCloseDiaLogUpdateProfile}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Update profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {errorMessage ? (
                    <Alert
                      variant="warning"
                      onClose={() => setError(false)}
                      dismissible
                    >
                      {errorMessage}
                    </Alert>
                  ) : null}
                  {successMessage ? (
                    <Alert
                      variant="success"
                      onClose={() => {
                        setSuccess(false);
                      }}
                      dismissible
                    >
                      {successMessage}
                    </Alert>
                  ) : null}
                  <form
                    id="form-update-profile"
                    onSubmit={handleSubmit(onSubmitUpdateProfile)}
                    key={1}
                  >
                    <div className="form-group">
                      <label>
                        Full name
                        {errors["name"] && <span color="red">*</span>}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        defaultValue={profile.name}
                        {...register("name", { required: true })}
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Email
                        {errors["email"] && <span color="red">*</span>}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        defaultValue={profile.email}
                        {...register("email", { required: true })}
                      />
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={handleCloseDiaLogUpdateProfile}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    form="form-update-profile"
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Profile;
