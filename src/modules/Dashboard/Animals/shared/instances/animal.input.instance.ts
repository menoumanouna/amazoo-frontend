import { BasicFormInput } from "../../../../../types/form-input.interface";
import { appendBaseUrl } from "../../../../../utils/helpers";

export const animalInputInstance = (
  categoriesHabitats: unknown[],
  animal?: unknown
): BasicFormInput[] => [
  {
    name: "name",
    label: "Nom de l'animal",
    placeholder: "Nom de l'animal",
    type: "text",
    defaultValue: animal ? (animal as any).name : "",
    rules: {
      required: {
        value: true,
        message: "Nom de l'animal est requis",
      },
    },
  },
  {
    name: "race",
    label: "La race de l'animal",
    defaultValue: animal ? (animal as any).race : "",
    placeholder: "La race de l'animal",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "La race de l'animal est requis",
      },
    },
  },
  {
    name: "habitId",
    label: "Select category habitat",
    defaultValue: animal ? (animal as any).habitatId : "",
    placeholder: "Select category habitat",
    type: "selector",
    data: categoriesHabitats,
    rules: {
      required: {
        value: true,
        message: "L'habitat de l'animal est requis",
      },
    },
  },
  {
    name: "image",
    label: "Animal image one",
    defaultValue:
      animal && (animal as any).images.length > 0
        ? appendBaseUrl((animal as any).images?.[0])
        : "",
    placeholder: "Animal image upload",
    type: "file",
  },
];
