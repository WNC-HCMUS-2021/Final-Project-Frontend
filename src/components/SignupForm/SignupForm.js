import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./SignupForm.css";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignupForm = (props) => {
  let {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [birthday, setBirthday] = useState(new Date());

  const onSubmit = async function (data) {
    try {
      console.log(data);
      //   const res = await axiosInstance.post("/auth", data);
      //   if (res.data.result) {
      //     localStorage.token = res.data.data.accessToken;
      //     const obj = parseJwt(res.data.data.accessToken);
      //     localStorage.userId = obj.userId;
      //     localStorage.username = obj.username;

      //     props.setIsLogin(true);

      //     history.push("/");
      //   } else {
      //     alert("Invalid login.");
      //   }
    } catch (err) {
      if (err.response) {
        // setErrorMessage(err.response.data.message);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

  return (
    <div className="signup">
      <form className="form-signup" onSubmit={handleSubmit(onSubmit)}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            {...register("username", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <Row>
            <Col>
              <input
                type="radio"
                value="Nam"
                name="gender"
                {...register("gender", { required: true })}
              />
              Male
            </Col>
            <Col>
              <input
                type="radio"
                value="Nữ"
                name="gender"
                {...register("gender", { required: true })}
              />
              Female
            </Col>
            <Col>
              <input
                type="radio"
                value="Khác"
                name="gender"
                {...register("gender", { required: true })}
              />
              Other
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Phone number"
            {...register("phone_number", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Birthday</label>
          <div>
            <Controller
              control={control}
              name="birthday"
              valueName="selected"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <DatePicker
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                  selected={birthday}
                  onChange={(date) => {
                    setBirthday(date);
                  }}
                />
              )}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">log in?</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
