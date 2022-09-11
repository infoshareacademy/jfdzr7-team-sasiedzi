import { Login } from '../login/Login';
import { Registration } from '../singUp/Registration';
import '../mainLayout.css';

export function FormsContainer() {
  return (
    <div className="signin-signup">
      <Login></Login>
      <Registration></Registration>
    </div>
  );
}
