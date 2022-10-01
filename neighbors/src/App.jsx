import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

import { Navbar } from './components/navbar/Navbar';
import { HomePanel } from './components/homePanel/HomePanel';
import { Container } from './components/containers/container';
import { UserContext } from './helpers/apiCommunication';
import { AddPost } from './components/AddPost/AddPost';
import { PostList } from './components/posts/post-list';
import { PostDetails } from './components/posts/single-post';
export const App = () => {
  const { isAuth } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        {isAuth ? (
          <>
            <Route path="/" element={<HomePanel />} />
            <Route path="/help-board" element={<PostList />} />
            <Route path="/need-help" element={<AddPost />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </>
        ) : (
          <Route path="/" element={<Container />} />
        )}
      </Routes>
    </>
  );
};
