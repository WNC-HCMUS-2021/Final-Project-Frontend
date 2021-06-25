import './App.css';
import NavbarPart from './components/NavbarPart/NavbarPart';
import Footer from './components/Footer/Footer';
// import Courses from './components/CoursesList/CoursesList';
// import Home from './pages/Home';
// import Courses from './components/Courses/Courses';
// import CourseSearch from "./pages/CourseSearch";
// import Banner from './components/SingleCourse/Banner';
// import Description from './components/SingleCourse/Description';
// import FrameCollapsable from './components/SingleCourse/CourseMap/FrameCollapsable';
// import CourseMap from './components/SingleCourse/CourseMap';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <div className="App">
      <NavbarPart></NavbarPart>
      {/* <Home /> */}
      {/* <Courses /> */}
      {/* <CourseSearch /> */}
      {/* <Banner /> */}
      {/* <Description /> */}
      {/* <FrameCollapsable /> */}
      {/* <CourseMap /> */}
      <CourseDetail />
      <Footer></Footer>
    </div>
  );
}

export default App;
