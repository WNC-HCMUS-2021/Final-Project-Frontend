import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { axiosInstance, parseJwt } from "../../utils";

import { useForm } from "react-hook-form";

export default function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async function (data) {
    try {
      const res = await axiosInstance.post("/auth", data);
      if (res.data.result) {
        localStorage.token = res.data.data.accessToken;
        const obj = parseJwt(res.data.data.accessToken);
        localStorage.userId = obj.userId;
      } else {
        alert("Invalid login.");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

  return (
    <div className="login">
      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <h3>Log In</h3>

        <div className="form-group">
          <label>Username {errors.username && <span>*</span>}</label>
          <input
            className="form-control"
            placeholder="Enter username"
            type="text"
            autoFocus
            {...register("username", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>
            Password{" "}
            {errors.password && <span style={{ color: "red" }}>*</span>}
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Log In
        </button>
        <p className="forgot-password text-right">
          Forgot <Link to="/">password?</Link>
        </p>
      </form>
    </div>
  );
}
