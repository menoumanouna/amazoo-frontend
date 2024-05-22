import { useState, forwardRef, useImperativeHandle } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordEye = forwardRef<{ toggleVisibility: () => void }, {}>(
  ({}, ref) => {
    const [hidden, setHidden] = useState(false);
    const toggleVisibility = () => setHidden(!hidden);

    useImperativeHandle(ref, () => ({ toggleVisibility }));
    return hidden ? (
      <RemoveRedEyeIcon sx={{ cursor: "pointer", mr: 1, color: "white" }} />
    ) : (
      <VisibilityOffIcon sx={{ cursor: "pointer", mr: 1, color: "white" }} />
    );
  }
);

export default PasswordEye;
