import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { db } from '../../api/firebase';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PostImg = styled.img`
  width: 50%;
  max-width: 500px;
  object-fit: contain;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const PostDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [postDetails, setPostDetails] = useState({});
  const [userDetails, setUserDetails] = useState(null);
  const { id } = useParams();

  const getUser = () => {
    getDoc(doc(db, 'Users', postDetails.userID)).then((querySnapshot) => {
      setUserDetails(querySnapshot.data());
      setIsLoading(false);
    });
  };

  const getPost = () => {
    getDoc(doc(db, 'Posts-need-help', id)).then((querySnapshot) => {
      setPostDetails(querySnapshot.data());
      setIsLoadingPost(false);
    });
  };

  useEffect(() => {
    isLoadingPost ? getPost() : getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingPost]);

  return isLoading ? (
    <div className="container">
      <h1 className="mt-50 mb-50">Loading</h1>
    </div>
  ) : (
    <>
      <main className="bg-gradient pt-50 pb-50">
        <div className="container">
          <div className="card p-20">
            <h1 className="header-1 mt-40">{postDetails.postTitle}</h1>
            <PostWrapper>
              <div className="col pl-0 mb-10">
                <p>{postDetails.post}</p>
              </div>
            </PostWrapper>
            <hr className="mb-20" />
            <p className="color-green fw-bold fs-18 mb-10">
              {userDetails.firstName} {userDetails.lastName}
            </p>
            <p className="fs-16 mb-15">
              {userDetails.city}, {userDetails.street}
            </p>
            <p className="fs-16 fw-bold mb-10">Contact me:</p>
            <p>
              <a href={'mailto:' + userDetails.email}>{userDetails.email}</a>
            </p>
            <p>
              <a href={'tel:' + userDetails.phoneNumber}>{userDetails.phoneNumber}</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
