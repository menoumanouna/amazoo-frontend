import {
  TextField,
  IconButton,
  InputAdornment,
  TextFieldProps,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

function SearchBar({
  placeholder,
  handleChange,
  ...props
}: {
  handleChange?: (keyword: string) => void;
  placeholder?: string;
} & TextFieldProps) {
  return (
    <TextField
      {...props}
      size="small"
      placeholder={placeholder || "Search"}
      variant="outlined"
      onChange={(e) => handleChange?.(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
