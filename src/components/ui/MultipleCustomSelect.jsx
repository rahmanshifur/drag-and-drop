import { Box, Chip, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import CustomLabel from "./CustomLabel";

const MultipleCustomSelect = ({
  options,
  label,
  placeholder,
  name,
  handleChange,
  value,
  required,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(value || []);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedOptions(newValue);
    handleChange({ target: { name, value: newValue } });
  };

  const handleDelete = (optionToDelete) => () => {
    const newSelectedOptions = selectedOptions.filter(
      (option) => option !== optionToDelete
    );
    setSelectedOptions(newSelectedOptions);
    handleChange({ target: { name, value: newSelectedOptions } });
  };

  return (
    <Box width={"100%"}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {label && <CustomLabel label={label} required={required} />}{" "}
        <small style={{ color: "#929292" }}>
          (You can select multiple concern)
        </small>
      </Box>
      <Select
        multiple
        value={selectedOptions}
        onChange={handleSelectChange}
        displayEmpty
        style={{ width: "100%" }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{placeholder}</em>;
          }
          return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onDelete={handleDelete(value)}
                />
              ))}
            </Box>
          );
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default MultipleCustomSelect;
