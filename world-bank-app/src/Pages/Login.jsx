import React from "react";
import LoginForm from "../Components/LoginForm";
import { postUserLogin } from "./LoginNetworking";

export default function Login() {
  return (
    <div login-form-wrapper>
      <LoginForm userLogin={postUserLogin} />
    </div>
  );
}
