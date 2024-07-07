import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box } from "@mui/material";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import IconBtn from "../ui/IconBtn";
import PrimaryBtn from "../ui/PrimaryBtn";
const Form2 = () => {
  const concerns = [
    "Acne & breakouts",

    "Blackheads",

    "  Dry skin",

    "    Fine lines & wrinkles",

    " Dehydrated skin",

    " Dull Skin",

    "Redness",

    " Excess oil",

    " Uneven skin texture",

    "  Acne scars",

    "  Acne Spot",

    " Hyperpigmentation",
  ];
  return (
    <form>
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
          names={concerns}
          label={"What’s your concern?"}
          placeholder={"Select your concern or search by keyword"}
          name={"name"}
        />

        <CustomSelect
          names={concerns}
          label={"Do you have any eye area concerns, Rasel Miah ?"}
          placeholder={"Select eye area concerns"}
          name={"name"}
          lightIcon={true}
        />
        <CustomInput
          label={"What do you like to be called?"}
          placeholder={
            "Please write details about your skin concerns and mention A to Z skin problem’s"
          }
          name={"name"}
          required
          multiline
          rows={5}
        />
        <Box
          sx={{
            display: "flex",
            gap: "16px",
          }}
        >
          <IconBtn text={<KeyboardArrowLeftIcon />} />
          <PrimaryBtn text="Submit" />
        </Box>
      </Box>
    </form>
  );
};

export default Form2;
