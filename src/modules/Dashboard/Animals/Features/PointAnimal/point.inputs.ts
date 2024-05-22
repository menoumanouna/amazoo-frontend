import { BasicFormInput } from "../../../../../types/form-input.interface";

export const pointInputs: BasicFormInput[] = [
  {
    name: "name",
    label: "Reference de compte rendu",
    placeholder: "Refenrece de compte rendu",
    type: "text",
    defaultValue: "",
  },
  {
    name: "etat",
    label: "Etat de l'animal",
    defaultValue: "",
    placeholder: "Etat de l'animal",
    type: "text",
    rules: {
      required: "Etat de l'animal is required",
    },
  },
  {
    name: "nourriture",
    label: "Nourriture de l'animal",
    defaultValue: "",
    placeholder: "nourriture de l'animal",
    type: "multiline",
    rows: 2,
  },
  {
    name: "grammage",
    label: "Grammage de l'animal",
    defaultValue: "",
    placeholder: "Grammage de l'animal",
    type: "multiline",
    rows: 2,
  },
  {
    name: "details",
    label: "Avis",
    defaultValue: "",
    placeholder: "Avis",
    type: "multiline",
    rows: 2,
    rules: {
      required: "Details is required",
    },
  },
];
