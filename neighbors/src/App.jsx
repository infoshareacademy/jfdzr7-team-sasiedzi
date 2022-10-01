
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Container } from './components/containers/container';
import { UserContext } from './helpers/apiCommunication';
import { AddPost } from './components/AddPost/AddPost';
import { PostList } from './components/posts/post-list';


import { PostDetails } from './components/posts/single-post';
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
      <Routes>
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
};
