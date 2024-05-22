import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
} from "react";
import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import { IAnimal } from "../../shared/interfaces/animal.interface";
import UpdateAnimal from "./UpdateAnimal";
import { useModal } from "../../../../../hooks/useModal";

const UpdateAnimalModal = forwardRef<
  {
    setAnimal: Dispatch<SetStateAction<IAnimal | undefined>>;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<IAnimal>();

  useImperativeHandle(ref, () => ({
    setAnimal: setMutableData,
    handleOpen,
  }));

  //TODO get from main form mutated data to be sent to backend
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <UpdateAnimal animal={mutableData} handleClose={handleClose} />
    </BaseModal>
  );
});
export default UpdateAnimalModal;
