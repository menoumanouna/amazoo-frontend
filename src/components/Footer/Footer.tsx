import { Divider, Stack, TextField, Typography } from "@mui/material";
import { baseAppColors } from "../../config/color.constants";

function Footer() {
  return (
    <Stack
      direction={"column"}
      p={10}
      spacing={3}
      sx={{
        backgroundColor: baseAppColors.FIRST_GRADIENT,
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction="row">
          <Typography variant="h1" color={"white"}>
            AMA
          </Typography>
          <Typography variant="h1" color={"white"} fontWeight={"1px"}>
            ZOO
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        spacing={1}
        p={2}
        justifyContent={"space-around"}
      >
        <Stack flex={0.4} direction={"column"} spacing={2}>
          <Typography color={"white"} variant="h3">
            Addresse
          </Typography>
          <Stack direction={"column"} spacing={1}>
            <Typography color={"white"} variant="body2">
              705, rue Fontaine,
            </Typography>
            <Typography color={"white"} variant="body2">
              Mary, La forêt, 15604
            </Typography>
          </Stack>
        </Stack>
        <Stack flex={0.3} direction={"column"} spacing={2}>
          <Typography color={"white"} variant="h3">
            Amazoo
          </Typography>
          <Stack direction={"column"} spacing={1}>
            {/* TODO:: add links / modal openers */}
            <Typography color={"white"} variant="body2">
              Nos services
            </Typography>
            <Typography color={"white"} variant="body2">
              Nos habitats
            </Typography>
            <Typography color={"white"} variant="body2">
              Contact
            </Typography>
            <Typography color={"white"} variant="body2">
              Avis
            </Typography>
          </Stack>
        </Stack>
        <Stack flex={0.4} direction={"column"} spacing={2}>
          <Typography color={"white"} variant="h3">
            Newsletter
          </Typography>
          <Stack direction={"column"} spacing={1}>
            <Typography color={"white"} variant="body2">
              Abonnez vous a votre newsletter pour suivre nos actualité
            </Typography>
            <TextField
              variant="standard"
              placeholder="Entrez votre adresse electronique"
            />
            <Typography color={"white"} variant="body2">
              Trouvez nos sur les réseaux sociaux
            </Typography>
            <Stack direction={"row"} justifyContent={"space-around"} pt={2}>
              <Typography color={"white"} variant="body2">
                <img src="http://localhost:4002/public/images/icons/icon_fcb.png" />
              </Typography>
              <Typography color={"white"} variant="body2">
                <img src="http://localhost:4002/public/images/icons/icon_x.png" />
              </Typography>
              <Typography color={"white"} variant="body2">
                <img src="http://localhost:4002/public/images/icons/icon_insta.png" />
              </Typography>
              <Typography color={"white"} variant="body2">
                <img src="http://localhost:4002/public/images/icons/icon_linkedIn.png" />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ width: "100%" }} color={"white"} />
      <Stack direction={"row"} justifyContent={"space-around"} pt={1}>
        <Typography color={"white"} variant="body2">
          © 2024 Amazoo. Tous droits réservés.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Footer;
