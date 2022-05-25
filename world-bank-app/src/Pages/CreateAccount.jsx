import CreateAccountForm from "../Components/CreateAccountForm";
import { postUserInfo } from "../Networking/LoginNetworking";
export default function CreateAccount() {
  return (
    <div className="login-form-wrapper">
      <CreateAccountForm createUser={postUserInfo} />
    </div>
  );
}
