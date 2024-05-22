import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GiteIcon from "@mui/icons-material/Gite";
import PetsIcon from "@mui/icons-material/Pets";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";

export const sidebarRouting = [
  {
    id: 1,
    name: "Services",
    path: "/dashboard/services",
    icon: VolunteerActivismIcon,
  },
  {
    id: 2,
    name: "Habitats",
    path: "/dashboard/habitates",
    icon: GiteIcon,
  },
  {
    id: 4,
    name: "Animaux",
    path: "/dashboard/animaux",
    icon: PetsIcon,
  },
  {
    id: 6,
    name: "Employers",
    path: "/dashboard/utilisateurs",
    icon: ManageAccountsIcon,
  },
  {
    id: 7,
    name: "Se déconnecter",
    path: "/logout",
    icon: LogoutIcon,
  },
];
