import { Typography, styled } from "@mui/material";

const colors = {
  warning: "#FF9900",
  light: "#404040",
};

const SubTitle = ({ text, color = "#000", sx }) => {

  const SubTitleStyle = styled(Typography)(({ theme }) => ({
    ...sx,
    color: colors[color],
    fontSize: 10,
    fontWeight: 300,
    fontFamily: "Inter",
    [theme.breakpoints.up('sm')]: { fontSize: '14px' }
  }));

  return (
    <SubTitleStyle >
      {text}
    </SubTitleStyle>
  );
};

export default SubTitle;


