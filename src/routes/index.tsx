import { Route, Routes } from "react-router-dom";
import routes from "./config";

const ConfigRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const { path, element: Component, children } = route;
        return (
          <Route path={path} element={<Component />} key={index}>
            {children.map((child, indx) => {
              const { path: ruta, element: Element } = child;
              return <Route path={ruta} element={<Element />} key={indx} />;
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default ConfigRoutes;
