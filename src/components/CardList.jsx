import { Box } from "@mui/material";
import Heading from "./ui/Heading";
import SubTitle from "./ui/SubTitle";

const CardList = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "16px",
        borderRadius: "6px",
        boxShadow: "5px 5px 5px #cbcbcb",
      }}
    >
      <Heading text={"Regimen: RGM1264"} sx={{ fontSize: { xs: '' } }} />
      <SubTitle
        text={"21:30:47 , 4 June 2024"}
        size="small"
        sx={{ marginTop: "5px", marginBottom: "8px" }}
      />
      <Heading text={"Fatima Ahmed"} size="small" />
    </Box>
  );
};

export default CardList;
