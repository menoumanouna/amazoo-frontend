import { Paper, Stack, Typography } from "@mui/material";
import ListingServices from "../Features/ListingAnimals/ListingAnimals";
import ActionBar from "../../../../components/ActionBar/ActionBar";
import { useModal } from "../../../../hooks/useModal";
import { Dispatch, SetStateAction, useRef } from "react";
import CreateAnimalModal from "../Features/CreateAnimal/CreateAnimal.modal";
import { useAppSelector } from "../../../../redux/hooks/useAppRTK";

function MainAnimals() {
  const { handleClose, handleOpen, open } = useModal();
  const keywordRef = useRef<{
    setKeyword: Dispatch<SetStateAction<string | undefined>>;
  }>(null);
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Stack spacing={4}>
      <Typography variant="h4">{`Bonjour ${user?.username?.split("@")?.[0]} 👋🏼`}</Typography>
      <Paper sx={{ px: 6, py: 2, borderRadius: 5 }}>
        <Stack spacing={4}>
          <ActionBar
            handleOpenAddModal={handleOpen}
            searchPlaceHolder={"Chercher un animal"}
            keywordRef={keywordRef}
            baseTitle="Tous les animaux"
          />
          <ListingServices ref={keywordRef} />
        </Stack>
      </Paper>
      <CreateAnimalModal open={open} handleClose={handleClose} />
    </Stack>
  );
}

export default MainAnimals;
