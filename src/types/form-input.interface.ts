import { TextFieldVariants } from "@mui/material";
import { RegisterOptions } from "react-hook-form";

export type TFormInput = {
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string | number;
  defaultChecked?: boolean;
  type: "text" | "selector" | "file" | "multiline" | "datepicker";
  rules?: RegisterOptions;
  variant?: TextFieldVariants;
  data?: unknown[];
  rows?: number;
  disabled?: boolean;
  popperPlacement?:
    | "bottom-start"
    | "bottom"
    | "bottom-end"
    | "right"
    | "left"
    | "top"
    | "top-start"
    | "top-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";
};

export type TFormInputs = {
  spacing?: number;
  direction?: "row" | "column";
  elements: TFormInput[];
};
export type BasicFormInput = TFormInputs | TFormInput;
