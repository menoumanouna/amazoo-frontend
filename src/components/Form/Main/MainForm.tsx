import { Button, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { BasicFormInput } from "../../../types/form-input.interface";
import FormController from "../Controller/FormController";

function MainForm({
  header,
  handleSubmit,
  inputs,
  submitTextButton,
  buttonWidth,
  bodySpacing,
  formSpacing,
  inputSpacing,
}: {
  header: string;
  inputs: BasicFormInput[];
  handleSubmit: (...args: any[]) => void | Promise<void>;
  buttonWidth?: number;
  submitTextButton?: string;
  bodySpacing?: number;
  formSpacing?: number;
  inputSpacing?: number;
}) {
  const { ...methods } = useForm({
    mode: "all",
    shouldFocusError: true,
  });

  const { handleSubmit: submit } = methods;

  return (
    <FormProvider {...methods}>
      <Stack spacing={bodySpacing ?? 2}>
        <Typography variant="h4" textAlign={"center"}>
          {header}
        </Typography>
        <Stack spacing={formSpacing ?? 2}>
          <Stack spacing={inputSpacing ?? 2}>
            {inputs.map((input, index) => {
              return <FormController key={index} input={input} />;
            })}
          </Stack>
          <Stack direction={"row"} justifyContent={"space-around"}>
            <Button
              variant="contained"
              onClick={submit(handleSubmit)}
              sx={{ width: buttonWidth ? `${buttonWidth}%` : "100%" }}
            >
              {submitTextButton ?? "Soumettre"}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

export default MainForm;
