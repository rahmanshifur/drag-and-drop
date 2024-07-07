import { Button } from "@mui/material";

const PrimaryBtn = ({ text, type, onClick, sx }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      size="medium"
      variant="contained"
      sx={{
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
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryBtn;



