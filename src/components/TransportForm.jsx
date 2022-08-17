import { Grid, MenuItem } from "@mui/material";
import React, { useState } from "react";
import ImageAdder from "./ImageAdder";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  MyDivider,
  MyForm,
  SubGrid,
  MyInput,
  MyTextarea,
  MySelect,
  MyStack,
  MyButton,
} from "./CustomStyled";
import * as yup from "yup";

function TransportForm() {
  const [rules, setRules] = useState(
    "No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule. No smoking or food is allowed inside the vehicule."
  );
  const [seats, setSeats] = useState(5);
  const [governorate, setGovernorate] = useState("");
  const [regularity, setRegularity] = useState("");
  const [price, setPrice] = useState(160);
  const [name, setName] = useState("Seat Ibiza");

  //yup
  const schema = yup
    .object({
      name: yup.string().required(),
      regularity: yup.string().required(),
      governorate: yup.string().required(),
      seats: yup.number().positive().min(1).max(9).required(),
      rules: yup.string().required(),
      price: yup.number().positive().integer().required(),
    })
    .required();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      regularity,
      name,
      seats,
      governorate,
      price,
      rules,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const regularities = ["Non-regular", "Regular", "whatever"];
  const govsList = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

  return (
    <div>
      <Grid container spacing={4}>
        <SubGrid item sm={3} xs={12}>
          <h2>Transport 1:</h2>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SubGrid>
        <SubGrid item sm={9} xs={12}>
          <MyInput
            {...register("name")}
            name="name"
            style={{ fontSize: "14pt", fontWeight: "bolder" }}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {<p>{errors.name?.message}</p>}

          <MyDivider />
          <MyForm onSubmit={handleSubmit(onSubmit)} action="">
            <MyStack>
              <label htmlFor="regularity">Regularity :</label>
              <MySelect
                {...register("regularity")}
                id="regularity"
                value={regularity}
                onChange={(e) => {
                  setRegularity(e.target.value);
                  console.log(regularity);
                }}
              >
                {regularities.map((reg) => (
                  <MenuItem key={reg} value={reg}>
                    {reg}
                  </MenuItem>
                ))}
              </MySelect>
              {<p>{errors.regularity?.message}</p>}
              <label htmlFor="governorate">Governorate :</label>
              <MySelect
                {...register("governorate")}
                id="governorate"
                value={governorate}
                onChange={(e) => {
                  setGovernorate(e.target.value);
                  console.log(governorate);
                }}
              >
                {govsList.map((gov) => (
                  <MenuItem key={gov} value={gov}>
                    {gov}
                  </MenuItem>
                ))}
              </MySelect>

              {<p>{errors.governorate?.message}</p>}
              <label htmlFor="price">Price per Day:</label>
              <MyInput
                {...register("price")}
                id="price"
                error={errors.price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="Number"
              />
              {<p>{errors.price?.message}</p>}
              <label htmlFor="seats">seats :</label>
              <MyInput
                {...register("seats")}
                id="seats"
                onChange={(e) => {
                  setSeats(e.target.value);
                }}
                type="number"
              />
              {<p>{errors.seats?.message}</p>}
            </MyStack>
            <MyStack>
              <label htmlFor="rules">Vehicule Rules :</label>
              <MyTextarea
                error={errors.rules}
                {...register("rules")}
                id="rules"
                onChange={(e) => {
                  setRules(e.target.value);
                }}
                rows={7}
              />
              {<p>{errors.rules?.message}</p>}

              <MyButton style={{ margin: "8px 0" }} confirm>
                Save edits
              </MyButton>
            </MyStack>
          </MyForm>
        </SubGrid>
        <SubGrid item xs={12}></SubGrid>
      </Grid>
      <ImageAdder text="Car Images" />
    </div>
  );
}

export default TransportForm;
