import { Navbar } from './components/navbar/Navbar';
import { Container } from './components/containers/container';
import { HomePanel } from './components/homePanel/HomePanel';

export const App = () => {
  return (
    <>
      <Navbar />
      <Container />
      <HomePanel />
    </>
  );
};
