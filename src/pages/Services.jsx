import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import DishForm from "../components/DishForm";
import FileUploader from "../components/FileUploader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// // or other themes
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

// // or only core styles
// import "@splidejs/react-splide/css/core";
function Services() {
  return (
    <div>
      <Banner>
        <img
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="banner"
        />
        <h1>Dish Edit</h1>
      </Banner>
      <MyContainer>
        <DishForm />
        <div>
          <h2>Dish images :</h2>
          <MyGrid container spacing={3}>
            <MyGrid item xs={8}>
              <Splide
                options={{
                  perPage: 2,
                  arrows: false,
                  pagination: true,
                  gap: "2rem",
                  drag: "free",
                  //   type: "loop",
                  height: "30vh",
                }}
              >
                <SplideSlide>
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </SplideSlide>
              </Splide>
            </MyGrid>
            <MyGrid item xs={4}>
              <FileUploader />
            </MyGrid>
          </MyGrid>
        </div>
        <div style={{ margin: "32px 0" }}>
          <h2>Restaurant images :</h2>
          <MyGrid container spacing={3}>
            <MyGrid item xs={8}>
              <Splide
                options={{
                  perPage: 2,
                  arrows: false,
                  pagination: true,
                  gap: "2rem",
                  drag: "free",
                  height: "30vh",
                }}
              >
                <SplideSlide>
                  <img
                    style={{ objectFit: "cover" }}
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </SplideSlide>
              </Splide>
            </MyGrid>
            <MyGrid item xs={4}>
              <FileUploader />
            </MyGrid>
          </MyGrid>
        </div>
        <span>
          <MyButton>Cancel</MyButton>
          <MyButton confirm>Confirm</MyButton>
        </span>
      </MyContainer>
    </div>
  );
}

export default Services;

const Banner = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 20vh;
  width: 100%;
  background: linear-gradient("#6666", "#9999");
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    mix-blend-mode: darken;
    position: absolute;
  }
  h1 {
    color: white;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
  }
`;

const MyGrid = styled(Grid)`
  justify-content: center;
  /* max-height: 20vh; */
  img {
    border-radius: 16px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const MyContainer = styled.div`
  width: 100%;
  padding: 32px;
  h2 {
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    align-self: center;
    justify-content: space-between;
  }
`;
export const MyButton = styled.button`
  border-radius: 32px;
  background: ${(props) =>
    props.confirm
      ? "linear-gradient(90deg, #f02f32 0%, #e22357 59.52%, #da1d6c 100%)"
      : "white"};
  border: none;
  color: ${(props) => (props.confirm ? "white" : "#e42651")};
  cursor: pointer;

  padding: 8px 24px;
  text-align: center;
  font-weight: bold;
  align-self: flex-end;
  text-transform: uppercase;
  margin: 16px 8px;
  &:hover {
    box-shadow: 10px 10px 33px 0px rgba(179, 172, 172, 1);
    -webkit-box-shadow: 10px 10px 33px 0px rgba(179, 172, 172, 1);
    -moz-box-shadow: 10px 10px 33px 0px rgba(179, 172, 172, 1);
  }
  &:active {
    background: ${(props) =>
      props.confirm
        ? "linear-gradient(90deg, #ec5659 0%, #e2456f 59.52%, #e05991 100%)"
        : "#cccc"};
  }
`;
