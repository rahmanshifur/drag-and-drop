import { Typography, styled } from "@mui/material";

const sizes = {
  small: "14px",
  medium: "15px",
  large: "18px",
};

const Heading = ({ text, size = "large", color = "#000", sx }) => {

  const HeadingStyle = styled(Typography)(({ theme }) => ({
    ...sx,
    color: { color },
    fontSize: sizes[size],
    fontWeight: size === "small" ? 400 : 500,
    fontFamily: "Inter",
    [theme.breakpoints.up('sm')]: { fontSize: size === "small" ? '16px' : size === "medium" ? '18px' : size === "large" ? '22px' : '' }
  }));

  return (
    <HeadingStyle
      component={size === "small" ? "h6" : "h3"}
    >
      {text}
    </HeadingStyle>
  );
};

export default Heading;



