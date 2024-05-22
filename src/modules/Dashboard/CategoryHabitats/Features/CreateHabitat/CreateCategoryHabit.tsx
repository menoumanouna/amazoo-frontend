import MainForm from "../../../../../components/Form/Main/MainForm";
import { categoryHabitatInputInstance } from "../../shared/instances/category-habit.input.instance";

function CreateCategoryHabit() {
  const submit = (object: unknown) => {
    console.log(object);
  };
  const inputs = categoryHabitatInputInstance();
  return (
    <MainForm
      header={"Create category habits header"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default CreateCategoryHabit;
