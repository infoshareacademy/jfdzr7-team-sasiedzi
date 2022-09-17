import './mainLayout.css';
import PropTypes from 'prop-types';

export const AuthImage = ({ imageSrc }) => {
  return (
    <>
      <img src={imageSrc} className="image" alt="login" />
    </>
  );
};
AuthImage.propTypes = {
  imageSrc: PropTypes.string,
};
