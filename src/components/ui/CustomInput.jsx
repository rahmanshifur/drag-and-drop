import { Box, TextField } from "@mui/material";
import CustomLabel from "./CustomLabel";

const CustomInput = ({
  label,
  placeholder,
  name,
  multiline,
  rows,
  handleChange,
  value,
  required,
}) => {


  return (
    <Box width={"100%"}>
      {label && <CustomLabel label={label} required={required} />}
      <TextField
        multiline={multiline}
        rows={rows}
        fullWidth
        size={'small'}
        placeholder={placeholder}
        name={name}
        required={required}
        sx={{ '.MuiOutlinedInput-input': { fontSize: { xs: '12px', sm: '14px' }, fontFamily: "Inter" } }}
        onChange={handleChange}
        value={value}
      />
    </Box>
  );
};

export default CustomInput;
