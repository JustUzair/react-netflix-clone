import React, { useRef } from "react";
import { auth } from "../../Firebase";
import "./singupScreen.css";
function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(err => alert(err));
  };
  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch(err => alert(err));
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button
          type="submit"
          onClick={e => {
            signIn(e);
          }}
        >
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray"> New to Netflix?</span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
