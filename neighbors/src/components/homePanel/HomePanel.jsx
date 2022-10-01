// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComments } from '@fortawesome/free-solid-svg-icons';
import './stylesHomePanel.css';
import addPost from './img/addPost.svg';
import help from './img/help.svg';
import posts from './img/posts.svg';
import profile from './img/profile.svg';
// import { ThemeContext, needHelpPostsData, offerHelpPostsData } from '../../helpers/apiCommunication';

export const HomePanel = () => {
  const slides = [
    {
      svg: posts,
      title: 'Ogłoszenia',
      description: 'This is a description',
    },
    {
      svg: addPost,
      title: 'Dodaj ogłoszenie',
      description: 'This is a second description',
    },
    {
      svg: profile,
      title: 'Profil',
      description: 'This is a third description',
    },
    {
      svg: help,
      title: 'Help',
      description: 'This is a fourth description',
    },
  ];

  return (
    <div className="home-container">
      <div id="body">
        <div id="slider">
          {slides.map((slide, index) => {
            return (
              <div className="slider-card" key={index}>
                <div className="post-box">
                  <img src={slide.svg} className="box-logo" alt="addPost Logo" />

                  <p className="slider-card-title">{slide.title}</p>
                  <p className="slider-card-description">{slide.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
