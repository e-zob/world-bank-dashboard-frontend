import CreateAccountForm from "../Components/CreateAccountForm";
import { postUserInfo } from "../Networking/LoginNetworking";
export default function CreateAccount() {
  return (
    <div login-form-wrapper>
      <CreateAccountForm createUser={postUserInfo} />
    </div>
  );
}
