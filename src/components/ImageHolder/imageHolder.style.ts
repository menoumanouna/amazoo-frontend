import { Box, styled } from "@mui/material";

export const ImageContainer = styled(Box)<{
  imageurl: string;
  withgradient?: string;
}>(({ theme, ...props }) => ({
  background:
    props.withgradient === "true"
      ? `linear-gradient(to top,rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imageurl})`
      : `url(${props.imageurl})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const Image = styled(ImageContainer)<{
  imageurl: string;
  topradius?: string | number;
  height?: string | number;
  width?: string | number;
  singleimage?: string;
  withoutmargin?: string;
  borderradius?: string | number;
  withcarousel?: string;
}>(({ theme, ...props }) => ({
  backgroundSize: "cover",
  height: `${props.height ? `${props.height}` : "250px"}`,
  width: `${props.width ? `${props.width}` : "200px"}`,
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  margin:
    props.withcarousel === "true"
      ? "0 auto"
      : props.withoutmargin === "true"
        ? 0
        : "10px",
  marginTop:
    props.withcarousel === "true"
      ? "0"
      : props.singleimage === "true"
        ? "1%"
        : 0,
  borderRadius: `${props.borderradius ? `${props.borderradius}%` : "none"}`,
  borderTopLeftRadius: `${props.topradius ? `${props.topradius}%` : "none"}`,
  borderTopRightRadius: `${props.topradius ? `${props.topradius}%` : "none"}`,
}));

export const ImageHolderContainer = styled(ImageContainer)<{
  imageurl: string;
  backgroundColor?: string;
  withgradient?: string;
}>(({ theme, ...props }) => ({
  backgroundSize: "cover",
  backgroundColor: `${props.backgroundColor ? `${props.backgroundColor}` : "transparent"}`,
  height: "100vh",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  scrollSnapAlign: "start",
}));
