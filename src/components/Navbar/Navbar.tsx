import { Stack, Typography } from "@mui/material";
import { BaseNavBar, NavBarItem, NavBarItems } from "./navbar.style";
import { useNavigate } from "react-router-dom";
import { navbarRouting } from "../../config/navbar.routing";
import { useModal } from "../../hooks/useModal";
import ContactUsModal from "../../modules/Landing/Contact/ContactUsModal/ContactUsModal";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FeedBackModal from "../../modules/Landing/FeedBack/FeedBackModal/FeedBackModal";
import { useAppSelector } from "../../redux/hooks/useAppRTK";
function Navbar() {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => () => navigate(path);
  const {
    handleClose: handleCloseContact,
    handleOpen: handleOpenContact,
    open: isContactOpen,
  } = useModal();
  const {
    handleClose: handleCloseFeedBack,
    handleOpen: handleOpenFeedBack,
    open: isFeedBackOpen,
  } = useModal();
  const user = useAppSelector((state) => state.auth.user);
  const handleRedirectAuthenticated = () => {
    if (user) {
      navigate("/dashboard/services");
    } else {
      navigate("/signin");
    }
  };
  return (
    <>
      <BaseNavBar>
        <Stack direction="row" alignItems={"center"}>
          <img style={{ width: 40, marginRight: 20 }} src={"/logo.png"} />
          <Typography variant="h1" color={"white"}>
            AMA
          </Typography>
          <Typography variant="h1" color={"white"} fontWeight={"1px"}>
            ZOO
          </Typography>
        </Stack>
        <NavBarItems>
          {navbarRouting(
            handleRedirect,
            handleOpenContact,
            handleOpenFeedBack
          ).map((route) => (
            <NavBarItem
              key={route.name}
              margin={2}
              onClick={route.onclick}
              variant="body2"
            >
              {route.name}
            </NavBarItem>
          ))}
          <NavBarItem margin={2} onClick={handleRedirectAuthenticated}>
            <PermIdentityOutlinedIcon sx={{ color: "white" }} />
          </NavBarItem>
        </NavBarItems>
      </BaseNavBar>
      <ContactUsModal handleClose={handleCloseContact} open={isContactOpen} />
      <FeedBackModal handleClose={handleCloseFeedBack} open={isFeedBackOpen} />
    </>
  );
}

export default Navbar;
