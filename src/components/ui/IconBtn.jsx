import { Button, styled } from "@mui/material";

const IconBtn = (props) => {
  const { text, type, onClick, sx } = props;
  return (
    <IconBtnStyled
      type={type}
      onClick={onClick}
      size="medium"
      variant="outlined"
    >
      {text}
    </IconBtnStyled>
  );
};

export default IconBtn;


const IconBtnStyled = styled(Button)(({ props: sx, theme }) => ({
  ...sx,
  font: 14,
  fontFamily: "Inter",
  backgroundColor: "#fff",
  minWidth: "30px",
  paddingX: "10px",
  borderColor: "#B7B7B7",
  color: "#B7B7B7",
  ":hover": {
    backgroundColor: "#fff",
    borderColor: "#B7B7B7",
    color: "#B7B7B7",
  },
}));