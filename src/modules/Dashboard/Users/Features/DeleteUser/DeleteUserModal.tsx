import BaseDialog from "../../../../../components/Modals/BaseDialog/BaseDialog";
import { useDeleteUserMutation } from "../../../../../redux/apis/users/user.api";
import { IUser } from "../../shared/interfaces/user.interface";

function DeleteUserModal({
  open,
  handleClose,
  dialogTitle,
  dialogContent,
  user,
}: {
  open: boolean;
  handleClose: () => void;
  dialogTitle: string;
  dialogContent: string;
  user?: IUser;
}) {
  const [deleteUser] = useDeleteUserMutation();
  const handleDelete = async () => {
    user?.id && (await deleteUser({ id: user?.id }).unwrap());
    handleClose();
  };
  return (
    <BaseDialog
      open={open}
      handleClose={handleClose}
      agreeAction={handleDelete}
      dialogTitle={dialogTitle}
      dialogContent={dialogContent}
    />
  );
}

export default DeleteUserModal;
