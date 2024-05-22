import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useModal } from "../../../../hooks/useModal";
import BaseModal from "../../../../components/Modals/BaseModal/BaseModal";
import { Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ImageHolder from "../../../../components/ImageHolder/ImageHolder";
import AnimalDetailsModal from "../AnimalDetail/AnimalDetailsModal";

const HabitatDetailModal = forwardRef<
  {
    setHabitat: Dispatch<SetStateAction<any>>;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<any>();

  useImperativeHandle(ref, () => ({
    setHabitat: setMutableData,
    handleOpen,
  }));

  const animalDetailModal = useRef<{
    setAnimalDetail: Dispatch<SetStateAction<any>>;
    handleOpen: () => void;
  }>(null);
  const handleOpenAnimalDetailModal = (data: any) => {
    return () => {
      animalDetailModal.current?.setAnimalDetail(data);
      animalDetailModal.current?.handleOpen();
    };
  };

  //TODO get from main form mutated data to be sent to backend
  return (
    <>
      <BaseModal
        open={open}
        handleClose={handleClose}
        width={700}
        padding={"50px 50px 10px 50px"}
      >
        <Stack spacing={3}>
          <Stack spacing={2}>
            <Typography variant={"h3"}>{mutableData?.title}</Typography>
            <Typography variant={"body1"}>
              {mutableData?.description}
            </Typography>
          </Stack>
          <Carousel strictIndexing>
            {mutableData?.images.map((image: any, index: number) => (
              <Stack
                key={index}
                direction={"row"}
                justifyContent={"center"}
                sx={{ cursor: "pointer" }}
                onClick={handleOpenAnimalDetailModal(image)}
              >
                <Stack
                  direction={"column"}
                  spacing={2}
                  justifyContent={"center"}
                >
                  <ImageHolder imageurl={image.src} />
                  <Typography variant={"h3"} textAlign={"center"}>
                    {image.alt}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Carousel>
        </Stack>
      </BaseModal>
      <AnimalDetailsModal ref={animalDetailModal} />
    </>
  );
});
export default HabitatDetailModal;
