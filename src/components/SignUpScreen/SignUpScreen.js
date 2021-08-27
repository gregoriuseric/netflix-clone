import React, { useRef } from "react";
import styled from "styled-components";
import { auth } from "../../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix ? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 300px;
  padding: 70px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.85);

  form {
    display: grid;
    flex-direction: column;
  }

  input {
    outline-width: 0;
    height: 40px;
    margin-bottom: 14px;
    border-radius: 5px;
    border: none;
    padding: 5px 15px;
    letter-spacing: 0.05rem;
  }

  button {
    padding: 16px 20px;
    font-size: 1rem;
    color: #fff;
    border-radius: 5px;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    letter-spacing: 0.05rem;
  }

  h1 {
    text-align: left;
    margin-bottom: 25px;
    letter-spacing: 0.05rem;
  }

  h4 {
    text-align: left;
    margin-top: 30px;

    .signupScreen__gray {
      color: gray;
      letter-spacing: 0.05rem;
    }

    .signupScreen__link {
      letter-spacing: 0.05rem;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .signupScreen__link:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export default SignUpScreen;
