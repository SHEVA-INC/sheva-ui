import { Navigate, Route, Routes } from "react-router-dom";
import {
  ABOUT_US_ROUTE,
  CATALOG_ROUTE,
  DETAILED_SHOES_ROUTE,
  HOME_ROUTE,
  LATEST_ROUTE,
  LIKED_ROUTE,
  MAIN_ROUTE,
  POPULAR_ROUTE,
  PROFILE_ROUTE,
  REVIEWS_ROUTE,
  SHOPPING_CART_ROUTE,
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
import LikedRoute from "../routes/LikedRoute";
import ProfileRoute from "../routes/ProfileRoute";
import ShoppingCartRoute from "../routes/ShoppingCartRoute";
import DetailedShoesRoute from "../routes/DetailedShoesRoute";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path={MAIN_ROUTE} element={<FullWidthLayout />}>
          <Route index element={<Navigate to={HOME_ROUTE} replace />} />
          <Route path={HOME_ROUTE} element={<HomeRoute />} />
          <Route path={CATALOG_ROUTE} element={<CatalogRoute />} />
          <Route path={DETAILED_SHOES_ROUTE} element={<DetailedShoesRoute />} />
          <Route path={LATEST_ROUTE} element={<LatestRoute />} />
          <Route path={POPULAR_ROUTE} element={<PopularRoute />} />
          <Route path={REVIEWS_ROUTE} element={<ReviewsRoute />} />
          <Route path={ABOUT_US_ROUTE} element={<AboutUsRoute />} />

          <Route path={SHOPPING_CART_ROUTE} element={<ShoppingCartRoute />} />
          <Route path={LIKED_ROUTE} element={<LikedRoute />} />
          <Route path={PROFILE_ROUTE} element={<ProfileRoute />} />
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
