import { Stack } from "@mui/material";
import { ReactNode, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Path from "../../components/Path/Path";
import {
  DashboardLayoutContainer,
  DashboardLayoutContent,
  DashboardLayoutMain,
  UpperBar,
} from "./dashboardLayout.style";
import PersonIcon from "@mui/icons-material/Person";
import { Dispatch, SetStateAction, useRef } from "react";
import { IProfile } from "../../modules/Dashboard/UpdateProfile/shared/profile.interface";
import UpdateProfileModal from "../../modules/Dashboard/UpdateProfile/Main/UpdateProfileModal";

function DashboardLayout({ children }: { children: ReactNode }) {
  const updateProfileRef = useRef<{
    setCurrentUser: Dispatch<SetStateAction<IProfile | undefined>>;
    handleOpen: () => void;
  }>(null);
  const handleOpen = () => {
    updateProfileRef.current?.setCurrentUser({ name: "John Doe" });
  };
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => setToggled((prev) => !prev);
  return (
    <DashboardLayoutContainer>
      <UpperBar direction={"row"}>
        <Stack
          direction={"row"}
          flex={toggled ? 0.2 : 0.1}
          justifyContent={"center"}
        >
          <TableRowsIcon
            sx={{ cursor: "pointer", color: "white" }}
            onClick={handleToggle}
          />
        </Stack>
        <Stack direction={"row"} flex={1} spacing={5} alignItems={"center"}>
          <img style={{ width: 20 }} src={"/logo.png"} />
          <Path />
        </Stack>
        <Stack direction={"row"}>
          <PersonIcon
            sx={{ color: "white", mx: 2, cursor: "pointer" }}
            onClick={handleOpen}
          />
        </Stack>
      </UpperBar>
      <DashboardLayoutMain direction={"row"}>
        <Stack flex={toggled ? 0.2 : 0.1}>
          <Sidebar toggled={toggled} />
        </Stack>
        <DashboardLayoutContent padding={5} flex={1}>
          {children}
        </DashboardLayoutContent>
      </DashboardLayoutMain>
      <UpdateProfileModal ref={updateProfileRef} />
    </DashboardLayoutContainer>
  );
}

export default DashboardLayout;
