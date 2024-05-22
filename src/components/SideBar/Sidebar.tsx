import {
  BaseSideBar,
  ItemHolder,
  SideBarrItem,
  SideBarrItems,
} from "./sidebar.style";
import { useNavigate } from "react-router-dom";
import { sidebarRouting } from "../../config/sidebar.routing";
import { useState } from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
function Sidebar({ toggled }: { toggled: boolean }) {
  const navigate = useNavigate();

  const [chosenSideBarItem, setChosenSideBarItem] = useState(1);
  const handleClickItem = (path: string, id: number) => {
    return () => {
      if (path === "/logout") handleDisconnect();
      else {
        setChosenSideBarItem(id);
        navigate(path);
      }
    };
  };
  const handleDisconnect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <BaseSideBar direction={"column"} spacing={4}>
      <Typography
        variant={"h3"}
        textAlign={"center"}
        color={"white"}
        sx={{ mb: 1 }}
      >
        AMAZOO
      </Typography>
      <SideBarrItems direction={"column"} spacing={1} pt={1}>
        {sidebarRouting.map(({ id, name, path, icon: Icon }) => (
          <SideBarrItem
            key={name}
            margin={4}
            onClick={handleClickItem(path, id)}
            selected={String(chosenSideBarItem === id)}
          >
            {toggled && (
              <Stack textAlign={"center"} direction={"row"}>
                <Icon
                  sx={{
                    mx: 2,
                  }}
                />
                <ItemHolder
                  selected={String(chosenSideBarItem === id)}
                  variant="body2"
                >
                  {name}
                </ItemHolder>
              </Stack>
            )}
            {!toggled && (
              <Tooltip title={name} arrow>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Icon />
                </Stack>
              </Tooltip>
            )}
          </SideBarrItem>
        ))}
      </SideBarrItems>
    </BaseSideBar>
  );
}

export default Sidebar;
