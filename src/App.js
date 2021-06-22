import './App.css';
import NavbarPart from './components/NavbarPart/NavbarPart';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import MainPart from './components/MainPart/MainPart';
// import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <NavbarPart></NavbarPart>
      <Header></Header>
      <MainPart />
      <Footer></Footer>
    </div>
  );
}

export default App;
