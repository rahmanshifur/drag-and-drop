import { Box, Grid, styled } from "@mui/material";
import { useState } from "react";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import PrimaryBtn from "../ui/PrimaryBtn";

const genders = ["Female", "Male"];
const concerns = ["Skin Care", "Hair Care", "Beauty Care"];

const Form1 = () => {

  const [formData, SetFormData] = useState({
    name: '',
    gender: '',
    concern: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formData', formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <BoxWrapper >
        <CustomInput
          label={"What do you like to be called?"}
          placeholder={"Enter your valid name"}
          name={"name"}
          required
          value={formData.name}
          onChange={handleChange}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomSelect
              value={formData.gender}
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
              value={formData.concern}
              label={"Seeking for"}
              placeholder={"Select Concern"}
              name={"concern"}
              options={concerns}
              required
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
        <PrimaryBtn type='submit' text="Next" sx={{ marginTop: "8px" }} />
      </BoxWrapper>
    </form >
  );
};

export default Form1;


const BoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center"
}))
