import './App.css';
import NavbarPart from './components/NavbarPart/NavbarPart';
import Footer from './components/Footer/Footer';
// import Courses from './components/CoursesList/CoursesList';
// import Home from './pages/Home';
// import Courses from './components/Courses/Courses';
import CourseSearch from "./pages/CourseSearch";
// import Test from './pages/test';

function App() {
  return (
    <div className="App">
      <NavbarPart></NavbarPart>
      {/* <Home /> */}
      {/* <Courses /> */}
      <CourseSearch />
      {/* <Test /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
