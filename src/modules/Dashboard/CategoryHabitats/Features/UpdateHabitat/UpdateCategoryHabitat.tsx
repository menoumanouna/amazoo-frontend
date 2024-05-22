import MainForm from "../../../../../components/Form/Main/MainForm";
import { categoryHabitatInputInstance } from "../../shared/instances/category-habit.input.instance";

function UpdateCategoryHabitat({ habitat }: { habitat: unknown }) {
  const submit = (object: unknown) => {
    console.log(object);
  };
  const inputs = categoryHabitatInputInstance(habitat);
  return (
    <MainForm
      header={"Modifier habitat header"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default UpdateCategoryHabitat;
