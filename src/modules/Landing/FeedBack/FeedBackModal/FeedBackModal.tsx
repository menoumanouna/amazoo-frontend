import BaseModal from "../../../../components/Modals/BaseModal/BaseModal";
import FeedBackForm from "../FeedBackForm/FeedBackForm";

function FeedBackModal({
  handleClose,
  open,
}: {
  handleClose: () => void;
  open: boolean;
}) {
  return (
    <BaseModal handleClose={handleClose} open={open} padding={0} width={1000}>
      <FeedBackForm />
    </BaseModal>
  );
}

export default FeedBackModal;
