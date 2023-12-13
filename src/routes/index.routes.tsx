import PageNotFound from "./PageNotFound.routes";
import RoutesConfig from "./config.routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateLayout from "./private.layouts";
const ExiliensoftRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          {RoutesConfig.privateRoute.map((PublicRoute) => (
            <Route key={PublicRoute.path} {...PublicRoute} />
          ))}
        </Route>

        <Route path="/:pageName" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default ExiliensoftRoutes;
