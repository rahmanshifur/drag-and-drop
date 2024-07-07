import { Button } from "@mui/material";
import React from "react";

const IconBtn = ({ text, type, onClick, sx }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      size="medium"
      variant="outlined"
      sx={{
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
      }}
    >
      {text}
    </Button>
  );
};

export default IconBtn;
