import { Stack, Typography, useTheme } from "@mui/material";
import { baseAppColors } from "../../../../../config/color.constants";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Image } from "../../../../../components/ImageHolder/imageHolder.style";
function ContactUsLeftSection() {
  const theme = useTheme();
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
      <Stack direction={"row"} justifyContent={"space-around"}>
        {/* TODO:: change this with icon  */}
        <Image imageurl="http://localhost:4002/public/images/amazoo_logo_brown.png" />
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h1">{"Contactez-nous !"}</Typography>
        <Typography variant="h5">
          {"Pour toute question ou commentaire"}
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Stack direction={"row"} spacing={2}>
          <PhoneInTalkIcon sx={{ color: theme.palette.text.secondary }} />
          <Typography variant="body1">{"+33 1 48 75 63 88"}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <EmailIcon sx={{ color: theme.palette.text.secondary }} />
          <Typography variant="body1">{"contact@amazoo.fr"}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <LocationOnIcon sx={{ color: theme.palette.text.secondary }} />
          <Typography variant="body1">
            {"705, rue Fontaine, Mary-la-Forêt, 15604"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ContactUsLeftSection;
