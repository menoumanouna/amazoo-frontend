import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import CreateCategoryHabit from "./CreateCategoryHabit";

function CreateCategoryHabitatModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <CreateCategoryHabit />
    </BaseModal>
  );
}

export default CreateCategoryHabitatModal;
