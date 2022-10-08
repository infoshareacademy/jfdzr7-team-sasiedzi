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

import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
import { UserProfile } from './components/UserProfile/UserProfile';
export const App = () => {
  const { isAuth } = useContext(UserContext);
  return (
    <>

      <Navbar />
      <UserProfile></UserProfile>
      { <Routes>
        {isAuth ? (
          <>
            <Route path="/" element={<HomePanel />} />
            <Route path="/help-board" element={<PostList />} />
            <Route path="/need-help" element={<AddPost />} />
            <Route path="/post/:id" element={<PostDetails />} />

            <Route path="/how" element={<About />} />
          </>
        ) : (
          <Route path="/" element={<Container />} />
        )}

        <Route
          path="*"
          element={
            <div className="container t-center ">
              <h1 className="header-1 p-50">404 - Page not found</h1>
              <p>This page does not exist or requires to log in.</p>
            </div>
          }
        />
      </Routes> }

      </Routes>
      <Footer />

    </>
  );
};
