import React, { useContext, useState } from 'react';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import '../AddPost/AddPostLayout.css';

import { UserContext, needHelpPostsData } from '../../helpers/apiCommunication';
export const AddPost = () => {
  const { user } = useContext(UserContext); // Zalogowany user
  const [postData, setPostData] = useState({
    post: '',
    postTitle: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      createdAt: serverTimestamp(),
      userID: user.uid,
      [name]: value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    addDoc(needHelpPostsData, postData);
    setPostData({ post: '', postTitle: '' });
  };
  return (
    <div className="bg-gradient">
      <div className="addpost_container">
        <div className="post-box">
          <div className="left">
            <FontAwesomeIcon className="icon" icon={faComments} />
          </div>
          <div className="right">
            <form>
              <label htmlFor="postTitle">Add title: </label>
              <input
                type="text"
                value={postData.postTitle}
                name="postTitle"
                onChange={onChange}
                className="field"
              ></input>

              {/* Message */}
              <label htmlFor="post">Add new post: </label>
              <textarea
                name="post"
                value={postData.post}
                placeholder="Share your needs or help."
                className="field"
                onChange={onChange}
              ></textarea>
            </form>

            <button type="submit" onClick={onClick} className="btn">
              ADD POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
