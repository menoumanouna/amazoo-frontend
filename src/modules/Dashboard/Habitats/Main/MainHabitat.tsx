import { Paper, Stack, Typography } from "@mui/material";
import { useModal } from "../../../../hooks/useModal";
import ListingHabitats from "../Features/ListingHabitat/ListingHabitats";
import CreateHabitModal from "../Features/CreateHabitat/CreateHabit.modal";
import ActionBar from "../../../../components/ActionBar/ActionBar";
import { Dispatch, SetStateAction, useRef } from "react";
import { useAppSelector } from "../../../../redux/hooks/useAppRTK";

function MainHabitats() {
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
            keywordRef={keywordRef}
            searchPlaceHolder={"Chercher un habitat"}
            baseTitle="Tous les habitats"
          />
          <ListingHabitats ref={keywordRef} />
        </Stack>
      </Paper>
      <CreateHabitModal open={open} handleClose={handleClose} />
    </Stack>
  );
}

export default MainHabitats;
