import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

import { Navbar } from './components/navbar/Navbar';
import { HomePanel } from './components/homePanel/HomePanel';
import { Container } from './components/containers/container';
import { UserContext } from './helpers/apiCommunication';
import { AddPost } from './components/AddPost/AddPost';
import { PostList } from './components/posts/post-list';
import { PostDetails } from './components/posts/single-post';
import { UserProfile } from './components/UserProfile/UserProfile';
export const App = () => {
  const { user } = useContext(UserContext);
  // if (!user) {
  //   return (
  //     <>
  //       <Container />
  //     </>
  //   );
  // }
  return (
    <>
      {/* <Container></Container>
      <AddPost></AddPost> */}

      <Navbar />
      {/* <UserProfile></UserProfile> */}
      <PostList></PostList>
      <Routes>
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
};
