import { useState, useEffect, useContext } from 'react';

import { Navbar } from './components/navbar/Navbar';
import { Container } from './components/containers/container';
import { ThemeContext } from './helpers/apiCommunication';
import { AddPost } from './components/AddPost/AddPost';
import { PostList } from './components/posts/post-list';

export const App = () => {
  const { user } = useContext(ThemeContext);
  if (!user) {
    return (
      <>
        <Navbar />
        <Container />
      </>
    );
  }
  return (
    <>
      <PostList></PostList>
      <AddPost></AddPost>
    </>
  );
};
