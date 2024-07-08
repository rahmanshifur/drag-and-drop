import { createData } from "@/app/store/slices/formSlice1";
import { Box, Grid, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import PrimaryBtn from "../ui/PrimaryBtn";

const genders = ["Female", "Male"];
const concerns = ["Skin Care", "Hair Care", "Beauty Care"];

const Form1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    concern: ''
  })

  const dispatch = useDispatch()


  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem('form1Data')) || [];
  //   if (storedData.length > 0) {
  //     dispatch(loadData(storedData));
  //   }
  // }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      id: shortid.generate(),
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formData', formData)
    dispatch(createData(formData))
  }
  return (
    <form onSubmit={handleSubmit}>
      <BoxWrapper >
        <CustomInput
          label={"What do you like to be called?"}
          placeholder={"Enter your valid name"}
          name={"name"}
          handleChange={handleChange}
          value={formData.name}
          required
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
