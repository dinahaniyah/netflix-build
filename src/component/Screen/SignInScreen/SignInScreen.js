import React, { useRef } from "react";
import { auth } from "../../../firebase";
import {
  SignInWrapper,
  TextSignUp,
  SpanNormalText,
  SpanClickText,
  SignInScreenFooter,
  SignInFooterWrapper,
  SignInFooterContent,
} from "./SignInScreenStyled";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <SignInWrapper>
        <h1>Sign In</h1>
        <form>
          <input ref={emailRef} type="email" placeholder="Email"></input>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
          ></input>
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <TextSignUp>
          <SpanNormalText>New to Netflix? </SpanNormalText>
          <SpanClickText onClick={register}>Sign up now.</SpanClickText>
        </TextSignUp>
      </SignInWrapper>
      {/* <SignInScreenFooter>
        <h4>Questions? Call 007-803-321-2130</h4>
        <SignInFooterWrapper>
          <SignInFooterContent>
            <a href="#">FAQ</a>
            <a href="#">Cookie Preferences</a>
          </SignInFooterContent>
          <SignInFooterContent>
            <a href="#">Help Center</a>
            <a href="#">Corporate Information</a>
          </SignInFooterContent>
          <SignInFooterContent>
            <a href="#">Terms of Use</a>
          </SignInFooterContent>
          <SignInFooterContent>
            <a href="#">Privacy</a>
          </SignInFooterContent>
        </SignInFooterWrapper>
      </SignInScreenFooter> */}
    </>
  );
}

export default SignInScreen;
