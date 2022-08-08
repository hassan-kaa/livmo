import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import MyRating from "./MyRating";
import { useForm } from "react-hook-form";
import { MyButton } from "../pages/Services";
function DishForm() {
  const [rules, setRules] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem officiis deserunt sapiente quas repellat quo deleniti dicta eligendi explicabo? Aperiam asperiores impedit, commodi error atque ipsa eligendi quidem quam perspiciatis ratione autem maxime quae dolorem a placeat sint ullam illo cum nisi vero, pariatur ducimus beatae! Dolorum, eius!"
  );
  const [description, setDescription] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem officiis deserunt sapiente quas repellat quo deleniti dicta eligendi explicabo? Aperiam asperiores impedit, commodi error atque ipsa eligendi quidem quam perspiciatis ratione autem maxime quae dolorem a placeat sint ullam illo cum nisi vero, pariatur ducimus beatae! Dolorum, eius!"
  );
  const [website, setWebsite] = useState("www.livmo.com");
  const [address, setAddress] = useState("Tunis 23 rue taieb mhiri 1003");
  const [resto, setResto] = useState("Chaneb");
  const [price, setPrice] = useState(13);
  const [slogan, setSlogan] = useState("we are the best ");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      website,
      address,
      resto,
      price,
      slogan,
      description,
      rules,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <SubGrid item sm={3} xs={12}>
          <h2>Dish 1:</h2>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SubGrid>
        <SubGrid item sm={9} xs={12}>
          <MyInput
            style={{ fontSize: "14pt", fontWeight: "bolder" }}
            type="text"
            placeholder={"All Salmon"}
          />
          <MyDivider />
          <MyForm onSubmit={handleSubmit(onSubmit)} action="">
            <MyStack>
              <label htmlFor="resto">Restaurant Name :</label>
              <MyInput
                {...register("resto", { required: true, minLength: 5 })}
                id="resto"
                onChange={(e) => {
                  setResto(e.target.value);
                }}
                type="text"
              />
              <label htmlFor="price">Price :</label>
              <MyInput
                {...register("price", { required: true, min: 1, max: 20 })}
                id="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="Number"
              />
              <label htmlFor="address">Address :</label>
              <MyInput
                {...register("address")}
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                type="text"
              />
              <label htmlFor="Open Hours">Open Hours :</label>
              <MyInput id="Open Hours" type="text" />
              <label htmlFor="Off Days">Off Days :</label>
              <MyInput id="Off Days" type="text" />
              <label htmlFor="stars">Restaurant Rate:</label>
              <span id="stars">
                <MyRating rate={3} />
              </span>
            </MyStack>
            <MyStack>
              <label htmlFor="website">Website :</label>
              <MyInput
                {...register("website")}
                id="website"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
                type="text"
              />
              <label htmlFor="slogan">Slogan :</label>
              <MyInput
                {...register("slogan")}
                id="slogan"
                onChange={(e) => {
                  setSlogan(e.target.value);
                }}
                type="text"
              />
              <label htmlFor="description">Dish Description :</label>
              <textarea
                {...register("description")}
                id="description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                rows={7}
              />
              <label htmlFor="rules">Restaurant Rules :</label>
              <textarea
                {...register("rules")}
                id="rules"
                onChange={(e) => {
                  setRules(e.target.value);
                }}
                rows={7}
              />
              <MyButton style={{ margin: "8px 0" }} confirm>
                Save edits
              </MyButton>
            </MyStack>
          </MyForm>
        </SubGrid>
      </Grid>
    </div>
  );
}

export default DishForm;
const MyForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  @media only screen and (min-width: 760px) {
    flex-direction: row;
  }
`;
const MyStack = styled(Stack)`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  textarea {
    width: 100%;
    border-radius: 8px;
    background: white;
    border: 1px solid grey;
    min-height: 32px;
    padding: 8px;
  }
  #stars {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
  @media only screen and (min-width: 760px) {
    width: 50%;
  }
`;
const MyInput = styled.input`
  border-radius: 8px;
  background: white;
  border: 1px solid grey;
  min-height: 32px;
  width: 100%;
  padding: 8px;
  @media only screen and (min-width: 760px) {
    width: 70%;
  }
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 760px) {
    flex-direction: row;
  }
`;
const SubGrid = styled(Grid)`
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;
const MyDivider = styled.div`
  height: 4px;
  background-color: black;
  border-radius: 2px;
  width: 20%;
  margin-top: 16px;
`;
