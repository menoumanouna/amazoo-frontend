import BaseDialog from "../../../../../components/Modals/BaseDialog/BaseDialog";
import { ICategoryHabitat } from "../../shared/interfaces/category-habitat.interface";

function DeleteCategoryHabitatModal({
  open,
  handleClose,
  dialogTitle,
  dialogContent,
  categoryHabitat,
}: {
  open: boolean;
  handleClose: () => void;
  dialogTitle: string;
  dialogContent: string;
  categoryHabitat?: ICategoryHabitat;
}) {
  //TODO:: delete service from backend
  const handleDelete = () => {
    alert(`Category habitat ${categoryHabitat?.title} deleted successfully`);
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

export default DeleteCategoryHabitatModal;
