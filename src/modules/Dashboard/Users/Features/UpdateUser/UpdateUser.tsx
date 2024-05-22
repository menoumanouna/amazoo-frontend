import MainForm from "../../../../../components/Form/Main/MainForm";
import { useUpdateUserMutation } from "../../../../../redux/apis/users/user.api";
import { userCategories } from "../../shared/config/user.categories";
import { userInputInstance } from "../../shared/instances/user.input.instance";
import { IUser } from "../../shared/interfaces/user.interface";

function UpdateUser({
  user,
  handleClose,
}: {
  user: IUser | undefined;
  handleClose: () => void;
}) {
  const [updateUser] = useUpdateUserMutation();

  const submit = async (object: any) => {
    try {
      user?.id &&
        (await updateUser({
          id: user?.id,
          firstname: object?.firstname,
          lastname: object?.lastname,
          email: object?.email,
          type: object?.type,
        }).unwrap());
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = userInputInstance(userCategories, user);
  return (
    <MainForm
      header={"Modifier un utilisateur"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default UpdateUser;
