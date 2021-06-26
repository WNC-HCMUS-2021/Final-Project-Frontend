import './App.css';
import NavbarPart from './components/NavbarPart/NavbarPart';
import Footer from './components/Footer/Footer';
import CourseSearch from "./pages/CourseSearch";
import CourseDetail from "./pages/CourseDetail";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
				<NavbarPart />

				<Switch>
					<Route exact path="/coursesearch">
						<CourseSearch />
					</Route>
          			<Route exact path="/coursedetail">
						<CourseDetail />
					</Route>
          			<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Redirect to="/">
						<Home />
					</Redirect>
				</Switch>

				<Footer />
			</Router>
    </div>
  );
}

export default App;
