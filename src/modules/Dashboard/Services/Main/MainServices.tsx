import { Paper, Stack, Typography } from "@mui/material";
import ListingServices from "../Features/ListingServices/ListingServices";
import ActionBar from "../../../../components/ActionBar/ActionBar";
import { useModal } from "../../../../hooks/useModal";
import CreateServiceModal from "../Features/CreateService/CreateService.modal";
import { Dispatch, SetStateAction, useRef } from "react";
import { useAppSelector } from "../../../../redux/hooks/useAppRTK";

function MainServices() {
  const { handleClose, handleOpen, open } = useModal();
  const keywordRef = useRef<{
    setKeyword: Dispatch<SetStateAction<string | undefined>>;
  }>(null);
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Stack spacing={4}>
      <Typography variant="h4">{`Bonjour ${user?.username?.split("@")?.[0]} 👋🏼`}</Typography>
      <Paper sx={{ px: 6, py: 3, borderRadius: 5 }}>
        <Stack spacing={4}>
          <ActionBar
            handleOpenAddModal={handleOpen}
            searchPlaceHolder={"Chercher un service"}
            keywordRef={keywordRef}
            baseTitle="Tous les services"
          />
          <ListingServices ref={keywordRef} />
        </Stack>
      </Paper>
      <CreateServiceModal open={open} handleClose={handleClose} />
    </Stack>
  );
}

export default MainServices;
