import styled from "styled-components";

export const SignInWrapper = styled.div`
  max-width: 300px;
  background: rgba(0, 0, 0, 0.75);
  padding: 70px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  color: white;
  width: 100%;

  @media screen and (max-width: 680px) {
    background: none;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  input {
    background: #333;
    border: none;
    color: white;
    padding: 16px 20px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    max-width: 600px;
  }

  button {
    background: #e50914;
    border: none;
    padding: 16px 20px;
    margin-top: 2rem;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const TextSignUp = styled.h4`
  margin-top: 1rem;
  color: #737373;
`;

export const SpanNormalText = styled.span``;

export const SpanClickText = styled.span`
  color: white;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SignInScreenFooter = styled.div`
  width: 100%;
  /* margin-top: 50rem; */
  padding: 2rem 7rem;
  color: #757575;
  background: rgba(0, 0, 0, 0.75);
  /* position: fixed; */
  display: block;
  bottom: 0;
  h4 {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const SignInFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: ; */
`;

export const SignInFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    text-decoration: none;
    color: #757575;
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
