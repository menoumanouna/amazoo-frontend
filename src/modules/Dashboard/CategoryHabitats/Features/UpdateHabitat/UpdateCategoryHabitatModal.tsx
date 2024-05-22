import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
} from "react";
import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import { useModal } from "../../../../../hooks/useModal";
import { ICategoryHabitat } from "../../shared/interfaces/category-habitat.interface";
import UpdateHabitat from "./UpdateCategoryHabitat";

const UpdateCategoryHabitat = forwardRef<
  {
    setCategoryHabitat: Dispatch<SetStateAction<ICategoryHabitat | undefined>>;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<ICategoryHabitat>();

  useImperativeHandle(ref, () => ({
    setCategoryHabitat: setMutableData,
    handleOpen,
  }));

  //TODO get from main form mutated data to be sent to backend
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <UpdateHabitat habitat={mutableData} />
    </BaseModal>
  );
});
export default UpdateCategoryHabitat;
