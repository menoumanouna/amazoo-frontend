import { ReactElement, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useTheme } from "@mui/material";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BaseDialog({
  open,
  handleClose,
  dialogTitle,
  dialogContent,
  agreeAction,
  children,
}: {
  open: boolean;
  handleClose: () => void;
  dialogTitle: string;
  dialogContent: string;
  agreeAction?: () => void;
  children?: ReactElement;
}) {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        {children ? (
          children
        ) : (
          <DialogContentText id="alert-dialog-slide-description">
            {dialogContent}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Annuler
        </Button>
        <Button
          sx={{ color: theme.palette.secondary.dark }}
          onClick={agreeAction ?? handleClose}
        >
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
