import { Stack } from "@mui/material";
import { useModal } from "../../../../hooks/useModal";
import ListingCategoryHabitats from "../Features/ListingHabitat/ListingCategoryHabitats";
import CreateCategoryHabitat from "../Features/CreateHabitat/CreateCategoryHabit.modal";
import ActionBar from "../../../../components/ActionBar/ActionBar";
import { Dispatch, SetStateAction, useRef } from "react";

function MainCategoryHabitats() {
  const { handleClose, handleOpen, open } = useModal();
  const keywordRef = useRef<{
    setKeyword: Dispatch<SetStateAction<string | undefined>>;
  }>(null);

  return (
    <Stack spacing={4}>
      <ActionBar
        handleOpenAddModal={handleOpen}
        keywordRef={keywordRef}
        searchPlaceHolder={"Chercher une categorie habitat"}
        baseTitle="Categories des habitats"
      />
      <ListingCategoryHabitats ref={keywordRef} />
      <CreateCategoryHabitat open={open} handleClose={handleClose} />
    </Stack>
  );
}

export default MainCategoryHabitats;
