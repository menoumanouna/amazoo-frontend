import MainForm from "../../../../../components/Form/Main/MainForm";
import { useCreateServiceMutation } from "../../../../../redux/apis/services/service.api";
import { serviceInputInstance } from "../../shared/instances/service.input.instance";

function CreateService({ handleClose }: { handleClose: () => void }) {
  const [createService] = useCreateServiceMutation();

  const submit = async (object: any) => {
    try {
      await createService({
        name: object?.name,
        description: object?.description,
        horaire: object?.horaire,
        images: object?.image &&
          typeof object?.image !== "string" && [object?.image],
      }).unwrap();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const inputs = serviceInputInstance();
  return (
    <MainForm
      header={"Create service header"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default CreateService;
