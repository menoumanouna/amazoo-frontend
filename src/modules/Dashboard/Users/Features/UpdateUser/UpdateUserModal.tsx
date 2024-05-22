import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
} from "react";
import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import { useModal } from "../../../../../hooks/useModal";
import { IUser } from "../../shared/interfaces/user.interface";
import UpdateUser from "./UpdateUser";

const UpdateServiceModal = forwardRef<
  {
    setUser: Dispatch<SetStateAction<IUser | undefined>>;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<IUser>();

  useImperativeHandle(ref, () => ({
    setUser: setMutableData,
    handleOpen,
  }));

  return (
    <BaseModal open={open} handleClose={handleClose}>
      <UpdateUser user={mutableData} handleClose={handleClose} />
    </BaseModal>
  );
});
export default UpdateServiceModal;
