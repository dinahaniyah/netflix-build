import React from "react";
import Navbar from "../../Navbar/Navbar";
import {
  ProfileSection,
  ProfileContainer,
} from "../ProfileScreen/ProfileScreenStyled";

function ProfileScreen() {
  return (
    <ProfileSection>
      <Navbar />
      <ProfileContainer>
        <h2>Edit Profile</h2>
      </ProfileContainer>
      Hello world
      <p>skskskk</p>
    </ProfileSection>
  );
}

export default ProfileScreen;
