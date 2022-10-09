import PropTypes from 'prop-types';

import { AuthImage } from '../AuthImage';
import LogImg from '../../img/login.svg';

export const LeftPanel = ({ handleClick }) => {
  return (
    <div className="panel left-panel">
      <div className="content">
        <h3>New here?</h3>
        <p>Register to help or get help from your neighbours!</p>
        <button onClick={handleClick} className="btn transparent" id="sign-up-btn">
          Sign up
        </button>
      </div>
      <AuthImage imageSrc={LogImg} />
    </div>
  );
};

LeftPanel.propTypes = {
  handleClick: PropTypes.func,
};
