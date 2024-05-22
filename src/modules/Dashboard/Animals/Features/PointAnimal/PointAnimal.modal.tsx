import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
} from "react";
import BaseModal from "../../../../../components/Modals/BaseModal/BaseModal";
import { IAnimal } from "../../shared/interfaces/animal.interface";
import { useModal } from "../../../../../hooks/useModal";
import PointAnimal from "./PointAnimal";

const PointAnimalModal = forwardRef<
  {
    setAnimal: Dispatch<
      SetStateAction<
        | {
            animal: IAnimal;
            history: {
              id: number;
              reference: string;
              date: Date;
              etat: string;
              nourriture: string;
              grammage: string;
              details: string;
            }[];
          }
        | undefined
      >
    >;
    handleOpen: () => void;
  },
  {}
>(({}: {}, ref) => {
  const { open, handleClose, handleOpen, mutableData, setMutableData } =
    useModal<{
      animal: IAnimal;
      history: {
        id: number;
        date: Date;
        reference: string;
        etat: string;
        nourriture: string;
        grammage: string;
        details: string;
      }[];
    }>();

  useImperativeHandle(ref, () => ({
    setAnimal: setMutableData,
    handleOpen,
  }));

  //TODO get from main form mutated data to be sent to backend
  return (
    <BaseModal width={700} open={open} handleClose={handleClose}>
      <PointAnimal
        animal={mutableData?.animal}
        history={mutableData?.history}
        handleClose={handleClose}
      />
    </BaseModal>
  );
});
export default PointAnimalModal;
