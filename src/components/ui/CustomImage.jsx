
import { styled } from "@mui/material";
import Image from "next/image";
const CustomImage = ({ src, width, height, sx }) => {
  return (
    <Image
      sx={{ ...sx }}
      src={src}
      width={width}
      height={height}
      alt="Picture of the author"
    />
  );
};

export default CustomImage;



const ImageStyle = styled(Image)(({ props: sx, theme }) => ({
  ...sx,
}));