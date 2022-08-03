import './App.css';
import Header from './components/Header';
import Carrousel from './components/Carrousel';
import MidMenu from './components/MidMenu';
import MainInfo from './components/MainInfo';
import BottomInfo from './components/BottomInfo';
import Footer from './components/Footer';
import Chat from './components/Chat';

const App = () => {
  return (
    <div>
      <Carrousel />
      <MidMenu />
      <MainInfo />
      <BottomInfo />
      <Chat />
    </div>
  );
};

export default App;
