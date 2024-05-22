import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import CreateAnimal from "./CreateAnimal";

function CreateAnimalModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <CreateAnimal handleClose={handleClose} />
    </BaseModal>
  );
}

export default CreateAnimalModal;
