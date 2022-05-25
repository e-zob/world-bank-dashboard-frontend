import React from "react";
import LoginForm from "../Components/LoginForm";
import { postUserInfo } from "../Networking/LoginNetworking";

export default function Login() {
  return (
    <div class="login-form-wrapper">
      <LoginForm userLogin={postUserInfo} />
    </div>
  );
}
