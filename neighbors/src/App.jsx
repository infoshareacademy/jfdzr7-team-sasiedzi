import { Navbar } from './components/navbar/Navbar';
import { Container } from './components/containers/container';
import { ThemeProvider } from './helpers/apiCommunication';
import { ShowPosts } from './components/ShowPosts/ShowPosts';
export const App = () => {
  return (
    <>
      {' '}
      <ThemeProvider>
        <ShowPosts></ShowPosts>
        {/* <Navbar />
        <Container /> */}
      </ThemeProvider>
    </>
  );
};
