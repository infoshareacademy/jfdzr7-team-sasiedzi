import { useEffect, useState } from 'react';
import { onSnapshot, where, query, doc, deleteDoc, updateDoc } from '@firebase/firestore';

import { auth, db } from '../../api/firebase';
import { needHelpPostsData } from '../../helpers/apiCommunication';
export const UsersPosts = () => {
  const clearForm = {
    postTitle: '',
    post: '',
  };
  const [usersPosts, setUsersPosts] = useState(null);

  const [renderPosts, setRenderPosts] = useState(null); // triger render collection of posts
  const [editInput, setEditInput] = useState(clearForm);
  const [edit, setEdit] = useState(null); // it lets edit single post
  const onClickDelate = (e) => {
    const idRemovedPost = e.target.dataset.id;
    deleteDoc(doc(db, 'Posts-need-help', `${idRemovedPost}`));
    setRenderPosts(`${idRemovedPost}` + 'del');
  };
  const onChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditInput({ ...editInput, [name]: value });
  };
  const onClickCancelEdit = () => {
    setEdit('');
    setEditInput(clearForm);
  };
  const onClickSubmitChanges = (e) => {
    let uniqId = new Date();
    e.preventDefault();

    const idOfPostToSubmit = e.target.dataset.id;
    const dataOfCurrentEdditedPost = usersPosts.filter((element) => {
      return element.id === idOfPostToSubmit ? true : false;
    });
    const postDataCollection = doc(db, 'Posts-need-help', `${idOfPostToSubmit}`);
    updateDoc(postDataCollection, {
      postTitle: editInput.postTitle ? editInput.postTitle : dataOfCurrentEdditedPost[0].postTitle,
      post: editInput.post ? editInput.post : dataOfCurrentEdditedPost[0].post,
    });

    setRenderPosts(idOfPostToSubmit + `${uniqId}`);
    setEdit('');
    setEditInput(clearForm);
  };
  const onClickUpdate = (e) => {
    const updatePost = e.target.dataset.id;
    setEdit(updatePost);
  };
  useEffect(() => {
    let postsArray = [];
    onSnapshot(query(needHelpPostsData, where('userID', '==', `${auth.currentUser.uid}`)), (querySnapshot) => {
      querySnapshot.docs.map((element, index) => {
        postsArray[index] = { id: element.id, ...element.data() };
      });
      setUsersPosts(postsArray);
    });
  }, [renderPosts]);

  return (
    <>
      {usersPosts ? (
        usersPosts.map((element, index) => (
          <div key={index} className="card p-20 mb-10">
            <h2 className="header-2 mb-15">{element.postTitle}</h2>
            <p className="no-wrap mb-15">{element.post}</p>

            <button data-id={element.id} onClick={onClickDelate}>
              Delete
            </button>
            <button data-id={element.id} onClick={onClickUpdate}>
              Update
            </button>
            {edit === element.id ? (
              <form>
                <input
                  className="input-field"
                  type="text"
                  value={editInput.postTitle}
                  id="postTitle"
                  name="postTitle"
                  onChange={onChangeEdit}
                  placeholder={element.postTitle}
                ></input>
                <textarea
                  className="input-field"
                  onChange={onChangeEdit}
                  value={editInput.post}
                  type="text"
                  id="post"
                  name="post"
                  placeholder={element.post}
                ></textarea>
                <button type="submit" data-id={element.id} onClick={onClickSubmitChanges}>
                  {' '}
                  Sumbit Changes
                </button>
                <button onClick={onClickCancelEdit}>Cancel edit</button>
              </form>
            ) : (
              ''
            )}
            {/* <NavLink to={`/post/` + element.id}>Details</NavLink> */}
          </div>
        ))
      ) : (
        <>Loading posts</>
      )}
    </>
  );
};
