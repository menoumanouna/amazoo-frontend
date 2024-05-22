import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Radio,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  LeftBackgroundStack,
  SignInBackgroundContainer,
  SignInForm,
  SigninContainer,
} from "./signin.style";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import PasswordEye from "../../components/PasswordEye/PasswordEye";
import { useRef, useState } from "react";
import { useLoginMutation } from "../../redux/apis/auth/login.api";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const theme = useTheme();
  const passwordVisibilityRef = useRef<{ toggleVisibility: () => void }>(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigator = useNavigate();
  const [submitLogin, { error, isError }] = useLoginMutation();
  const handleLogin = async () => {
    try {
      await submitLogin(credentials).unwrap();
      navigator("/dashboard/services");
    } catch (error) {}
  };
  const handleGoBack = () => {
    navigator("/");
  };
  return (
    <SigninContainer>
      <SignInBackgroundContainer>
        <LeftBackgroundStack
          flex={0.7}
          image="https://c1.wallpaperflare.com/preview/964/428/61/boy-young-kid-sun.jpg"
        />
        <SignInForm
          padding={2}
          spacing={5}
          flex={0.3}
          paddingX={15}
          paddingY={10}
        >
          <Stack spacing={4}>
            <Stack spacing={2} textAlign={"left"}>
              <Typography
                variant="body2"
                textAlign={"left"}
                color={"white"}
                sx={{
                  cursor: "pointer",
                  ":&hover": {
                    textDecoration: "underline",
                  },
                }}
                onClick={handleGoBack}
              >
                {" << Revenir sur le site"}
              </Typography>
              <Typography variant="h2" textAlign={"left"} color={"white"}>
                {"Connexion"}
              </Typography>
            </Stack>
            <Stack spacing={4}>
              <Stack>
                <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                  <InputLabel
                    sx={{ color: "white" }}
                    htmlFor="email-text-field"
                  >
                    {"Email"}
                  </InputLabel>
                  <Input
                    id="email-text-field"
                    placeholder="Entrez votre addresse e-mail"
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    startAdornment={
                      <EmailOutlinedIcon sx={{ mr: 0.5, color: "white" }} />
                    }
                  />
                </FormControl>
                <FormControl fullWidth variant="standard">
                  <InputLabel
                    sx={{ color: "white" }}
                    htmlFor="password-text-field"
                  >
                    {"Mot de passe"}
                  </InputLabel>
                  <Input
                    type={"password"}
                    id="password-text-field"
                    placeholder="Entrez votre mot de passe"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    startAdornment={
                      <HttpsOutlinedIcon
                        sx={{
                          mr: 0.5,
                          color: "white",
                        }}
                      />
                    }
                    endAdornment={
                      <Box
                        onClick={() =>
                          passwordVisibilityRef.current?.toggleVisibility()
                        }
                      >
                        <PasswordEye ref={passwordVisibilityRef} />
                      </Box>
                    }
                  />
                </FormControl>
                {isError && (
                  <Typography color="error">
                    {(error as unknown as { data: any }).data.message}
                  </Typography>
                )}
              </Stack>
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack direction="row" alignItems={"center"}>
                  <Radio size="small" sx={{ color: "white" }} />
                  <Typography variant="body2" color={"white"}>
                    {"Se souvenir de moi"}
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  color={"white"}
                  sx={{
                    "&:hover:": {
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {"Mot de passe oublié ?"}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Button size="large" variant="contained" onClick={handleLogin}>
            {"Se connecter"}
          </Button>
          <Stack spacing={2}>
            <Typography
              variant="h6"
              textAlign={"center"}
              color={"white"}
              sx={{ cursor: "pointer" }}
            >
              {"Ou continuer avec "}
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
        </SignInForm>
      </SignInBackgroundContainer>
    </SigninContainer>
  );
};

export default Signin;
