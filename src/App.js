import React, { useEffect } from "react";
import "./App.css";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { logout, login, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/profile" component={ProfileScreen}></Route>
            {/* <Route exact path="/movie/:id" component={SingleMoviePage}></Route> */}
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
