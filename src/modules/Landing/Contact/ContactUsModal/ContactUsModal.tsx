import BaseModal from "../../../../components/Modals/BaseModal/BaseModal";
import ContactUs from "../ContactUsForm/ContactUs";

function ContactUsModal({
  handleClose,
  open,
}: {
  handleClose: () => void;
  open: boolean;
}) {
  return (
    <BaseModal handleClose={handleClose} open={open} padding={0} width={1000}>
      <ContactUs handleClose={handleClose} />
    </BaseModal>
  );
}

export default ContactUsModal;
