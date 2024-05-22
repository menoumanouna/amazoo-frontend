import { Rating, RatingProps } from "@mui/material";

function RatingBar(props: RatingProps) {
  return <Rating name="simple-controlled" {...props} />;
}

export default RatingBar;
