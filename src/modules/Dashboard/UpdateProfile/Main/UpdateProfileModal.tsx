import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useModal } from "../../../../hooks/useModal";
import BaseModal from "../../../../components/Modals/BaseModal/BaseModal";
import UpdateProfile from "./UpdateProfile";
const UpdateServiceModal = forwardRef<
  {
    setCurrentUser: Dispatch<SetStateAction<any | undefined>>;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<any>();

  useImperativeHandle(ref, () => ({
    setCurrentUser: setMutableData,
    handleOpen,
  }));

  //TODO get from main form mutated data to be sent to backend
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <UpdateProfile currentUser={mutableData} />
    </BaseModal>
  );
});
export default UpdateServiceModal;
