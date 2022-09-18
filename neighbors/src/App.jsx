import { Route, Routes } from 'react-router-dom';

import { PostDetails } from './components/posts/single-post';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
};
