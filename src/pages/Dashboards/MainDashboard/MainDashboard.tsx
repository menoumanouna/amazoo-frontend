import { Outlet } from "react-router-dom";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";

function MainDashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default MainDashboard;
