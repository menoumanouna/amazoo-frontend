import { Divider, Stack, Typography, useTheme } from "@mui/material";
import RatingBar from "../../../../components/RatingBar/RatingBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function FeedBackListing() {
  const theme = useTheme();
  //TODO get this from backend
  const feedbacks = [
    {
      id: 1,
      name: "John Doe",
      title: "This is a great product",
      description:
        "Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus.Les animaux semblient si bien soigné et les habitats étaient si bien conçus. Une journée parfaite pour totue la famille, lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      rating: 4.8,
      date: "Fév 18",
    },
    {
      id: 2,
      name: "John Doe",
      title: "This is a great product",
      description:
        "Les animaux semblient si bien soigné et les habitats étaient si bien conçus. Une journée parfaite pour totue la famille, lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      rating: 5,
      date: "Fév 18",
    },
    {
      id: 3,
      name: "John Doe",
      title: "This is a great product",
      description:
        "Les animaux semblient si bien soigné et les habitats étaient si bien conçus. Une journée parfaite pour totue la famille, lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      rating: 3,
      date: "Fév 18",
    },
  ];

  return (
    <Stack height={"100%"} spacing={2}>
      <Stack overflow={"auto"} padding={5}>
        {feedbacks.map((feedback) => {
          return (
            <Stack key={feedback.id} marginBottom={2} spacing={1.5}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"start"}
              >
                <Stack direction={"column"} alignItems={"start"}>
                  <Typography variant="h6">{feedback.name}</Typography>
                  <RatingBar value={feedback.rating} readOnly size="small" />
                </Stack>
                <Typography variant="body2">{feedback.date}</Typography>
              </Stack>
              <Stack spacing={0.5}>
                <Typography fontWeight={600} variant="body1">
                  {feedback.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    overflowY: "scroll",
                    textOverflow: "ellipsis",
                    height: "4rem",
                  }}
                >
                  {feedback.description}
                </Typography>
              </Stack>
              <Divider />
            </Stack>
          );
        })}
      </Stack>
      <Stack direction={"row"} justifyContent={"space-around"}>
        <Stack alignItems={"center"} sx={{ cursor: "pointer" }}>
          <Typography
            variant="body1"
            color={theme.palette.action.active}
            sx={{
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            Afficher plus
          </Typography>
          <KeyboardArrowDownIcon
            sx={{
              color: theme.palette.action.disabled,
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FeedBackListing;
