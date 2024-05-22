import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useModal } from "../../../../hooks/useModal";
import BaseModal from "../../../../components/Modals/BaseModal/BaseModal";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import ImageHolder from "../../../../components/ImageHolder/ImageHolder";
import { useGetReportsQuery } from "../../../../redux/apis/points/point.api";
import { useSetViewMutation } from "../../../../redux/apis/views/view.api";
import dayjs from "dayjs";

const AnimalDetailsModal = forwardRef<
  {
    setAnimalDetail: (animal: any) => void;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<any>();

  const [setView] = useSetViewMutation();
  const setAnimal = async (animal: any) => {
    try {
      animal?.animalId && (await setView(animal?.animalId).unwrap());
    } catch (error) {
      console.log(error);
    }
    setMutableData(animal);
  };
  useImperativeHandle(ref, () => ({
    setAnimalDetail: setAnimal,
    handleOpen,
  }));
  const theme = useTheme();

  const [animalDetails, setAnimalDetails] = useState<{
    id?: number;
    etat?: string;
    details?: string;
    nourriture?: string;
    grammage?: string;
    date?: string;
    reference?: string;
    animal?: any;
  }>({
    etat: "",
    details: "",
    nourriture: "",
    grammage: "",
    date: "",
    reference: "",
    animal: {},
  });
  const { data: reportData, isLoading } = useGetReportsQuery({
    animal_id: mutableData?.animalId,
  });

  useEffect(() => {
    if (reportData && !isLoading) {
      if (reportData.reports.length > 0) {
        // let reports = [];
        // reportData.reports.map((report) => {
        //   if (report.animal.id === mutableData?.animalId) {
        //     reports.push(report);
        //   }
        // });
        setAnimalDetails(reportData.reports[0]);
      }
    }
  }, [reportData, isLoading, mutableData]);
  return (
    <BaseModal
      open={open}
      handleClose={handleClose}
      width={"67%"}
      height={"75%"}
      padding={0}
    >
      <Stack direction={"row"} height={"100%"} width={"100%"}>
        <Stack flex={0.5}>
          <ImageHolder
            imageurl={mutableData?.src}
            topradius={0}
            width={"100%"}
            height={"100%"}
            withoutMargin
            borderRadius={2}
          />
        </Stack>
        <Stack flex={0.5}>
          <Stack direction={"column"} py={10} pl={5} spacing={2}>
            <Stack spacing={2}>
              <Typography
                variant={"body1"}
                color={theme.palette.action.active}
                onClick={handleClose}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {"<< "}
                {mutableData?.habitatTitle}
              </Typography>
              <Typography variant={"h4"}>{mutableData?.animalTitle}</Typography>
              <Typography
                variant={"body2"}
                sx={{
                  overflowY: "scroll",
                  textOverflow: "ellipsis",
                  maxHeight: "3rem",
                  width: "90%",
                }}
              >
                {mutableData?.animalDescription}
              </Typography>
            </Stack>
            <Divider color={theme.palette.text.primary} sx={{ width: "85%" }} />
            <Typography variant={"h4"}>Avis de vétérinaire</Typography>
            <Stack>
              <Stack
                width={"85%"}
                borderRadius={1}
                sx={{ backgroundColor: theme.palette.primary.light }}
                direction={"row"}
                alignItems={"center"}
                padding={0.5}
                spacing={2}
              >
                <Typography flex={0.5} variant={"body1"} pl={2}>
                  Etat de l'animal
                </Typography>
                <Typography flex={0.5} variant={"body2"}>
                  {animalDetails?.etat}
                </Typography>
              </Stack>
              <Stack
                width={"85%"}
                borderRadius={1}
                direction={"row"}
                alignItems={"center"}
                padding={0.5}
                spacing={2}
              >
                <Typography flex={0.5} variant={"body1"} pl={2}>
                  Nourriture proposée
                </Typography>
                <Typography flex={0.5} variant={"body2"}>
                  {animalDetails?.nourriture}
                </Typography>
              </Stack>
              <Stack
                width={"85%"}
                borderRadius={1}
                sx={{ backgroundColor: theme.palette.primary.light }}
                direction={"row"}
                alignItems={"center"}
                padding={0.5}
                spacing={2}
              >
                <Typography flex={0.5} variant={"body1"} pl={2}>
                  Grammage
                </Typography>
                <Typography flex={0.5} variant={"body2"}>
                  {animalDetails?.grammage}
                </Typography>
              </Stack>
              <Stack
                width={"85%"}
                borderRadius={1}
                direction={"row"}
                alignItems={"center"}
                padding={0.5}
                spacing={2}
              >
                <Typography flex={0.5} variant={"body1"} pl={2}>
                  Date de passage
                </Typography>
                <Typography flex={0.5} variant={"body2"}>
                  {animalDetails.date
                    ? dayjs(animalDetails.date).format("DD/MM/YYYY")
                    : dayjs().format("DD/MM/YYYY")}
                </Typography>
              </Stack>
              <Stack
                width={"85%"}
                borderRadius={1}
                sx={{ backgroundColor: theme.palette.primary.light }}
                direction={"row"}
                alignItems={"center"}
                padding={0.5}
                spacing={2}
              >
                <Typography flex={0.5} variant={"body1"} pl={2}>
                  Détail
                </Typography>
                <Typography flex={0.5} variant={"body2"}>
                  {animalDetails?.details}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </BaseModal>
  );
});
export default AnimalDetailsModal;
