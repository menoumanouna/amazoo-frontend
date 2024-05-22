import { BasicFormInput } from "../../../../../types/form-input.interface";

export const userInputInstance = (
  categoriesUser: unknown[],
  user?: unknown
): BasicFormInput[] => [
  {
    name: "type",
    label: "Sélectionner le type de l'utilisateur",
    defaultValue: user ? (user as any).type : "",
    disabled: !!user,
    placeholder: "Sélectionner le type de l'utilisateur",
    type: "selector",
    data: categoriesUser,
    rules: {
      required: {
        value: true,
        message: "Le type de l'utilisateur est requis",
      },
    },
  },
  {
    name: "email",
    label: "L'email de l'utilisateur",
    defaultValue: user ? (user as any).email : "",
    placeholder: "Entrez l'email de l'utilisateur",
    type: "text",
    rules: {
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: "Format de l'email est invalide",
      },
      required: {
        value: true,
        message: "L'email est requis",
      },
    },
  },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "Entrez le mot de passe",
    type: "text",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Mot de passe obligatoire",
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        message: "Merci de choisir un mot de passe plus fort",
      },
    },
  },
  {
    name: "firstname",
    label: "Prénom de l'utilisateur",
    placeholder: "Entrez le prénom de l'utilisateur",
    type: "text",
    defaultValue: user ? (user as any).firstname : "",
  },
  {
    name: "lastname",
    label: "Nom de l'utilisateur",
    placeholder: "Entrez le nom de l'utilisateur",
    type: "text",
    defaultValue: user ? (user as any).lastname : "",
  },
];
