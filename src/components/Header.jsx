import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SHEVA from "../../src/assets/SHEVA.svg";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import {
  ABOUT_US_ROUTE,
  CATALOG_ROUTE,
  LATEST_ROUTE,
  LIKED_ROUTE,
  POPULAR_ROUTE,
  PROFILE_ROUTE,
  REVIEWS_ROUTE,
  SHOPPING_CART_ROUTE,
} from "../app/Routes";
import ShoppingCartIcon from "../icons/shopping/ShoppingCartIcon";
import LikeIcon from "../icons/shopping/LikeIcon";
import PersonIcon from "../icons/shopping/PersonIcon";

const routes = [
  { routeName: "Каталог", linkTo: CATALOG_ROUTE, routeId: 0 },
  { routeName: "Новинки", linkTo: LATEST_ROUTE, routeId: 1 },
  { routeName: "Популярне", linkTo: POPULAR_ROUTE, routeId: 2 },
  { routeName: "Відгуки", linkTo: REVIEWS_ROUTE, routeId: 3 },
  { routeName: "Про нас", linkTo: ABOUT_US_ROUTE, routeId: 4 },
];

const iconRoutes = [
  {
    icon: <ShoppingCartIcon color="white" />,
    linkTo: SHOPPING_CART_ROUTE,
    routeId: 5,
  },
  { icon: <LikeIcon color="white" />, linkTo: LIKED_ROUTE, routeId: 6 },
  { icon: <PersonIcon color="white" />, linkTo: PROFILE_ROUTE, routeId: 7 },
];

const Header = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <AppBar
      component="header"
      elevation={0}
      sx={{ alignItems: "center" }}
      position="sticky"
    >
      <Toolbar
        component="nav"
        sx={{
          maxWidth: "lg",
          width: "100%",
          justifyContent: "space-between",
          p: 3,
          py: 0,
        }}
      >
        <IconButton>
          <img src={SHEVA} alt="Sheva logo" />
        </IconButton>

        <Stack flexDirection="row" justifyContent="space-between">
          {routes.map((route) => (
            <Link
              key={route.routeId}
              to={route.linkTo}
              component={RouterLink}
              underline="none"
              p={5}
              px={10}
              color={
                activePath === route.linkTo
                  ? "primary.main"
                  : "primary.contrastText"
              }
              sx={{
                backgroundColor:
                  activePath === route.linkTo
                    ? "background.default"
                    : "primary.main",
              }}
            >
              <Typography variant="h6" textAlign="center" fontWeight="bold">
                {route.routeName}
              </Typography>
            </Link>
          ))}
        </Stack>

        <Stack flexDirection="row" gap={4}>
          {iconRoutes.map((iconRoute) => (
            <Link
              key={iconRoute.routeId}
              component={RouterLink}
              to={iconRoute.linkTo}
            >
              <IconButton>{iconRoute.icon}</IconButton>
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
