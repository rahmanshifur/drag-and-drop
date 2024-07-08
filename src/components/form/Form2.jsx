import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box } from "@mui/material";
import { useState } from "react";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import IconBtn from "../ui/IconBtn";
import PrimaryBtn from "../ui/PrimaryBtn";
const concerns2 = [
  "Acne & breakouts",

  "Blackheads",

  "  Dry skin",

  "    Fine lines & wrinkles",

  " Dehydrated skin",
];
const Form2 = () => {
  const [formData2, setFormData2] = useState({
    selectConcern: '',
    concernArea: '',
    detailsConcern: '',

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData2', formData2)
  }


  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "16px",
          alignItems: "center",
        }}
      >
        <CustomSelect
          options={concerns2}
          label={"What’s your concern?"}
          placeholder={"Select your concern or search by keyword"}
          name={"selectConcern"}
          handleChange={handleChange}
          value={formData2.selectConcern}
        />

        <CustomSelect
          options={concerns2}
          label={"Do you have any eye area concerns, Rasel Miah ?"}
          placeholder={"Select eye area concerns"}
          name={"concernArea"}
          lightIcon={true}
          handleChange={handleChange}
          value={formData2.concernArea}
        />
        <CustomInput
          label={"What’s your concern ?"}
          placeholder={
            "Please write details about your skin concerns and mention A to Z skin problem’s"
          }
          name={"detailsConcern"}
          required
          multiline
          rows={5}
          handleChange={handleChange}
          value={formData2.detailsConcern}
        />
        <Box
          sx={{
            display: "flex",
            gap: "16px",
          }}
        >
          <IconBtn text={<KeyboardArrowLeftIcon />} />
          <PrimaryBtn type='submit' text="Submit" />
        </Box>
      </Box>
    </form>
  );
};

export default Form2;
