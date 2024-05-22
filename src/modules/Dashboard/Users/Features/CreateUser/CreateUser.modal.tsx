import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import CreateService from "./CreateUser";

function CreateHabitModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <CreateService handleClose={handleClose} />
    </BaseModal>
  );
}

export default CreateHabitModal;
