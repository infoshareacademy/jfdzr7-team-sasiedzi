import { Login } from '../Login/Login';
import { Registration } from '../RegistrationForm/RegistrationForm';
import '../mainLayout.css';

export function FormsContainer() {
  return (
    <div className="signin-signup">
      <Login></Login>
      <Registration></Registration>
    </div>
  );
}
