import { useEffect, useState } from 'react';
import { onSnapshot, query, orderBy, limit } from 'firebase/firestore';

import { offerHelpPostsData } from '../../helpers/apiCommunication';
export const Post = () => {
  const [offerHelpPosts, setOffetHelpPosts] = useState(null);
  useEffect(() => {
    onSnapshot(query(offerHelpPostsData, orderBy('createdAt', 'desc'), limit(5)), (querySnapshot) => {
      const q = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffetHelpPosts(q);
    });
  }, []);
  return (
    <>
      {offerHelpPosts ? (
        <>
          {offerHelpPosts.map((element) => (
            <div key={element.id} className="card p-20 mb-10">
              <p className="mb-10">
                {element.userCity}, {element.userStreet}
              </p>
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
