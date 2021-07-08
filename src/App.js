import "./App.css";
import React, { useState } from "react";
import NavbarPart from "./components/NavbarPart/NavbarPart";
import Footer from "./components/Footer/Footer";
import CourseSearch from "./pages/CourseSearch";
import CourseDetail from "./pages/CourseDetail";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import CourseVideoPage from "./pages/CourseVideoPage";
import Cart from "./pages/Cart";
import SignupForm from "./components/SignupForm/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.username ? true : false);

  return (
    <div className="App">
      <Router>
        <NavbarPart {...{ isLogin, setIsLogin }} />

        <Switch>
          <Route exact path="/coursesearch">
            <CourseSearch />
          </Route>
          {/* <Route exact path="/coursedetail">
					<CourseDetail />
				</Route> */}
          <Route
            exact
            path="/coursedetail/:id"
            component={CourseDetail}
          ></Route>
          {/* <Route exact path="/cart/:id" component={Cart}></Route> */}
          <Route
            path="/search/keyword/:keyword?"
            component={CourseSearch}
            exact
          ></Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/coursevideo">
            <CourseVideoPage />
          </Route>
          <Route exact path="/login">
            <LoginForm {...{ isLogin, setIsLogin }} />
          </Route>
          <Route exact path="/signup">
            <SignupForm />
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
