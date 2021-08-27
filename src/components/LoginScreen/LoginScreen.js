import React, { useState } from "react";
import styled from "styled-components";
import SignUpScreen from "../SignUpScreen/SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <Container>
      <LoginBackground>
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        <SignInButton onClick={() => setSignIn(true)}>Sign In</SignInButton>

        <LoginGradient />
      </LoginBackground>

      <LoginBody>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Ulimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <LoginInput>
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)}>GET STARTED</button>
              </form>
            </LoginInput>
          </>
        )}
      </LoginBody>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100%;
  background: url("https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9-900x506.jpg");
  background-size: cover;
`;

const LoginBackground = styled.div`
  img {
    position: fixed;
    left: 0;
    width: 150px;
    object-fit: contain;
    padding-left: 20px;
  }
`;

const LoginGradient = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
`;

const SignInButton = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  font-weight: 600;
  border: none;
  cursor: pointer;
  letter-spacing: 0.05rem;
`;

const LoginBody = styled.div`
  position: absolute;
  top: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1;
  color: white;
  padding: 20px;
  left: 0;
  right: 0;

  h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const LoginInput = styled.div`
  margin: 20px;

  input {
    padding: 10px;
    outline-width: 0;
    height: 30px;
    width: 30%;
    border: none;
    max-width: 600px;
    letter-spacing: 0.05rem;
  }

  button {
    padding: 16px 20px;
    font-size: 1rem;
    color: white;
    background-color: #e50914;
    border: none;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.05rem;
  }
`;

export default LoginScreen;
