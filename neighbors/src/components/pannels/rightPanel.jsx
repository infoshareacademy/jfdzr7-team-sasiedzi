import PropTypes from 'prop-types';

import { AuthImage } from '../AuthImage';
import RegisterImg from '../../img/register.svg';

export const RightPanel = ({ handleClick }) => {
  return (
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us?</h3>
        <p>Login to see and add posts.</p>
        <button onClick={handleClick} className="btn transparent" id="sign-in-btn">
          Sign in
        </button>
      </div>
      <AuthImage imageSrc={RegisterImg} />
    </div>
  );
};

RightPanel.propTypes = {
  handleClick: PropTypes.func,
};
