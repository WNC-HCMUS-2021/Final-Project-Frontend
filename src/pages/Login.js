import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

function Login(props) {
  return (
    <div>
      <LoginForm {...props} />
    </div>
  );
}

export default Login;
