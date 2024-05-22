import { Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { PathTypography } from "./path.style";

function Path() {
  const location = useLocation();
  const navigate = useNavigate();
  const nameSpaces = location.pathname.split("/").filter((name) => name !== "");
  const handleNavigate = (path: string) => () => navigate(path);
  return (
    <Stack direction={"row"}>
      {nameSpaces.map((nameSpace, index) => {
        return (
          <PathTypography
            key={index}
            variant="body2"
            onClick={handleNavigate(`/${nameSpace}`)}
          >
            {nameSpace} {index !== nameSpaces.length - 1 && ` • `}
          </PathTypography>
        );
      })}
    </Stack>
  );
}

export default Path;
