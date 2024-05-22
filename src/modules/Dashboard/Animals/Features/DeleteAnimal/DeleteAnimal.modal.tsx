import BaseDialog from "../../../../../components/Modals/BaseDialog/BaseDialog";
import { useDeleteAnimalMutation } from "../../../../../redux/apis/animal/animal.api";
import { IAnimal } from "../../shared/interfaces/animal.interface";

function DeleteAnimalModal({
  open,
  handleClose,
  dialogTitle,
  dialogContent,
  animal,
}: {
  open: boolean;
  handleClose: () => void;
  dialogTitle: string;
  dialogContent: string;
  animal?: IAnimal;
}) {
  const [deleteAnimal] = useDeleteAnimalMutation();
  const handleDelete = async () => {
    animal?.id && (await deleteAnimal({ id: animal?.id }).unwrap());
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

export default DeleteAnimalModal;
