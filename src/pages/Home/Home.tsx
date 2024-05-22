import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Stack } from "@mui/material";
import Footer from "../../components/Footer/Footer";

function Home() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/signin";
  return (
    <Stack>
      {showNavbar && <Navbar />}
      <Outlet />
      {showNavbar && <Footer />}
    </Stack>
  );
}

export default Home;
