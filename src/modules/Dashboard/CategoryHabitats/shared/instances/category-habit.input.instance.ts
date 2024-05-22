import { BasicFormInput } from "../../../../../types/form-input.interface";

export const categoryHabitatInputInstance = (
  categoryHabitat?: unknown
): BasicFormInput[] => [
  {
    name: "name",
    label: "Category habitat title",
    placeholder: "Category habitat title",
    type: "text",
    defaultValue: categoryHabitat ? (categoryHabitat as any).title : "",
    rules: {
      minLength: {
        value: 3,
        message: "Category habitat name must be at least 3 characters long",
      },
    },
  },
  {
    name: "description",
    label: "Category habitat description",
    defaultValue: categoryHabitat ? (categoryHabitat as any).description : "",
    placeholder: "Category habitat description",
    type: "text",
  },
  {
    name: "categoryHabitatImage",
    label: "Category habitat image",
    defaultValue: categoryHabitat ? (categoryHabitat as any).image : "",
    placeholder: "Category habitat upload",
    type: "file",
  },
];
