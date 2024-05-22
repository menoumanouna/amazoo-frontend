import BaseDialog from "../../../../../components/Modals/BaseDialog/BaseDialog";
import { useDeleteHabitatMutation } from "../../../../../redux/apis/habitat/habitat.api";
import { IHabitat } from "../../shared/interfaces/habitat.interface";

function DeleteHabitatModal({
  open,
  handleClose,
  dialogTitle,
  dialogContent,
  habitat,
}: {
  open: boolean;
  handleClose: () => void;
  dialogTitle: string;
  dialogContent: string;
  habitat?: IHabitat;
}) {
  const [deleteHabitat] = useDeleteHabitatMutation();
  const handleDelete = async () => {
    habitat?.id && (await deleteHabitat({ id: habitat?.id }).unwrap());
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

export default DeleteHabitatModal;
