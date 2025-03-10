import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { CircularProgress, Stack } from "@mui/material";

import FullWidthLayout from "../layouts/FullWidthLayout";
import AuthLayout from "../layouts/AuthLayout";
import {
  ABOUT_US_ROUTE,
  ADD_ACCESSORIES_ROUTE,
  ADD_SHOES_ROUTE,
  CATALOG_ROUTE,
  CHECKOUT_ROUTE,
  DETAILED_ACCESSORIES_ROUTE,
  DETAILED_SHOES_ROUTE,
  EXCHANGE_RETURN_POLICY_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  LIKED_ROUTE,
  MAIN_ROUTE,
  MANAGE_ACCESSORIES_DETAILS_ROUTE,
  MANAGE_SHOES_DETAILS_ROUTE,
  NOT_FOUND_ROUTE,
  PAYMENT_AND_DELIVERY_POLICY_ROUTE,
  PRIVACY_POLICY_ROUTE,
  PROFILE_ROUTE,
  RESET_PASSWORD_ROUTE,
  SHOPPING_CART_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_OUT_ROUTE,
  SIGN_UP_ROUTE,
} from "./Routes";
import useAuth from "../auth/useAuth";
import RequireAuth from "../auth/RequireAuth";
import PaymentDeliveryPolicyRoute from "../routes/PaymentDeliveryPolicyRoute";
import ExchangeReturnPolicyRoute from "../routes/ExchangeReturnPolicyRoute";
import ManageAccessoriesRoute from "../routes/ManageAccessoriesRoute";

const HomeRoute = lazy(() => import("../routes/HomeRoute"));
const CatalogRoute = lazy(() => import("../routes/CatalogRoute"));
const AboutUsRoute = lazy(() => import("../routes/AboutUsRoute"));
const LikedRoute = lazy(() => import("../routes/LikedRoute"));
const ProfileRoute = lazy(() => import("../routes/ProfileRoute"));
const ShoppingCartRoute = lazy(() => import("../routes/ShoppingCartRoute"));
const DetailedShoesRoute = lazy(() => import("../routes/DetailedShoesRoute"));
const DetailedAccessoriesRoute = lazy(
  () => import("../routes/DetailedAccessoriesRoute"),
);
const SignInAndSignUpRoute = lazy(
  () => import("../routes/SignInAndSignUpRoute"),
);
const ForgotPasswordRoute = lazy(() => import("../routes/ForgotPasswordRoute"));
const ResetPasswordRoute = lazy(() => import("../routes/ResetPasswordRoute"));
const NotFoundRoute = lazy(() => import("../routes/NotFoundRoute"));
const SignOutRoute = lazy(() => import("../routes/SignOutRoute"));
const AddShoesRoute = lazy(() => import("../routes/AddShoesRoute"));
const ManageShoesRoute = lazy(() => import("../routes/ManageShoesRoute"));
const AddAccessoriesRoute = lazy(() => import("../routes/AddAccessoriesRoute"));
const CheckoutRoute = lazy(() => import("../routes/CheckoutRoute"));
const PrivacyPolicyRoute = lazy(() => import("../routes/PrivacyPolicyRoute"));

const Router = () => {
  const { authorized, userRole } = useAuth();

  return (
    <Suspense
      fallback={
        <Stack height="100vh" justifyContent="center" alignItems="center">
          <CircularProgress size="8rem" />
        </Stack>
      }
    >
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

              <Route
                path={PRIVACY_POLICY_ROUTE}
                element={<PrivacyPolicyRoute />}
              />
              <Route
                path={PAYMENT_AND_DELIVERY_POLICY_ROUTE}
                element={<PaymentDeliveryPolicyRoute />}
              />
              <Route
                path={EXCHANGE_RETURN_POLICY_ROUTE}
                element={<ExchangeReturnPolicyRoute />}
              />
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
              <Route
                path={DETAILED_ACCESSORIES_ROUTE}
                element={<DetailedAccessoriesRoute />}
              />
              <Route path={ABOUT_US_ROUTE} element={<AboutUsRoute />} />

              <Route
                path={PRIVACY_POLICY_ROUTE}
                element={<PrivacyPolicyRoute />}
              />
              <Route
                path={PAYMENT_AND_DELIVERY_POLICY_ROUTE}
                element={<PaymentDeliveryPolicyRoute />}
              />
              <Route
                path={EXCHANGE_RETURN_POLICY_ROUTE}
                element={<ExchangeReturnPolicyRoute />}
              />

              <Route
                path={SHOPPING_CART_ROUTE}
                element={<ShoppingCartRoute />}
              />
              <Route path={LIKED_ROUTE} element={<LikedRoute />} />
              <Route path={PROFILE_ROUTE} element={<ProfileRoute />} />

              {userRole === "admin" && (
                <>
                  <Route path={ADD_SHOES_ROUTE} element={<AddShoesRoute />} />
                  <Route
                    path={MANAGE_SHOES_DETAILS_ROUTE}
                    element={<ManageShoesRoute />}
                  />
                  <Route
                    path={ADD_ACCESSORIES_ROUTE}
                    element={<AddAccessoriesRoute />}
                  />
                  <Route
                    path={MANAGE_ACCESSORIES_DETAILS_ROUTE}
                    element={<ManageAccessoriesRoute />}
                  />
                </>
              )}

              <Route path={CHECKOUT_ROUTE} element={<CheckoutRoute />} />

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
    </Suspense>
  );
};

export default Router;
