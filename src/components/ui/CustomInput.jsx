import { Box, TextField } from "@mui/material";
import CustomLabel from "./CustomLabel";

const CustomInput = ({
  label,
  placeholder,
  name,
  multiline,
  rows,
  onChange,
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
        size="small"
        placeholder={placeholder}
        name={name}
        required={required}
        inputProps={{ style: { fontSize: 12, fontFamily: "Inter" } }}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};

export default CustomInput;
