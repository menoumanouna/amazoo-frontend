import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

function Selector({
  field,
  defaultValue,
  data,
  error,
  disabled,
  label,
}: {
  field: ControllerRenderProps;
  defaultValue: string;
  error: boolean;
  disabled: boolean;
  data: any[];
  label?: string;
}) {
  const [selected, setSelected] = useState(defaultValue);
  const handleSelected = (e: any) => {
    setSelected(e.target.value);
    field.onChange(e.target.value);
  };
  const theme = useTheme();
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{label || "Sélectionner"}</InputLabel>
      <Select
        labelId="select-label"
        value={selected}
        label={label || "Selectionner"}
        variant="outlined"
        fullWidth
        disabled={disabled}
        error={error}
        onChange={handleSelected}
        MenuProps={{
          sx: {
            "& .MuiMenuItem-root": {
              backgroundColor: theme.palette.background.paper,
              color: "black",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },
            },
          },
        }}
      >
        {data.map((item: { id: number; name: string; label: string }) => (
          <MenuItem value={item.id}>{item.label ?? item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Selector;
