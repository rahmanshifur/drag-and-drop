import { Typography } from "@mui/material";
const SubTitle = ({ text, color = "#000", sx }) => {
  const colors = {
    warning: "#FF9900",
    light: "#404040",
  };

  return (
    <Typography
      sx={{
        ...sx,
        color: colors[color],
        fontSize: 10,
        fontWeight: 300,
        fontFamily: "Inter",
      }}
    >
      {text}
    </Typography>
  );
};

export default SubTitle;


