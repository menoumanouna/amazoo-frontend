import { BasicFormInput } from "../../../../../types/form-input.interface";
import { appendBaseUrl } from "../../../../../utils/helpers";

export const serviceInputInstance = (service?: unknown): BasicFormInput[] => [
  {
    name: "name",
    label: "Nom de service",
    placeholder: "Nom de service",
    type: "text",
    defaultValue: service ? (service as any).name : "",
    rules: {
      required: {
        value: true,
        message: "Le nom de service est obligatoire",
      },
    },
  },
  {
    name: "description",
    label: "Description de service",
    defaultValue: service ? (service as any).description : "",
    placeholder: "Description de service",
    type: "multiline",
  },
  {
    name: "horaire",
    label: "L'horaire de service",
    defaultValue: service ? (service as any).horaire : "",
    placeholder: "L'horaire de service",
    type: "text",
  },
  {
    name: "image",
    label: "Image du service",
    defaultValue:
      service && (service as any).images.length > 0
        ? appendBaseUrl((service as any).images?.[0])
        : "",
    placeholder: "L'image du service",
    type: "file",
  },
];
