import { Box, Grid } from "@mui/material";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import PrimaryBtn from "../ui/PrimaryBtn";

const Form1 = () => {
  const gender = ["Female", "Male"];
  const concern = ["Skin Care", "Hair Care", "Beauty Care"];
  return (
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <CustomInput
          label={"What do you like to be called?"}
          placeholder={"Enter your valid name"}
          name={"name"}
          required
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomSelect
              names={gender}
              label={"I’m"}
              placeholder={"Gender"}
              name={"name"}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              names={concern}
              label={"Seeking for"}
              placeholder={"Select Concern"}
              name={"name"}
              required
            />
          </Grid>
        </Grid>
        <PrimaryBtn text="Next" sx={{ marginTop: "8px" }} />
      </Box>
    </form>
  );
};

export default Form1;


