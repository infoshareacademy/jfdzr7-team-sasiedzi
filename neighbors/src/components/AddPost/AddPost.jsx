import React, { useContext, useEffect, useState } from 'react';
import { addDoc, serverTimestamp } from 'firebase/firestore';

import { ThemeContext, needHelpPostsData, offerHelpPostsData } from '../../helpers/apiCommunication';
export const AddPost = () => {
  const { user } = useContext(ThemeContext); // Zalogowany user na potrzeby testów
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
      addDoc(needHelpPostsData, postData).then(() => {});
    }
    if (chooseTypeOfPost === 'OfferHelp') {
      addDoc(offerHelpPostsData, postData).then(() => {});
    }
    setPostData({ post: '', postTitle: '' });
  };
  return (
    <>
      <form>
        <label htmlFor="TypeOfPost">Choose type of post: </label>
        <select name="typOfPost" onChange={onChangleSelectPost}>
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
        ></input>
        <label htmlFor="post">Add new post: </label>
        <textarea
          name="post"
          value={postData.post}
          disabled={notAvailbeToWritePost}
          placeholder="Share your needs or help."
          onChange={onChange}
        ></textarea>
      </form>
      <button disabled={notAvailbeToWritePost} type="submit" onClick={onClick}>
        ADD POST
      </button>
    </>
  );
};
