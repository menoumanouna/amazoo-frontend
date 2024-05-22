import { useEffect, useState } from "react";
import MainForm from "../../../../../components/Form/Main/MainForm";
import { animalInputInstance } from "../../shared/instances/animal.input.instance";
import { useGetHabitatsQuery } from "../../../../../redux/apis/habitat/habitat.api";
import { useUpdateAnimalMutation } from "../../../../../redux/apis/animal/animal.api";
import { IAnimal } from "../../shared/interfaces/animal.interface";

function UpdateService({
  animal,
  handleClose,
}: {
  animal?: IAnimal;
  handleClose: () => void;
}) {
  const [updateAnimal] = useUpdateAnimalMutation();

  const submit = async (object: any) => {
    try {
      animal?.id &&
        (await updateAnimal({
          id: animal?.id,
          name: object?.name,
          race: object?.race,
          habitatId: object?.habitId,
          images:
            object?.image && typeof object?.image !== "string"
              ? [object?.image]
              : undefined,
        }).unwrap());
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useGetHabitatsQuery({
    page: 1,
    limit: 100,
  });

  const [habitats, setHabitats] = useState([]);
  useEffect(() => {
    if (!isLoading && data) {
      setHabitats(data.habitats);
    }
  }, [data, isLoading]);

  const inputs = animalInputInstance(habitats, animal);
  return (
    <MainForm
      header={"Modifier un animal"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default UpdateService;
