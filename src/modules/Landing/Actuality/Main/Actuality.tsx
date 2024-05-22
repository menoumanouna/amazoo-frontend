import LandingCard from "../../../../components/LandingCard/LandingCard";
import { Stack } from "@mui/material";
import FeedBack from "../FeedBack/FeedBack";

function Actualities({ actualities }: { actualities: any[] }) {
  return (
    <Stack>
      {actualities.map((actuality) => {
        return <LandingCard key={actuality.title} {...actuality} />;
      })}
      <FeedBack />
    </Stack>
  );
}

export default Actualities;
