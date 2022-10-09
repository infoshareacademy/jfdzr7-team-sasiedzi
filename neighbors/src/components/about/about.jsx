import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import '../about/aboutLayout.css';

export const About = () => {
  return (
    <div className="bg-gradient">
      <div className="containerAbout">
        <div className="post-box">
          <div className="left">
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
          </div>
          <div className="right">
            <h1 className="about-header">How doeas it work? </h1>
            <p className="about-paragraph">
              The Neighbors app was created to communicate with people around us. Here you can post announcements in
              which you will offer your help, but also get it! All you have to do is complete your profile, add a post
              and you are done! Now you can wait for contact from neighbors ready to help you, and in the meantime look
              for announcements in which you will want to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
