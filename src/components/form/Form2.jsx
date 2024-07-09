"use client";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box } from "@mui/material";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import IconBtn from "../ui/IconBtn";
import MultipleCustomSelect from "../ui/MultipleCustomSelect";
import PrimaryBtn from "../ui/PrimaryBtn";

const concerns2 = [
  "Acne & breakouts",
  "Blackheads",
  "Dry skin",
  "Fine lines & wrinkles",
  " Dehydrated skin",
];

const Form2 = ({
  handleChange,
  formValues,
  submitHandler,
  handleBackClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "16px",
        alignItems: "center",
      }}
    >
      <MultipleCustomSelect
        options={concerns2}
        label={"What’s your concern?"}
        placeholder={"Select your concern or search by keyword"}
        name={"concerns"}
        handleChange={handleChange}
        value={formValues.concerns}
      />

      <CustomSelect
        options={concerns2}
        label={`Do you have any eye area concerns, ${formValues.name} ?`}
        placeholder={"Select eye area concerns"}
        name={"eyeConcern"}
        lightIcon={true}
        handleChange={handleChange}
        value={formValues.eyeConcern}
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
        value={formValues.detailsConcern}
      />
      <Box
        sx={{
          display: "flex",
          gap: "16px",
        }}
      >
        <IconBtn text={<KeyboardArrowLeftIcon />} onClick={handleBackClick} />
        <PrimaryBtn
          text="Submit"
          sx={{ marginTop: "8px" }}
          onClick={submitHandler}
        />
      </Box>
    </Box>
  );
};

export default Form2;
