import { Navigate, Route, Routes } from "react-router-dom";
import {
  ABOUT_US_ROUTE,
  CATALOG_ROUTE,
  DETAILED_SHOES_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  LIKED_ROUTE,
  MAIN_ROUTE,
  MANAGE_SHOES_DETAILS_ROUTE,
  NOT_FOUND_ROUTE,
  PROFILE_ROUTE,
  RESET_PASSWORD_ROUTE,
  SHOPPING_CART_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_OUT_ROUTE,
  SIGN_UP_ROUTE,
} from "./Routes";
import FullWidthLayout from "../layouts/FullWidthLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomeRoute from "../routes/HomeRoute";
import CatalogRoute from "../routes/CatalogRoute";
import AboutUsRoute from "../routes/AboutUsRoute";
import LikedRoute from "../routes/LikedRoute";
import ProfileRoute from "../routes/ProfileRoute";
import ShoppingCartRoute from "../routes/ShoppingCartRoute";
import DetailedShoesRoute from "../routes/DetailedShoesRoute";
import SignInAndSignUpRoute from "../routes/SignInAndSignUpRoute";
import ForgotPasswordRoute from "../routes/ForgotPasswordRoute";
import ResetPasswordRoute from "../routes/ResetPasswordRoute";
import NotFoundRoute from "../routes/NotFoundRoute";
import SignOutRoute from "../routes/SignOutRoute";
import useAuth from "../auth/useAuth";
import RequireAuth from "../auth/RequireAuth";
import ManageShoesRoute from "../routes/ManageShoesRoute";

const Router = () => {
  const { authorized, userRole } = useAuth();

  return (
    <Routes>
      {!authorized() ? (
        <Route>
          <Route path={MAIN_ROUTE} element={<FullWidthLayout />}>
            <Route index element={<Navigate to={HOME_ROUTE} replace />} />
            <Route path={HOME_ROUTE} element={<HomeRoute />} />
            <Route path={CATALOG_ROUTE} element={<CatalogRoute />} />
            <Route
              path={DETAILED_SHOES_ROUTE}
              element={<DetailedShoesRoute />}
            />
            <Route path={ABOUT_US_ROUTE} element={<AboutUsRoute />} />
          </Route>

          <Route path={MAIN_ROUTE} element={<AuthLayout />}>
            <Route index element={<Navigate to={SIGN_IN_ROUTE} replace />} />
            <Route
              path={SIGN_IN_ROUTE}
              element={<SignInAndSignUpRoute active="login" />}
            />
            <Route
              path={SIGN_UP_ROUTE}
              element={<SignInAndSignUpRoute active="register" />}
            />
            <Route
              path={FORGOT_PASSWORD_ROUTE}
              element={<ForgotPasswordRoute />}
            />
            <Route
              path={RESET_PASSWORD_ROUTE}
              element={<ResetPasswordRoute />}
            />
          </Route>

          <Route
            path={SIGN_OUT_ROUTE}
            element={<Navigate to={SIGN_IN_ROUTE} replace />}
          />
          <Route path="*" element={<Navigate to={SIGN_IN_ROUTE} replace />} />
        </Route>
      ) : (
        <Route element={<RequireAuth authRoute={SIGN_IN_ROUTE} />}>
          <Route path={MAIN_ROUTE} element={<FullWidthLayout />}>
            <Route index element={<Navigate to={HOME_ROUTE} replace />} />
            <Route path={HOME_ROUTE} element={<HomeRoute />} />
            <Route path={CATALOG_ROUTE} element={<CatalogRoute />} />
            <Route
              path={DETAILED_SHOES_ROUTE}
              element={<DetailedShoesRoute />}
            />
            <Route path={ABOUT_US_ROUTE} element={<AboutUsRoute />} />

            <Route path={SHOPPING_CART_ROUTE} element={<ShoppingCartRoute />} />
            <Route path={LIKED_ROUTE} element={<LikedRoute />} />
            <Route path={PROFILE_ROUTE} element={<ProfileRoute />} />

            {userRole === "admin" && (
              <Route
                path={MANAGE_SHOES_DETAILS_ROUTE}
                element={<ManageShoesRoute />}
              />
            )}
            <Route path={SIGN_OUT_ROUTE} element={<SignOutRoute />} />

            <Route path={NOT_FOUND_ROUTE} element={<NotFoundRoute />} />
            <Route
              path="*"
              element={<Navigate to={NOT_FOUND_ROUTE} replace />}
            />
            <Route path="*" element={<NotFoundRoute />} />
          </Route>
        </Route>
      )}
    </Routes>
  );
};

export default Router;
