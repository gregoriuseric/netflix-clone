import React from "react";
import styled from "styled-components";

function PlansScreen(props) {
  const { info, resolution } = props;

  return (
    <Container>
      <PlansInfo>
        <h4>{info}</h4>
        <h5>{resolution}</h5>
      </PlansInfo>

      <button className="subscribeButton">Subscribe</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  h4 {
    letter-spacing: 0.05rem;
  }

  h5 {
    letter-spacing: 0.05rem;
  }

  .subscribeButton {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
    letter-spacing: 0.05rem;
    border-radius: 3px;
  }
`;

const PlansInfo = styled.div``;

export default PlansScreen;
