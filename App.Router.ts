import { loginsignup } from "./pages/login-signup/login-signup";
import { Layout } from "./pages/layout/layout";
import { Dashboard } from "./pages/dashboard/dashboard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "loginsignup",
    pathMatch: "full",
  },
  {
    path: "loginsignup",
    component: loginsignup,
  },

  {
    path: "",
    component: Layout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
    ],
  },
];
