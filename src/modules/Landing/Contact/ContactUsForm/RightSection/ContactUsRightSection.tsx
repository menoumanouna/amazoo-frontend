import { Stack } from "@mui/material";
import MainForm from "../../../../../components/Form/Main/MainForm";
import { BasicFormInput } from "../../../../../types/form-input.interface";
import { useSendContactMutation } from "../../../../../redux/apis/contact/contact.api";

function ContactUsRightSection({ handleClose }: { handleClose: () => void }) {
  const [sendContact] = useSendContactMutation();

  const submit = async (object: any) => {
    try {
      await sendContact({
        name: object?.name,
        email: object?.email,
        phoneNumber: object?.phoneNumber,
        description: object?.description,
      }).unwrap();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const inputs: BasicFormInput[] = [
    {
      name: "name",
      placeholder: "Entrez votre nom",
      type: "text",
      label: "Nom",
      variant: "standard",
    },
    {
      name: "email",
      placeholder: "Entrez votre addresse mail",
      type: "text",
      label: "Email",
      variant: "standard",
    },
    {
      name: "phoneNumber",
      placeholder: "Entrez votre numéro de telephone",
      type: "text",
      label: "Numéro de téléphone",
      variant: "standard",
    },
    {
      name: "description",
      placeholder: "Entrez votre description",
      type: "text",
      label: "Description",
      variant: "standard",
    },
  ];
  return (
    <Stack
      direction={"column"}
      flex={0.6}
      sx={{ px: 4, py: 4, height: "100%" }}
    >
      <MainForm
        submitTextButton="Envoyer"
        header={"Completez le formulaire ci-dessous pour nous contacter"}
        handleSubmit={submit}
        inputs={inputs}
        bodySpacing={8}
        inputSpacing={1}
        formSpacing={15}
        buttonWidth={80}
      />
    </Stack>
  );
}

export default ContactUsRightSection;
