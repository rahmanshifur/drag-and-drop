"use client";
import { Box, Select, styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
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



const CustomSelect = ({
  label,
  name,
  placeholder,
  value,
  required,
  options,
  lightIcon,
  handleChange
}) => {

  return (
    <Box width={"100%"}>
      {label && <CustomLabel label={label} required={required} />}
      <BoxWrapper>
        <Select
          fullWidth
          size="small"
          inputProps={{ style: { fontSize: { xs: '12px', sm: '14px' }, fontFamily: "Inter" } }}
          name={name}
          displayEmpty
          value={value}
          onChange={handleChange}

          MenuProps={MenuProps}
          input={<OutlinedInput sx={{ fontSize: { xs: '12px', sm: '14px' }, fontFamily: "Inter" }} />}
        >
          <MenuItem disabled value="" sx={{ color: "#404040", fontSize: { xs: '12px', sm: '14px' } }}>
            {placeholder}
          </MenuItem>
          {options?.map((item) => (
            <MenuItem
              sx={{ color: "#404040", fontSize: { xs: '12px', sm: '14px' } }}
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
        {lightIcon && (
          <IconImgStyle

          >
            <CustomImage src={lightImg} />
          </IconImgStyle>
        )}
      </BoxWrapper>
    </Box>
  );
};

export default CustomSelect;


const IconImgStyle = styled(Box)(({ theme }) => ({
  border: "1px solid #cbcbcb",
  borderRadius: "3px",
  padding: "4px",
}))
const BoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
}))

