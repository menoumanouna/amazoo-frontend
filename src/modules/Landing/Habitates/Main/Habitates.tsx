import LandingCard from "../../../../components/LandingCard/LandingCard";
import { Stack } from "@mui/material";

function Useres({ habitates }: { habitates: any[] }) {
  return (
    <Stack>
      {habitates.map((habitate) => {
        return <LandingCard key={habitate.title} {...habitate} />;
      })}
    </Stack>
  );
}

export default Useres;
