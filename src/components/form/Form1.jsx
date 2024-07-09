"use client";

import { Box, Grid, styled } from "@mui/material";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import PrimaryBtnLink from "../ui/PrimaryBtnLink";

const genders = ["Female", "Male"];
const concerns = ["Skin Care", "Hair Care", "Beauty Care"];

const Form1 = ({ handleChange, formValues }) => {
  return (
    <BoxWrapper>
      <CustomInput
        label={"What do you like to be called?"}
        placeholder={"Enter your valid name"}
        name={"name"}
        handleChange={handleChange}
        value={formValues.name}
        required
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomSelect
            value={formValues.gender}
            label={"I’m"}
            placeholder={"Gender"}
            name={"gender"}
            options={genders}
            required
            handleChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomSelect
            value={formValues.concern}
            label={"Seeking for"}
            placeholder={"Select Concern"}
            name={"concern"}
            options={concerns}
            required
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <CustomInput
            label={"Wish me on"}
            placeholder={"Date of birth"}
            name={"dob"}
            handleChange={handleChange}
            value={formValues.dob}
            type="date"
            required
          />
        </Grid>
      </Grid>
      <PrimaryBtnLink
        text="Next"
        sx={{ marginTop: "8px" }}
        href="/form-step2"
      />
    </BoxWrapper>
  );
};

export default Form1;

const BoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
}));
