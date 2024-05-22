import BaseDialog from "../../../../../components/Modals/BaseDialog/BaseDialog";
import { useDeleteServiceMutation } from "../../../../../redux/apis/services/service.api";
import { IService } from "../../shared/interfaces/service.interface";

function DeleteServiceModal({
  open,
  handleClose,
  dialogTitle,
  dialogContent,
  service,
}: {
  open: boolean;
  handleClose: () => void;
  dialogTitle: string;
  dialogContent: string;
  service?: IService;
}) {
  const [deleteService] = useDeleteServiceMutation();
  const handleDelete = async () => {
    service?.id && (await deleteService({ id: service?.id }).unwrap());
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

export default DeleteServiceModal;
