import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
} from "react";
import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import { useModal } from "../../../../../hooks/useModal";
import { IHabitat } from "../../shared/interfaces/habitat.interface";
import UpdateHabitat from "./UpdateHabitat";

const UpdateServiceModal = forwardRef<
  {
    setHabitat: Dispatch<SetStateAction<IHabitat | undefined>>;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<IHabitat>();

  useImperativeHandle(ref, () => ({
    setHabitat: setMutableData,
    handleOpen,
  }));

  return (
    <BaseModal open={open} handleClose={handleClose}>
      <UpdateHabitat habitat={mutableData} handleClose={handleClose} />
    </BaseModal>
  );
});
export default UpdateServiceModal;
