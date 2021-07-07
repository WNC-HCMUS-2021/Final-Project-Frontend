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
import Signup from "./pages/Signup";
import CourseVideoPage from './pages/CourseVideoPage';
import Cart from './pages/Cart';
import CourseSearchCategory from './pages/CourseSearchCategory';

function App() {
  return (
    <div className="App">
      	<Router>
			<NavbarPart />

			<Switch>
				<Route exact path="/coursesearch">
					<CourseSearch />
				</Route>
				{/* <Route exact path="/coursedetail">
					<CourseDetail />
				</Route> */}
				<Route exact path="/coursedetail/:id" component={CourseDetail}></Route>
				{/* <Route exact path="/cart/:id" component={Cart}></Route> */}
				<Route
					path="/search/keyword/:keyword?"
					component={CourseSearch}
					exact
				></Route>
				<Route
					path="/search/category/:categoryId"
					component={CourseSearchCategory}
					exact
				></Route>
				<Route exact path="/cart">
					<Cart />
				</Route>
				<Route exact path="/coursevideo">
					<CourseVideoPage />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/signup">
					<Signup />
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
