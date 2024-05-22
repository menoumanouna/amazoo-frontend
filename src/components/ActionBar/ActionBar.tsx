import { Stack, Typography } from "@mui/material";
import { ActionBarButton } from "../Button/ActionButton/actionButton.style";
import SearchBar from "../TextFields/SearchBar/SearchBar";
import { Dispatch, RefObject, SetStateAction } from "react";

const ActionBar = ({
  handleOpenAddModal,
  searchPlaceHolder,
  keywordRef,
  baseTitle,
}: {
  handleOpenAddModal: () => void;
  baseTitle?: string;
  searchPlaceHolder?: string;
  keywordRef: RefObject<{
    setKeyword: Dispatch<SetStateAction<string | undefined>>;
  }>;
}) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography variant={"h3"}>{baseTitle}</Typography>
      <Stack direction={"row"} spacing={1}>
        <SearchBar
          handleChange={(value) => keywordRef.current?.setKeyword(value)}
          placeholder={searchPlaceHolder}
        />
        <ActionBarButton variant={"contained"} onClick={handleOpenAddModal}>
          {"Ajouter"}
        </ActionBarButton>
      </Stack>
    </Stack>
  );
};

export default ActionBar;
