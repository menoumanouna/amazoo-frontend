import MainForm from "../../../../../components/Form/Main/MainForm";
import { useUpdateHabitatMutation } from "../../../../../redux/apis/habitat/habitat.api";
import { habitatsCategories } from "../../shared/config/habitats.categories";
import { habitatInputInstance } from "../../shared/instances/habit.input.instance";
import { IHabitat } from "../../shared/interfaces/habitat.interface";

function UpdateHabitat({
  habitat,
  handleClose,
}: {
  habitat: IHabitat | undefined;
  handleClose: () => void;
}) {
  const [updateHabitat] = useUpdateHabitatMutation();

  const submit = async (object: any) => {
    try {
      habitat?.id &&
        (await updateHabitat({
          id: habitat?.id,
          name: object?.name,
          description: object?.description,
          categoryId: object?.categoryId,
          images: object?.image &&
            typeof object?.image !== "string" && [object?.image],
        }).unwrap());
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = habitatInputInstance(habitatsCategories, habitat);
  return (
    <MainForm
      header={"Modifier un habitat"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default UpdateHabitat;
