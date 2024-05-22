import { ReactNode, cloneElement, ReactElement, forwardRef } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import CloseIcon from "@mui/icons-material/Close";
interface FadeProps {
  children: ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {cloneElement(children, { onClick })}
    </animated.div>
  );
});

export default function BaseModal({
  children,
  open,
  padding,
  width,
  height,
  handleClose,
}: {
  children: ReactNode;
  open: boolean;
  handleClose: () => void;
  padding?: number | string;
  width?: number | string;
  height?: number | string;
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width ?? 400,
    height: height ?? "inherit",
    bgcolor: "background.paper",
    boxShadow: 20,
    p: padding ?? 4,
    borderRadius: 2,
  };
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <CloseIcon
            sx={{
              position: "absolute",
              top: 6,
              right: 7,
              fontSize: 17,
              cursor: "pointer",
            }}
            onClick={handleClose}
          />

          {children}
        </Box>
      </Fade>
    </Modal>
  );
}
