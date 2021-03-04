import styled from "styled-components";

export const LoginScreenSection = styled.div`
  position: relative;
  width: 100%;
`;

export const LoginScreenBackground = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/3ae5b990-d02b-4f30-98de-c1ca350ae0c2/ID-en-20210222-popsignuptwoweeks-perspective_alpha_website_large.jpg");
`;

export const LoginScreenGradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
export const LogoScreen = styled.img`
  position: fixed;
  top: 0;
  left: 30px;
  height: 6rem;
  width: auto;
`;

export const ButtonScreen = styled.button`
  position: fixed;
  top: 0;
  right: 20px;
  background-color: #e50914;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.4rem 1.2rem;
  margin: 2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const LoginScreenWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  color: #fff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  top: 30%;
`;

export const LoginScreenTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
`;

export const LoginScreenSubTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const LoginScreenParagraph = styled.p`
  font-size: 1.3rem;
`;

export const LoginForm = styled.div`
  margin: 20px;
  input {
    outline-width: none;
    outline: none;
    padding: 11px;
    width: 30%;
    max-width: 600px;
    border: none;
    height: 30px;
  }
`;

export const ButtonLogin = styled.button`
  border: none;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  color: white;
  background-color: #e50914;
  padding: 16px 20px;
  cursor: pointer;
`;
