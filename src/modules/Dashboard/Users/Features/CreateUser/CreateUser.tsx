import MainForm from "../../../../../components/Form/Main/MainForm";
import { useCreateUserMutation } from "../../../../../redux/apis/users/user.api";
import { userCategories } from "../../shared/config/user.categories";
import { userInputInstance } from "../../shared/instances/user.input.instance";

function CreateHabit({ handleClose }: { handleClose: () => void }) {
  const [createUser] = useCreateUserMutation();

  const submit = async (object: any) => {
    try {
      await createUser({
        firstname: object?.firstname,
        lastname: object?.lastname,
        email: object?.email,
        password: object?.password,
        type: object?.type,
      }).unwrap();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = userInputInstance(userCategories);
  return (
    <MainForm
      header={"Créer un utilisateur"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default CreateHabit;
