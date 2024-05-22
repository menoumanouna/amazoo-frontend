import LandingCard from "../../../../components/LandingCard/LandingCard";
import { Stack } from "@mui/material";

function Services({ services }: { services: any[] }) {
  return (
    <Stack
      sx={{
        scrollSnapType: "mandatory",
      }}
    >
      {services.map((service) => {
        return <LandingCard key={service.title} {...service} />;
      })}
    </Stack>
  );
}

export default Services;
