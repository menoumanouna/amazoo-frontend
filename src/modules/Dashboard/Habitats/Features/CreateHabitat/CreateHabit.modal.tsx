import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import CreateHabitat from "./CreateHabit";

function CreateHabitModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <CreateHabitat handleClose={handleClose} />
    </BaseModal>
  );
}

export default CreateHabitModal;
