import { useEffect, useState } from 'react';
import { onSnapshot, query, limit, where } from 'firebase/firestore';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { showStartPost } from '../../helpers/searchForPostsHelpers';
import { needHelpPostsData, usersData } from '../../helpers/apiCommunication';

export const Post = ({ searchFor, startSearch, setStartSearch }) => {
  const [userArray, setUserArray] = useState(null);
  const [offerHelpPosts, setOffetHelpPosts] = useState(null);
  const [thereIsNoPost, setThereISNoPost] = useState(false);

  useEffect(() => {
    let idArray = [];
    if (searchFor.city === '') {
      showStartPost(needHelpPostsData, setOffetHelpPosts, usersData, idArray, setUserArray);
    } else {
      let colection = {};
      if (!searchFor.street) {
        onSnapshot(query(usersData, where('city', '==', `${searchFor.city}`)), (querySnapshot) => {
          querySnapshot.docs.forEach((element) => {
            colection[element.id] = { ...element.data() };
          });
          const id = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          id.map((element, index) => {
            idArray[index] = element.id;
          });
          const citySearchedPosts = [];
          Object.keys(colection).length === 0 ? setThereISNoPost(true) : setThereISNoPost(false);
          onSnapshot(query(needHelpPostsData, where('userID', 'in', idArray)), limit(10), (querySnapshot) => {
            querySnapshot.docs.map((element, index) => {
              citySearchedPosts[index] = { id: element.id, ...element.data() };
            });

            setOffetHelpPosts(citySearchedPosts);

            setUserArray(colection);
          });
        });
      } else {
        onSnapshot(query(usersData, where('city', '==', `${searchFor.city}`)), (querySnapshot) => {
          querySnapshot.docs.forEach((element) => {
            colection[element.id] = { ...element.data() };
          });
          const asArray = Object.entries(colection);
          const filtred = asArray.filter((element) => {
            if (element[1].street == `${searchFor.street}`) {
              return true;
            }
          });
          const filtredByStreet = Object.fromEntries(filtred);
          Object.keys(filtredByStreet).length === 0 ? setThereISNoPost(true) : setThereISNoPost(false);
          filtred.map((element, index) => {
            idArray[index] = element[0];
          });
          const citySearchedPosts = [];
          onSnapshot(query(needHelpPostsData, where('userID', 'in', idArray)), limit(10), (querySnapshot) => {
            querySnapshot.docs.map((element, index) => {
              citySearchedPosts[index] = { id: element.id, ...element.data() };
            });
            setOffetHelpPosts(citySearchedPosts);
            setUserArray(filtredByStreet);
          });
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSearch]);
  setStartSearch(false);
  return (
    <>
      {offerHelpPosts && userArray ? (
        thereIsNoPost ? (
          <>There are no needs in area.</>
        ) : (
          <>
            {offerHelpPosts
              .filter((element) => userArray[element.userID])
              .map((element) => (
                <div key={element.id} className="card p-20 mb-10">
                  <p className="mb-10">
                    {userArray[element.userID].city ? userArray[element.userID].city : ''}, {''}
                    {userArray[element.userID].street ? userArray[element.userID].street : ''}
                  </p>
                  <h2 className="header-2 mb-15">{element.postTitle}</h2>
                  <p className="no-wrap mb-15">{element.post}</p>
                  <NavLink className="btn" to={`/post/` + element.id}>
                    Details
                  </NavLink>
                </div>
              ))}{' '}
          </>
        )
      ) : (
        <>Loading posts</>
      )}
    </>
  );
};

Post.propTypes = {
  searchFor: PropTypes.shape({
    city: PropTypes.any,
    street: PropTypes.any,
  }),
  startSearch: PropTypes.any,
  setStartSearch: PropTypes.any,
};
