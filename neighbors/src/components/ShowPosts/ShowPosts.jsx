import React from 'react';
import { useEffect, useState } from 'react';
import { onSnapshot, query, orderBy } from 'firebase/firestore';

import { needHelpPostsData, offerHelpPostsData, getOfferHelpPosts } from '../../helpers/apiCommunication';
export const ShowPosts = () => {
  const [offerHelpPosts, setOffetHelpPosts] = useState(null);
  useEffect(() => {
    onSnapshot(offerHelpPostsData, (querySnapshot) => {
      setOffetHelpPosts(getOfferHelpPosts(querySnapshot));
    });
  }, []);
  console.log(offerHelpPosts);
  //   query(offerHelpPostsData, orderBy('createdAt', 'desc'));

  return <></>;
};
