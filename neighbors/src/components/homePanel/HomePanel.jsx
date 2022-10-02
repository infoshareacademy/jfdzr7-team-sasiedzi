import { Link } from 'react-router-dom';

import './stylesHomePanel.css';
import '../../style/helpers.css';
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
      description: 'This is a description',
    },
    {
      link: '/need-help',
      svg: addPost,
      title: 'Add post',
      description: 'This is a second description',
    },
    {
      link: '/profil',
      svg: profile,
      title: 'Profile',
      description: 'This is a third description',
    },
    {
      link: '/help-board',
      svg: help,
      title: 'Help',
      description: 'This is a fourth description',
    },
  ];

  return (
    <div className="bg-gradient">
      <div id="body">
        <div id="slider">
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
