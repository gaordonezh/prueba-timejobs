import { PropsRoutes } from "interfaces";
import { lazy } from "react";
import Loadable from "./Loadable";
// ----------------------------------------------------------------------
const Page404 = Loadable(lazy(() => import("pages/errors/Page404")));
// ----------------------------------------------------------------------
const PublicLayout = Loadable(lazy(() => import("layout")));
// ----------------------------------------------------------------------
const Products = Loadable(lazy(() => import("pages/views/Products")));
const Resume = Loadable(lazy(() => import("pages/views/Resume")));
const Details = Loadable(lazy(() => import("pages/views/ProductDetails")));
const About = Loadable(lazy(() => import("pages/views/About")));
// ----------------------------------------------------------------------

const routes: Array<PropsRoutes> = [
  {
    path: "/",
    element: PublicLayout,
    children: [
      {
        path: "",
        element: Products,
      },
      {
        path: "product/:beerId",
        element: Details,
      },
      {
        path: "resume",
        element: Resume,
      },
      {
        path: "about",
        element: About,
      },
      {
        path: "*",
        element: Page404,
      },
    ],
  },
];

export default routes;
