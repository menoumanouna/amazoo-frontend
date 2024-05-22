import MainForm from "../../../../../components/Form/Main/MainForm";
import { useCreateHabitatMutation } from "../../../../../redux/apis/habitat/habitat.api";
import { habitatsCategories } from "../../shared/config/habitats.categories";
import { habitatInputInstance } from "../../shared/instances/habit.input.instance";

function CreateHabit({ handleClose }: { handleClose: () => void }) {
  const [createHabitat] = useCreateHabitatMutation();

  const submit = async (object: any) => {
    try {
      await createHabitat({
        name: object?.name,
        description: object?.description,
        categoryId: object?.categoryId,
        images: object?.image &&
          typeof object?.image !== "string" && [object?.image],
      }).unwrap();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const inputs = habitatInputInstance(habitatsCategories);
  return (
    <MainForm
      header={"Create habits header"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default CreateHabit;
