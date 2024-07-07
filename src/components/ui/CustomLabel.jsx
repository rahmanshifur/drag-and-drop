import { Typography } from "@mui/material";
import React from "react";

const CustomLabel = ({ label, required }) => {
  return (
    <Typography
      component={"label"}
      sx={{
        fontSize: 13,
        fontWeight: 400,
        color: "#404040",
        fontFamily: "Inter",
      }}
    >
      {label}
      {required && (
        <Typography component={"span"} color={"error"} ml={0.5}>
          *
        </Typography>
      )}
    </Typography>
  );
};

export default CustomLabel;
