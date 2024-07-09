import { styled } from "@mui/material";
import Link from "next/link";

const PrimaryBtnLink = (props) => {
  const { text, href = "/" } = props;

  return (
    <ButtonStyle href={href} size="medium" variant="contained">
      {text}
    </ButtonStyle>
  );
};

export default PrimaryBtnLink;

const ButtonStyle = styled(Link)(({ props: sx, theme }) => ({
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
  textDecoration: "none",
  color: "#fff",
  borderRadius: "8px",
  padding: "10px 15px",
  margin: "10px 0px"
}));
