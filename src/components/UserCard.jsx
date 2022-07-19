import React from "react";
import styled from "styled-components";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
function UserCard({ imageSrc, name, label, button }) {
  return (
    <MyCard>
      <img src={imageSrc} alt="profile" />
      <div>
        <span>
          <h1>{name}</h1>
          <CheckCircleOutlineOutlinedIcon color="primary" />
        </span>
        <h3>{label}</h3>
        {button ? <MyButton>Settings</MyButton> : <div></div>}
      </div>
    </MyCard>
  );
}

export default UserCard;
const MyCard = styled.div`
  display: flex;
  align-items: center;
  padding: 32px;
  height: 100%;
  justify-content: space-between;
  div {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  img {
    margin-right: 32px;
    width: 196px;
    height: 196px;
    border-radius: 100%;
    object-fit: cover;
  }
`;
export const MyButton = styled.button`
  width: 196px;
  color: #e42651;
  padding: 8px 16px;
  border-radius: 8px;
  border: solid 1px gray;
  background: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  cursor: pointer;
  &:hover {
    background: #ffe5ec;
  }
`;
