import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Habitates from "../pages/Habitates/Habitates.tsx";
import Services from "../pages/Services/Services.tsx";
import Contact from "../pages/Contact/Contact.tsx";
import Actuality from "../pages/Actuality/Actuality.tsx";
import Signin from "../pages/Signin/Signin.tsx";
import Authenticated from "../guards/Authenticated.guard.tsx";
import MainDashboard from "../pages/Dashboards/MainDashboard/MainDashboard.tsx";
import MainServices from "../modules/Dashboard/Services/Main/MainServices.tsx";
import MainHabitats from "../modules/Dashboard/Habitats/Main/MainHabitat.tsx";
import MainAnimals from "../modules/Dashboard/Animals/Main/MainAnimals.tsx";
import MainUsers from "../modules/Dashboard/Users/Main/MainUsers.tsx";
import SigninGuard from "../guards/Signin.guard.tsx";
export const RouterDom = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Actuality /> },
        {
          path: "/habitates",
          element: <Habitates />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/signin",
          element: (
            <SigninGuard>
              <Signin />
            </SigninGuard>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <Authenticated>
          <MainDashboard />
        </Authenticated>
      ),
      children: [
        {
          path: "/dashboard/services",
          element: <MainServices />,
        },
        {
          path: "/dashboard/habitates",
          element: <MainHabitats />,
        },
        {
          path: "/dashboard/animaux",
          element: <MainAnimals />,
        },
        {
          path: "/dashboard/utilisateurs",
          element: <MainUsers />,
        },
      ],
    },
  ]);
};
