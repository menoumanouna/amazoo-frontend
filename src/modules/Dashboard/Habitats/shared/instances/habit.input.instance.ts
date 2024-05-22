import { BasicFormInput } from "../../../../../types/form-input.interface";
import { appendBaseUrl } from "../../../../../utils/helpers";

export const habitatInputInstance = (
  categoriesHabitat: unknown[],
  habitat?: unknown
): BasicFormInput[] => [
  {
    name: "name",
    label: "Nom de l'habitat",
    placeholder: "Nom de l'habitat",
    type: "text",
    defaultValue: habitat ? (habitat as any).name : "",
    rules: {
      required: {
        value: true,
        message: "Nom de l'habitat est requis",
      },
    },
  },
  {
    name: "description",
    label: "Description de l'habitat",
    defaultValue: habitat ? (habitat as any).description : "",
    placeholder: "Description de l'habitat",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "Description de l'habitat est requis",
      },
    },
  },
  {
    name: "categoryId",
    label: "Select category habitat",
    defaultValue: habitat ? (habitat as any).categoryId : "",
    placeholder: "Select category habitat",
    type: "selector",
    data: categoriesHabitat,
    rules: {},
  },
  {
    name: "image",
    label: "L'image de l'habitat",
    defaultValue:
      habitat && (habitat as any).images.length > 0
        ? appendBaseUrl((habitat as any).images?.[0])
        : "",
    placeholder: "Habitat upload",
    type: "file",
  },
];
