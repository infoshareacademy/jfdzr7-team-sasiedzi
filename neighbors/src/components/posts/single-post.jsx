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
  const [postDetails, setPostDetails] = useState({});
  const { id } = useParams();

  const getPost = () => {
    getDoc(doc(db, 'Posts-need-help', id)).then((querySnapshot) => {
      setPostDetails(querySnapshot.data());
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <PostImg
                className="mb-10"
                src="https://ireland.apollo.olxcdn.com/v1/files/il1x1kwevmjv3-PL/image;s=1000x700"
              />
              {
                //obrazek jeśli zrobimy dodawanie ich do postów
              }
            </PostWrapper>
            <hr className="mb-20" />
            <p className="color-green fw-bold fs-18 mb-10">
              {postDetails.userFirstName} {postDetails.userLastName}
            </p>
            <p className="fs-16 mb-15">
              {postDetails.userCity}, {postDetails.userStreet}
            </p>
            <p className="fs-16 fw-bold mb-10">Contact me:</p>
            <a href="#" className="btn">
              Send a message
              {
                //powinno otwierać te wiadomości, ale raczej nie zdążymy ich zrobić. Więc - tutaj mail lub telefon?
              }
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
