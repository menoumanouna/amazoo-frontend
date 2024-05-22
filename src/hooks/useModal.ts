import { useState } from "react";

export const useModal = <T>(actions?: {
  onOpenModal?: () => void;
  onCloseModal?: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [mutableData, setMutableData] = useState<T>();
  const handleOpen = () => {
    actions?.onOpenModal?.();
    setOpen(true);
  };
  const handleClose = () => {
    actions?.onCloseModal?.();
    setOpen(false);
  };
  return { open, handleOpen, handleClose, mutableData, setMutableData };
};
