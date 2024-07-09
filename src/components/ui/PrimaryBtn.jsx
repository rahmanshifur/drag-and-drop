import { Button, styled } from "@mui/material";

const PrimaryBtn = (props) => {
  const { text, type, onClick } = props;

  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      size="medium"
      variant="contained"
    >
      {text}
    </ButtonStyle>
  );
};

export default PrimaryBtn;

const ButtonStyle = styled(Button)(({ props: sx, theme }) => ({
  ...sx,
  textTransform: "capitalize",
  font: 14,
  fontWeight: 500,
  fontFamily: "Inter",
  backgroundColor: "#000",
  paddingX: "40px",
  ":hover": {
    backgroundColor: "#000",
  },
}));
