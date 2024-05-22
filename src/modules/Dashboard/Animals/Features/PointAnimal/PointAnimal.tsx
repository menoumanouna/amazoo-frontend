import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import MainForm from "../../../../../components/Form/Main/MainForm";
import { IAnimal } from "../../shared/interfaces/animal.interface";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import {
  useCreateReportMutation,
  useGetReportsQuery,
} from "../../../../../redux/apis/points/point.api";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../../redux/hooks/useAppRTK";
import { pointInputs } from "./point.inputs";
import { BasicFormInput } from "../../../../../types/form-input.interface";

function PointAnimal({
  animal,
  history,
  handleClose,
}: {
  handleClose: () => void;
  animal?: IAnimal;
  history?: {
    id: number;
    reference: string;
    date: Date;
    etat: string;
    nourriture: string;
    grammage: string;
    details: string;
  }[];
}) {
  const { data: historiesApi, isLoading } = useGetReportsQuery({
    animal_id: animal?.id,
  });
  const [inputs] = useState<BasicFormInput[]>(pointInputs);
  const [createPont] = useCreateReportMutation();
  const currentUser = useAppSelector((state) => state.auth.user);
  const submit = async (object: any) => {
    try {
      if (currentUser && animal) {
        await createPont({
          animal: animal.id!,
          etat: object.etat,
          details: object.details,
          nourriture: object.nourriture,
          grammage: object.grammage,
          veterinaire: currentUser.id,
        }).unwrap();
        setTimeout(() => {
          handleClose();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!isLoading && historiesApi) {
      setHistories(historiesApi.reports);
    }
  }, [historiesApi, isLoading]);

  const [histories, setHistories] = useState<any>([]);
  return (
    <Stack direction={"row"} maxHeight={500}>
      <Stack flex={0.5} spacing={2}>
        <Typography variant="h4" textAlign={"center"}>
          Historiques des points
        </Typography>
        <Stack overflow={"auto"}>
          {histories &&
            histories.map((point, index) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Stack direction="row" spacing={2}>
                      <Typography>
                        {new Date(point.date).toDateString()}
                      </Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      direction={"row"}
                      alignItems={"start"}
                      spacing={0.375}
                    >
                      <Typography variant="body1">{"Etat:"}</Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          overflowY: "auto",
                          textOverflow: "ellipsis",
                          maxHeight: "3rem",
                        }}
                      >
                        {point.etat}
                      </Typography>
                    </Stack>
                    <Stack
                      flex={0.3}
                      direction={"row"}
                      alignItems={"start"}
                      spacing={0.375}
                    >
                      <Typography variant="body1">{"Détails:"}</Typography>
                      <Typography
                        flex={0.7}
                        variant="body2"
                        sx={{
                          overflowY: "auto",
                          textOverflow: "ellipsis",
                          maxHeight: "3rem",
                        }}
                      >
                        {point.details}
                      </Typography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      alignItems={"start"}
                      spacing={0.375}
                    >
                      <Typography variant="body1">{"Nourriture:"}</Typography>
                      <Typography variant="body2">
                        {point.nourriture}
                      </Typography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={0.375}
                    >
                      <Typography variant="body1">{"Grammage:"}</Typography>
                      <Typography variant="body2">{point.grammage}</Typography>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              );
            })}
        </Stack>
      </Stack>
      <Divider orientation={"vertical"} sx={{ mx: 1 }} />
      <Stack flex={0.5}>
        <MainForm
          header={"Compte rendu"}
          handleSubmit={submit}
          inputs={inputs}
        />
      </Stack>
    </Stack>
  );
}

export default PointAnimal;
