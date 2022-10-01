import React, { useContext, useEffect, useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import '../AddPost/AddPostLayout.css';
import { ThemeContext, needHelpPostsData, offerHelpPostsData } from '../../helpers/apiCommunication';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { UserContext, needHelpPostsData, offerHelpPostsData } from '../../helpers/apiCommunication';
export const AddPost = () => {
  const { user } = useContext(UserContext); // Zalogowany user
  const [chooseTypeOfPost, setTypeOfPost] = useState('');
  const [notAvailbeToWritePost, setAvailbeToWritePost] = useState(true);
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
  const onChangleSelectPost = (e) => {
    setTypeOfPost(e.target.value);
  };
  useEffect(() => {
    if (chooseTypeOfPost === 'NeedHelp' || chooseTypeOfPost === 'OfferHelp') {
      setAvailbeToWritePost(false);
    } else {
      setAvailbeToWritePost(true);
    }
  }, [chooseTypeOfPost]);

  const onClick = (e) => {
    e.preventDefault();
    if (chooseTypeOfPost === 'NeedHelp') {
      addDoc(needHelpPostsData, postData);
    }
    if (chooseTypeOfPost === 'OfferHelp') {
      addDoc(offerHelpPostsData, postData);
    }
    setPostData({ post: '', postTitle: '' });
  };
  return (
    <div className="bg-gradient">
      <div className="container">
        <div className="post-box">
          <div className="left">
            <FontAwesomeIcon className="icon" icon={faComments} />
          </div>
          <div className="right">
            <form>
              <label htmlFor="TypeOfPost">Choose type of post: </label>
              <select name="typOfPost" onChange={onChangleSelectPost} className="field">
                <option value=" "></option>
                <option value="NeedHelp">Need help</option>
                <option value="OfferHelp">Offer help</option>
              </select>

              <label htmlFor="postTitle">Add title: </label>
              <input
                type="text"
                disabled={notAvailbeToWritePost}
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
                disabled={notAvailbeToWritePost}
                placeholder="Share your needs or help."
                className="field"
                onChange={onChange}
              ></textarea>
            </form>

            <button disabled={notAvailbeToWritePost} type="submit" onClick={onClick} className="btn">
              ADD POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
