import { Navbar } from './components/navbar/Navbar';
import { Container } from './components/containers/container';

import { Registration } from './components/RegistrationForm/RegistrationForm';

export const App = () => {
  return (
    <>
      <Navbar />
      <Registration />
      <Container />
    </>
  );
};
