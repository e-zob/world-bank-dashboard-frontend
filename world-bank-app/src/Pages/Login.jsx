import React from "react";
import LoginForm from "../Components/LoginForm";
import { postUserInfo } from "./LoginNetworking";

export default function Login() {
  return (
    <div login-form-wrapper>
      <LoginForm userLogin={postUserInfo} />
    </div>
  );
}
