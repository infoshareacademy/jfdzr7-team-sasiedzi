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
  const [edit, setEdit] = useState(null); // it lets edit single post currentSinglePostID -> zmiana nazwy.
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
    let uniqId = Date.now();
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

            <button className="btn mr-10" data-id={element.id} onClick={onClickUpdate}>
              Update
            </button>
            <button className="btn btn-2" data-id={element.id} onClick={onClickDelate}>
              Delete
            </button>
            {edit === element.id ? (
              <form>
                <input
                  className="input-field"
                  type="text"
                  id="postTitle"
                  name="postTitle"
                  onChange={onChangeEdit}
                  defaultValue={element.postTitle}
                ></input>
                <br />
                <textarea
                  className="input-field full"
                  onChange={onChangeEdit}
                  defaultValue={element.post}
                  type="text"
                  id="post"
                  name="post"
                ></textarea>
                <br />
                <button className="btn mr-10" type="submit" data-id={element.id} onClick={onClickSubmitChanges}>
                  {' '}
                  Sumbit Changes
                </button>
                <button className="btn btn-2" onClick={onClickCancelEdit}>
                  Cancel edit
                </button>
              </form>
            ) : (
              ''
            )}
          </div>
        ))
      ) : (
        <>Loading posts</>
      )}
    </>
  );
};
