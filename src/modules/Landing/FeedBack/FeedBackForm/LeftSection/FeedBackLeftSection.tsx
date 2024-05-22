import { Divider, Slider, Stack, Typography } from "@mui/material";
import { baseAppColors } from "../../../../../config/color.constants";
import RatingBar from "../../../../../components/RatingBar/RatingBar";
function FeedBackLeftSection({
  ratings,
  globalRating,
  handleChangeRating,
}: {
  ratings: {
    quality: number;
    interactivity: number;
    education: number;
    maintenance: number;
  };
  globalRating: number;
  handleChangeRating: (
    attribute: "quality" | "interactivity" | "education" | "maintenance"
  ) => (_event: Event, newValue: number | number[]) => void;
}) {
  const sliderRatings = [
    {
      label: "Qualité des habitat",
      value: ratings.quality,
      onChange: handleChangeRating("quality"),
      sliderColor: baseAppColors.FIRST_GRADIENT,
    },
    {
      label: "Interactivité",
      value: ratings.interactivity,
      onChange: handleChangeRating("interactivity"),
      sliderColor: baseAppColors.SECOND_GRADIENT,
    },
    {
      label: "Education",
      value: ratings.education,
      onChange: handleChangeRating("education"),
      sliderColor: baseAppColors.FOURTH_GRADIENT,
    },
    {
      label: "Propreté et entretien",
      value: ratings.maintenance,
      onChange: handleChangeRating("maintenance"),
      sliderColor: "black",
    },
  ];
  return (
    <Stack
      sx={{
        backgroundColor: baseAppColors.THIRD_GRADIENT,
        px: 4,
        py: 4,
      }}
      direction={"column"}
      flex={0.4}
      spacing={4}
    >
      <Stack p={4} spacing={3}>
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Typography variant="h1" flex={0.4} fontSize={"4rem"}>
            {globalRating}
          </Typography>
          <Stack spacing={2} flex={0.6}>
            <RatingBar value={globalRating} readOnly />
            <Typography variant="body2">Basé sur 245 votes</Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={2}>
          {sliderRatings.map((sliderRating, index) => (
            <Stack spacing={0.5} key={index}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="body1" fontWeight={600}>
                  {sliderRating.label}
                </Typography>
                <Typography variant="body1">{sliderRating.value}</Typography>
              </Stack>
              <Slider
                step={10}
                aria-label="Volume"
                value={sliderRating.value * 20}
                onChange={sliderRating.onChange}
                sx={{
                  color: sliderRating.sliderColor,
                }}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FeedBackLeftSection;
