import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Nav from "../Nav";
import PlansScreen from "../PlansScreen/PlansScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Nav />
      <ProfileBody>
        <h1>Edit Profile</h1>
        <ProfileInfo>
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />

          <ProfileDetails>
            <h2>{user.email}</h2>
            <ProfilePlans>
              <PlansScreen info="Basic" resolution="720p" />
              <PlansScreen info="Basic" resolution="1080p" />
              <PlansScreen info="Basic" resolution="4K + HDR" />

              <button className="SignOut" onClick={() => auth.signOut()}>
                Sign Out
              </button>
            </ProfilePlans>
          </ProfileDetails>
        </ProfileInfo>
      </ProfileBody>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  color: white;
`;

const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8%;
  max-width: 800px;

  h1 {
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;

  img {
    height: 100px;
  }
`;

const ProfileDetails = styled.div`
  color: white;
  margin-left: 25px;
  flex: 1;

  h2 {
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }
`;

const ProfilePlans = styled.div`
  margin-top: 20px;

  h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }

  .SignOut {
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 5%;
    width: 100%;
    color: #fff;
    background-color: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
    letter-spacing: 0.05rem;
  }
`;
export default ProfileScreen;
