import { Stack } from "@mui/material";
import MainForm from "../../../../../components/Form/Main/MainForm";
import { BasicFormInput } from "../../../../../types/form-input.interface";

function FeedBackRightSection({
  handleSubmit,
}: {
  handleSubmit: (data: any) => void;
}) {
  const inputs: BasicFormInput[] = [
    {
      name: "name",
      placeholder: "Entrez votre pseudo",
      type: "text",
      label: "Pseudo",
      variant: "standard",
    },
    {
      name: "title",
      placeholder: "Entrez le title de votre avis",
      type: "text",
      label: "Titre Avis",
      variant: "standard",
    },
    {
      name: "desciption",
      placeholder: "Entrez votre avis",
      type: "text",
      label: "Avis",
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
        header={"Soumettre un avis"}
        handleSubmit={handleSubmit}
        inputs={inputs}
        bodySpacing={8}
        inputSpacing={1}
        formSpacing={15}
        buttonWidth={80}
      />
    </Stack>
  );
}

export default FeedBackRightSection;
