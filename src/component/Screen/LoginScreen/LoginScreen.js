import React, { useState } from "react";
import {
  LoginScreenSection,
  LoginScreenBackground,
  LoginScreenGradient,
  LogoScreen,
  ButtonScreen,
  LoginScreenWrapper,
  LoginScreenTitle,
  LoginScreenSubTitle,
  LoginScreenParagraph,
  LoginForm,
  ButtonLogin,
} from "./LoginScreenStyled";
import SignInScreen from "../SignInScreen/SignInScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <LoginScreenSection>
      <LoginScreenBackground>
        <LogoScreen src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
        <ButtonScreen onClick={() => setSignIn(true)}>Sign In</ButtonScreen>

        {signIn ? (
          <SignInScreen />
        ) : (
          <LoginScreenWrapper>
            <LoginScreenTitle>
              Unlimited movies, TV, shows, and more.
            </LoginScreenTitle>
            <LoginScreenSubTitle>
              Watch anywhere. Cancel anytime.
            </LoginScreenSubTitle>
            <LoginScreenParagraph>
              Ready to watch? Enter your email to create or restart your
              membership.
            </LoginScreenParagraph>
            <LoginForm>
              <form>
                <input type="text" placeholder="Email Address"></input>
                <ButtonLogin onClick={() => setSignIn(true)}>
                  Get Started
                </ButtonLogin>
              </form>
            </LoginForm>
          </LoginScreenWrapper>
        )}
        <LoginScreenGradient></LoginScreenGradient>
      </LoginScreenBackground>
    </LoginScreenSection>
  );
}

export default LoginScreen;
