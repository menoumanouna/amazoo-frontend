import { Stack, Typography } from "@mui/material";
import { baseAppColors } from "../../../../config/color.constants";
import FeedBackListing from "../FeedBackListing/FeedBackListing";
import FeedBackStatistics from "../FeedBackStatistics/FeedBackStatistics";

function FeedBack() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={{
        backgroundColor: baseAppColors.THIRD_GRADIENT,
        height: "100vh",
        width: "100%",
      }}
    >
      <Stack width={"75%"} spacing={3}>
        <Typography variant="h1">Avis de nos clients</Typography>
        <Stack direction={"row"} spacing={6}>
          <Stack
            sx={{ backgroundColor: "white", borderRadius: 3 }}
            height={400}
            flex={0.3}
          >
            <FeedBackStatistics />
          </Stack>
          <Stack
            sx={{ backgroundColor: "white", borderRadius: 3 }}
            height={400}
            flex={0.7}
          >
            <FeedBackListing />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FeedBack;
