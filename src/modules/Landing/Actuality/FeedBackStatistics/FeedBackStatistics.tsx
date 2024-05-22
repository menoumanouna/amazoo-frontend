import { Divider, Stack, Typography } from "@mui/material";
import { baseAppColors } from "../../../../config/color.constants";
import RatingBar from "../../../../components/RatingBar/RatingBar";
import BorderLinearProgressBar from "../../../../components/BorderLinearProgressBar/BorderLinearProgressBar";
function FeedBackStatistics() {
  return (
    <Stack p={4} spacing={3}>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Typography variant="h1" flex={0.4} fontSize={"4rem"}>
          4,9
        </Typography>
        <Stack spacing={2} flex={0.6}>
          <RatingBar value={4} readOnly />
          <Typography variant="body2">Basé sur 245 votes</Typography>
        </Stack>
      </Stack>
      <Divider />
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" fontWeight={600}>
              Qualité des habitat
            </Typography>
            <Typography variant="body1">4.7</Typography>
          </Stack>
          <BorderLinearProgressBar
            value={94}
            variant="determinate"
            backgroundColor={baseAppColors.FIRST_GRADIENT}
          />
        </Stack>
        <Stack spacing={1}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" fontWeight={600}>
              Interactivité
            </Typography>
            <Typography variant="body1">5</Typography>
          </Stack>
          <BorderLinearProgressBar
            value={100}
            variant="determinate"
            backgroundColor={baseAppColors.SECOND_GRADIENT}
          />
        </Stack>
        <Stack spacing={1}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" fontWeight={600}>
              Education
            </Typography>
            <Typography variant="body1">4.5</Typography>
          </Stack>
          <BorderLinearProgressBar
            value={90}
            variant="determinate"
            backgroundColor={baseAppColors.THIRD_GRADIENT}
          />
        </Stack>
        <Stack spacing={1}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" fontWeight={600}>
              Propreté et entretien
            </Typography>
            <Typography variant="body1">4.8</Typography>
          </Stack>
          <BorderLinearProgressBar
            value={96}
            variant="determinate"
            backgroundColor={"black"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FeedBackStatistics;
