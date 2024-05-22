import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
} from "react";
import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import { IService } from "../../shared/interfaces/service.interface";
import UpdateService from "./UpdateService";
import { useModal } from "../../../../../hooks/useModal";

const UpdateServiceModal = forwardRef<
  {
    setService: Dispatch<SetStateAction<IService | undefined>>;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<IService>();

  useImperativeHandle(ref, () => ({
    setService: setMutableData,
    handleOpen,
  }));

  //TODO get from main form mutated data to be sent to backend
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <UpdateService service={mutableData} handleClose={handleClose} />
    </BaseModal>
  );
});
export default UpdateServiceModal;
