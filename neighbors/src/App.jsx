import { useContext } from 'react';

import { Navbar } from './components/navbar/Navbar';
import { Container } from './components/containers/container';
import { UserContext } from './helpers/apiCommunication';
import { AddPost } from './components/AddPost/AddPost';
import { PostList } from './components/posts/post-list';

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
      <Navbar />
      <PostList></PostList>
      <AddPost></AddPost>
    </>
  );
};
