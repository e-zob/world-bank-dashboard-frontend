import CreateAccountForm from "../Components/CreateAccountForm";
import { postUserInfo } from "./LoginNetworking";
export default function CreateAccount() {
  return (
    <div login-form-wrapper>
      <CreateAccountForm createUser={postUserInfo} />
    </div>
  );
}
