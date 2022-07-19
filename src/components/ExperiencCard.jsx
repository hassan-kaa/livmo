import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Link,
  Collapse,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";
import styled from "styled-components";
function ExperiencCard() {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ExpCard>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Div>
          <h2>Rtiba Forest Hiking</h2>
          <Stack direction="row" spacing={1}>
            <Chip label="Hiking" size="small" color="primary" />
            <Chip label="Nture" size="small" color="primary" />
          </Stack>
        </Div>

        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ratione
          cum fuga vitae repellendus quam.
        </p>

        <Div>
          <p>Price</p>
          <p>Date-start Date-finish</p>
        </Div>
        <Div>
          <p>Place</p>
          <Link onClick={handleExpandClick}>Details</Link>
        </Div>

        <Collapse in={expanded}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab harum
            maiores inventore consequatur debitis, iure delectus accusamus ea
            architecto vel voluptate, ratione aliquid perferendis, laborum non
            suscipit. Maxime, consequuntur est.
          </p>
        </Collapse>
      </CardContent>
      <CardImage
        src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="hiker"
      />
    </ExpCard>
  );
}

export default ExperiencCard;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardImage = styled.img`
  min-height: inherit;
  width: 30%;
  border-radius: 0 8px 8px 0;
  object-fit: none;
`;
const ExpCard = styled(Card)`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: 16px 0;
  min-height: 25vh;
  p {
    font-size: 18px;
    margin-top: 6px;
  }
`;
