import { Box } from "@mui/material";
import CustomImage from "./ui/CustomImage";
import Heading from "./ui/Heading";
import SubTitle from "./ui/SubTitle";

const ImageCard = ({ src, title, subTitle }) => {
  return (
    <Box
      sx={{
        width: { xs: "180px", sm: '250px' },
        margin: "0 auto",
        textAlign: "center",
        marginBottom: '6px'
      }}
    >
      {title && (
        <Heading
          text={title}
          size="large"
          color="#404040"
          sx={{ marginBottom: "4px" }}
        />
      )}
      {subTitle && (
        <SubTitle
          text={subTitle}
          color="#404040"
          sx={{ marginBottom: "12px", fontSize: '130px' }}
        />
      )}
      <CustomImage src={src} />
    </Box>
  );
};

export default ImageCard;
