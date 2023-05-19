import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './App2';
import HeaderFunction from './components/header';
import Navbar1 from './components/navbar/index';
import SearchFunction from './components/search';
import InstructorFunction from './components/instructor';
import TestFunction from './components/test';
import AcardionFunction from './components/acardion';
import MoneyFunction from './components/acardion copy';

function App() {
  return (
    <Container>
      <Navbar1 />
      <HeaderFunction />
      <SearchFunction />
      <InstructorFunction />
      <TestFunction />
      <AcardionFunction />
      <MoneyFunction />
    </Container>
  );
}

export default App;
