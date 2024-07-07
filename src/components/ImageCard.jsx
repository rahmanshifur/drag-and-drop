import { Box } from "@mui/material";
import CustomImage from "./ui/CustomImage";
import Heading from "./ui/Heading";
import SubTitle from "./ui/SubTitle";

const ImageCard = ({ src, title, subTitle }) => {
  return (
    <Box
      sx={{
        width: "180px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {title && (
        <Heading
          text="Let’s get started!"
          size="medium"
          color="#404040"
          sx={{ marginBottom: "4px" }}
        />
      )}
      {subTitle && (
        <SubTitle
          text={subTitle}
          size="small"
          color="#404040"
          sx={{ marginBottom: "12px" }}
        />
      )}
      <CustomImage src={src} />
    </Box>
  );
};

export default ImageCard;
