import { useEffect, useState } from 'react';
import { onSnapshot, query, orderBy, limit, where, documentId } from 'firebase/firestore';

import { offerHelpPostsData, usersData } from '../../helpers/apiCommunication';
export const Post = () => {
  const [userArray, setUserArray] = useState(null);
  const [offerHelpPosts, setOffetHelpPosts] = useState(null);
  useEffect(() => {
    let idArray = [];
    onSnapshot(query(offerHelpPostsData, orderBy('createdAt', 'desc'), limit(5)), (querySnapshot) => {
      const q = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffetHelpPosts(q);
      q.map((element) => {
        idArray.push(element.userID);
      });

      onSnapshot(query(usersData, where(documentId(), 'in', idArray)), (querySnapshot) => {
        const q = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserArray(q);
        console.log(q);
      });
    });
  }, []);

  return (
    <>
      {offerHelpPosts && userArray ? (
        <>
          {offerHelpPosts.map((element) => (
            <div key={element.id} className="card p-20 mb-10">
              <p className="mb-10">{/* {userArray[0].city}, {userArray[element.userID].street} */}</p>
              <h2 className="header-2 mb-15">{element.postTitle}</h2>
              <p className="no-wrap mb-15">{element.post}</p>
              <p className="color-green fw-bold fs-18">Details</p>
            </div>
          ))}{' '}
        </>
      ) : (
        <>Loading posts</>
      )}
    </>
  );
};
