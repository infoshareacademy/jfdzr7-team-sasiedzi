import { AddPost } from './components/AddPost/AddPost';
import { ThemeProvider } from './helpers/apiCommunication';
export const App = () => {
  return (
    <>
      <ThemeProvider>
        <AddPost />
      </ThemeProvider>
    </>
  );
};
