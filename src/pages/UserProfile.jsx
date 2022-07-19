import React from "react";

import styled from "styled-components";
import { useState } from "react";
import { Divider, Card, Link, Container } from "@mui/material";
import ExperiencCard from "../components/ExperiencCard";
import UserCard, { MyButton } from "../components/UserCard";
import TestimonialCard from "../components/TestimonialCard";
import BioCard from "../components/BioCard";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import FavoriteIcon from "@mui/icons-material/Favorite";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ProfilePagination from "../components/ProfilePagination";
function UserProfile() {
  const [value, setValue] = useState(0);
  return (
    <MyContainer>
      <UserCard
        imageSrc="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        label="Adventurer"
        name="Flen Ben Foulen"
        button={true}
      />

      <ProfilePagination />
      <Divider />
      <Container>
        <Left>
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile"
          />
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Verified"
              icon={<CheckCircleOutlineOutlinedIcon />}
            />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction
              label="Comments"
              icon={<ChatBubbleOutlineOutlinedIcon />}
            />
          </BottomNavigation>
          <Divider />
          <p>Foulen Confirmation effectuee</p>
          <MyCard>
            <span>
              <CheckCircleOutlineOutlinedIcon />
              <p>Identity</p>
            </span>
            <span>
              <CheckCircleOutlineOutlinedIcon />
              <p>Email</p>
            </span>
            <span>
              <CheckCircleOutlineOutlinedIcon />
              <p>Phone number</p>
            </span>
          </MyCard>
          <MyCard>
            <p>
              <Link>Learn more</Link> on how confirming account information
              helps keep the LIVMO community safe .
            </p>
          </MyCard>
        </Left>
        <Right>
          <div style={{ marginTop: "36px" }}>
            <h2 style={{ color: "#e42651" }}>Flen Ben Foulen</h2>
            <h5>Adventurer</h5>
            <h6>Member since 2022</h6>
            <h6>Lives in Italy</h6>
          </div>
          <BioCard />
          <h2>Lived Experiences</h2>
          <ExperiencCard />
          <span>
            <MyButton>
              <FavoriteIcon />
              23 Favorites
            </MyButton>
            <MyButton>
              <ChatBubbleOutlineOutlined />
              22 Comments
            </MyButton>
          </span>

          <TestimonialCard />
          <TestimonialCard />
        </Right>
      </Container>
    </MyContainer>
  );
}
export default UserProfile;
const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div`
  width: 60%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  span {
    display: flex;
  }
`;
const Left = styled.div`
  width: 30%;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 128px;
    height: 128px;
    border-radius: 100%;
    object-fit: cover;
  }
  span {
    display: flex;
  }
`;
const MyCard = styled(Card)`
  padding: 32px;
  margin: 16px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  span {
    margin: 16px 0;
  }
`;
