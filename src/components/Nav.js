import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <Navbar className={`${show && "nav__black"}`}>
      <Container>
        <Logo onClick={() => history.push("/")} src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        <Avatar onClick={() => history.push("/profile")} src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" alt="" />
      </Container>
    </Navbar>
  );
}

const Navbar = styled.div`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 1;

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  position: fixed;
  top: 13px;
  left: 20px;
  width: 80px;
  cursor: pointer;
  object-fit: contain;
`;

const Avatar = styled.img`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export default Nav;
