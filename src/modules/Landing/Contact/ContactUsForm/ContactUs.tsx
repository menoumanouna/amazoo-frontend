import { Stack } from "@mui/material";
import ContactUsLeftSection from "./LeftSection/ContactUsLeftSection";
import ContactUsRightSection from "./RightSection/ContactUsRightSection";
function ContactUs({ handleClose }: { handleClose: () => void }) {
  return (
    <Stack direction={"row"}>
      <ContactUsLeftSection />
      <ContactUsRightSection handleClose={handleClose} />
    </Stack>
  );
}

export default ContactUs;
