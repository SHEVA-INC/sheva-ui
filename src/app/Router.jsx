import { Navigate, Route, Routes } from "react-router-dom";
import {
  ABOUT_US_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE,
  LATEST_ROUTE,
  MAIN_ROUTE,
  POPULAR_ROUTE,
  REVIEWS_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from "./Routes";

import SignUpRoute from "../routes/SignUpRoute";
import SignInRoute from "../routes/SignInRoute";
import FullWidthLayout from "../layouts/FullWidthLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomeRoute from "../routes/HomeRoute";
import CatalogRoute from "../routes/CatalogRoute";
import LatestRoute from "../routes/LatestRoute";
import PopularRoute from "../routes/PopularRoute";
import ReviewsRoute from "../routes/ReviewsRoute";
import AboutUsRoute from "../routes/AboutUsRoute";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path={MAIN_ROUTE} element={<FullWidthLayout />}>
          <Route index element={<Navigate to={HOME_ROUTE} replace />} />
          <Route path={HOME_ROUTE} element={<HomeRoute />} />
          <Route path={CATALOG_ROUTE} element={<CatalogRoute />} />
          <Route path={LATEST_ROUTE} element={<LatestRoute />} />
          <Route path={POPULAR_ROUTE} element={<PopularRoute />} />
          <Route path={REVIEWS_ROUTE} element={<ReviewsRoute />} />
          <Route path={ABOUT_US_ROUTE} element={<AboutUsRoute />} />
        </Route>
        <Route path={MAIN_ROUTE} element={<AuthLayout />}>
          <Route index element={<Navigate to={SIGN_IN_ROUTE} replace />} />
          <Route path={SIGN_IN_ROUTE} element={<SignInRoute />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUpRoute />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
