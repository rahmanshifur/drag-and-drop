"use client";
import { Box, Select, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import lightImg from "../../assets/images/lignt.png";
import CustomImage from "./CustomImage";
import CustomLabel from "./CustomLabel";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CustomSelect = ({
  label,
  name,
  placeholder,
  names,
  required,
  lightIcon,
}) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width={"100%"}>
      {label && <CustomLabel label={label} required={required} />}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Select
          fullWidth
          size="small"
          inputProps={{ style: { fontSize: 12, fontFamily: "Inter" } }}
          name={name}
          displayEmpty
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <Typography sx={{ color: "#404040", fontSize: 12 }}>
                  {placeholder}
                </Typography>
              );
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          input={<OutlinedInput sx={{ fontSize: 12, fontFamily: "Inter" }} />}
        >
          <MenuItem disabled value="" sx={{ color: "#404040", fontSize: 12 }}>
            {placeholder}
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              sx={{ color: "#404040", fontSize: 12 }}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        {lightIcon && (
          <Box
            sx={{
              border: "1px solid #cbcbcb",
              borderRadius: "3px",
              padding: "4px",
            }}
          >
            <CustomImage src={lightImg} width={20} height={20} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CustomSelect;
