import { Box } from "@mui/material";
import Image1 from "../assets/images/image-1.png";
import CustomImage from "./ui/CustomImage";
import Heading from "./ui/Heading";
import SubTitle from "./ui/SubTitle";
const ImageCard = () => {
  return (
    <Box
      sx={{
        width: "180px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Heading
        text="Let’s get started!"
        size="medium"
        color="#404040"
        sx={{ marginBottom: "4px" }}
      />
      <SubTitle
        text="It’ll take 2-3 minutes to understand you and your skin concern. "
        size="small"
        color="#404040"
        sx={{ marginBottom: "12px" }}
      />
      <CustomImage src={Image1} />
    </Box>
  );
};

export default ImageCard;


