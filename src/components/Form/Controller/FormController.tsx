import { Stack, TextField, Typography } from "@mui/material";
import {
  BasicFormInput,
  TFormInput,
  TFormInputs,
} from "../../../types/form-input.interface";
import { Controller, useFormContext } from "react-hook-form";
import { ReactElement } from "react";
import ImageUpload from "../../ImageUpload/ImageUpload";
import Selector from "../../Selector/Selector";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const TextHolder = ({
  errorMessage,
  children,
}: {
  errorMessage: string;
  children: ReactElement;
}) => {
  return (
    <Stack>
      {children}
      <Typography variant="body2" fontSize={"0.75rem"} color={"error"}>
        {errorMessage ? errorMessage : ""}
      </Typography>
    </Stack>
  );
};
function FormController({ input }: { input: BasicFormInput }) {
  const { control } = useFormContext();

  const hasElements = !!(input as TFormInputs).elements;
  const renderElement = ({
    field,
    fieldState,
    defaultChecked,
    label,
    placeholder,
    type,
    variant,
    defaultValue,
    data,
    popperPlacement,
    rows,
    disabled,
  }: any) => {
    switch (type) {
      case "text":
        return (
          <TextHolder errorMessage={fieldState.error?.message}>
            <TextField
              variant={variant ?? "outlined"}
              value={field.value}
              onChange={field.onChange}
              error={!!fieldState.error}
              label={label}
              size="small"
              defaultChecked={defaultChecked}
              placeholder={placeholder}
              fullWidth
              disabled={disabled}
            />
          </TextHolder>
        );
      case "file":
        return (
          <TextHolder errorMessage={fieldState.error?.message}>
            <ImageUpload
              onUpload={(file) => {
                field.onChange(file);
              }}
              imageUrl={defaultValue}
            />
          </TextHolder>
        );
      case "selector":
        return (
          <TextHolder errorMessage={fieldState.error?.message}>
            <Selector
              error={!!fieldState.error}
              field={field}
              defaultValue={defaultValue}
              data={data}
              disabled={disabled}
              label={label}
            />
          </TextHolder>
        );
      case "multiline":
        return (
          <TextHolder errorMessage={fieldState.error?.message}>
            <TextField
              variant={variant ?? "outlined"}
              value={field.value}
              onChange={field.onChange}
              error={!!fieldState.error}
              label={label}
              size="small"
              defaultChecked={defaultChecked}
              placeholder={placeholder}
              fullWidth
              multiline
              disabled={disabled}
              rows={rows ?? 2}
            />
          </TextHolder>
        );
      case "datepicker":
        return (
          <TextHolder errorMessage={fieldState.error?.message}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                onChange={field.onChange}
                defaultValue={defaultValue === "" ? undefined : defaultValue}
                label={label}
                disabled={disabled}
                orientation="landscape"
                slotProps={{
                  popper: {
                    placement: popperPlacement,
                  },
                }}
              />
            </LocalizationProvider>
          </TextHolder>
        );

      default:
        return (
          <TextHolder errorMessage={fieldState.error?.message}>
            <TextField
              value={field.value}
              onChange={field.onChange}
              size="small"
              error={!!fieldState.error}
              defaultChecked={defaultChecked}
              placeholder={placeholder}
              fullWidth
              variant={variant ?? "outlined"}
            />
          </TextHolder>
        );
    }
  };
  if (hasElements) {
    const { elements, direction, spacing } = input as TFormInputs;
    return (
      <Stack
        direction={direction ?? "row"}
        spacing={spacing ?? 1}
        justifyContent={
          !spacing
            ? elements.length > 1
              ? "space-between"
              : "space-around"
            : "flex-start"
        }
      >
        {elements.map((element, index) => {
          const {
            defaultValue,
            name,
            label,
            type,
            placeholder,
            rules,
            variant,
            data,
            popperPlacement,
            rows,
            disabled,
          } = element;
          console.log(name);
          return (
            <Controller
              key={name + index}
              name={name}
              rules={{
                ...rules,
              }}
              defaultValue={defaultValue || ""}
              render={({ field, fieldState }) =>
                renderElement({
                  field,
                  fieldState,
                  defaultValue,
                  label,
                  placeholder,
                  type,
                  variant,
                  data,
                  popperPlacement,
                  rows,
                  disabled,
                })
              }
            />
          );
        })}
      </Stack>
    );
  } else {
    const {
      name,
      label,
      placeholder,
      defaultValue,
      type,
      rules,
      variant,
      data,
      popperPlacement,
      rows,
      disabled,
    } = input as TFormInput;
    return (
      <Controller
        name={name}
        rules={{
          ...rules,
        }}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field, fieldState }) =>
          renderElement({
            field,
            fieldState,
            defaultValue,
            label,
            placeholder,
            type,
            variant,
            data,
            popperPlacement,
            rows,
            disabled,
          })
        }
      />
    );
  }
}

export default FormController;
