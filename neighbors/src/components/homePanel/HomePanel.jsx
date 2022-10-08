import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './stylesHomePanel.css';
import '../../style/helpers.css';
import '../../style/style.css';
import addPost from './img/addPost.svg';
import help from './img/help.svg';
import posts from './img/posts.svg';
import profile from './img/profile.svg';

export const HomePanel = () => {
  const slides = [
    {
      link: '/help-board',
      svg: posts,
      title: 'Posts',
      description: 'See who needs help',
    },
    {
      link: '/need-help',
      svg: addPost,
      title: 'Add post',
      description: 'Add a post to search for help',
    },
    {
      link: '/profile',
      svg: profile,
      title: 'Profile',
      description: 'Your profile and posts',
    },
    {
      link: '/help-board',
      svg: help,
      title: 'Help',
      description: 'How does it work?',
    },
  ];

  return (
    <div className="bg-gradient">
      <div className="body">
        <div className="slider">
          {slides.map((slide, index) => {
            return (
              <Link key={slide.title} to={slide.link}>
                <div className="slider-card" key={index}>
                  <div className="homepanel_post-box">
                    <img src={slide.svg} className="box-logo" alt="addPost Logo" />
                    <p className="slider-card-title">{slide.title}</p>
                    <p className="slider-card-description">{slide.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
