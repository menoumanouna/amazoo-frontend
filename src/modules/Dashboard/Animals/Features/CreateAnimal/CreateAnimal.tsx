import { useEffect, useState } from "react";
import MainForm from "../../../../../components/Form/Main/MainForm";
import { useGetHabitatsQuery } from "../../../../../redux/apis/habitat/habitat.api";
import { animalInputInstance } from "../../shared/instances/animal.input.instance";
import { useCreateAnimalMutation } from "../../../../../redux/apis/animal/animal.api";

function CreateAnimal({ handleClose }: { handleClose: any }) {
  const [createAnimal] = useCreateAnimalMutation();
  const { data, isLoading } = useGetHabitatsQuery({
    page: 1,
    limit: 100,
  });

  const [habitats, setHabitats] = useState([]);

  const submit = async (object: any) => {
    try {
      await createAnimal({
        name: object?.name,
        race: object?.race,
        habitatId: object?.habitId,
        images: object?.image &&
          typeof object?.image !== "string" && [object?.image],
      }).unwrap();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLoading && data) {
      setHabitats(data.habitats);
    }
  }, [data, isLoading]);

  const inputs = animalInputInstance(habitats);
  return (
    <MainForm
      header={"Créer un animal"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default CreateAnimal;
