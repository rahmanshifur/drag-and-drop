import { Typography, styled } from "@mui/material";

const CustomLabel = ({ label, required }) => {
  return (
    <LableStyle
      component={"label"}
      mb={0.5}
    >
      {label}
      {required && (
        <Typography component={"span"} color={"error"} ml={0.5}>
          *
        </Typography>
      )}
    </LableStyle>
  );
};

export default CustomLabel;


const LableStyle = styled(Typography)(({ theme }) => ({
  display: 'block',
  fontSize: 13,
  fontWeight: 400,
  color: "#404040",
  fontFamily: "Inter",
  [theme.breakpoints.up('sm')]: { fontSize: '16px' }
}));