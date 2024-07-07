import { Typography } from "@mui/material";

const Heading = ({ text, size = "large", color = "#000", sx }) => {
  const sizes = {
    small: "14px",
    medium: "15px",
    large: "18px",
  };

  return (
    <Typography
      component={size === "small" ? "h6" : "h3"}
      sx={{
        ...sx,
        color: { color },
        fontSize: sizes[size],
        fontWeight: size === "small" ? 400 : 500,
        fontFamily: "Inter",
      }}
    >
      {text}
    </Typography>
  );
};

export default Heading;



