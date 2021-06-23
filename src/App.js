import './App.css';
import NavbarPart from './components/NavbarPart/NavbarPart';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
// import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <NavbarPart></NavbarPart>
      <Home />
      <Footer></Footer>
    </div>
  );
}

export default App;
