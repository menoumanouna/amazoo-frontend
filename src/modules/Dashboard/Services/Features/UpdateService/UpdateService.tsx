import MainForm from "../../../../../components/Form/Main/MainForm";
import { useUpdateServiceMutation } from "../../../../../redux/apis/services/service.api";
import { serviceInputInstance } from "../../shared/instances/service.input.instance";
import { IService } from "../../shared/interfaces/service.interface";

function UpdateService({
  service,
  handleClose,
}: {
  service: IService | undefined;
  handleClose: () => void;
}) {
  const [updateService] = useUpdateServiceMutation();

  const submit = async (object: any) => {
    try {
      service?.id &&
        (await updateService({
          id: service?.id,
          name: object?.name,
          description: object?.description,
          horaire: object?.horaire,
          images: object?.image &&
            typeof object?.image !== "string" && [object?.image],
        }).unwrap());
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const inputs = serviceInputInstance(service);
  return (
    <MainForm
      header={"Modifier un service"}
      handleSubmit={submit}
      inputs={inputs}
    />
  );
}

export default UpdateService;
