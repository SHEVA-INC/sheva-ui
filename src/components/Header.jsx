import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SHEVA from "../../src/assets/SHEVA.svg";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import {
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  ABOUT_US_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE,
  LIKED_ROUTE,
  PROFILE_ROUTE,
  SHOPPING_CART_ROUTE,
  SIGN_OUT_ROUTE,
} from "../app/Routes";
import ShoppingCartIcon from "../icons/shopping/ShoppingCartIcon";
import LikeIcon from "../icons/shopping/LikeIcon";
import PersonIcon from "../icons/shopping/PersonIcon";
import useHeaderHeight from "../custom-hooks/useHeaderHeight";
import { useState } from "react";

const routes = [
  { routeName: "Каталог", linkTo: CATALOG_ROUTE, routeId: 0 },
  { id: "new-items", routeName: "Новинки", linkTo: HOME_ROUTE, routeId: 1 },
  { id: "popular", routeName: "Популярне", linkTo: HOME_ROUTE, routeId: 2 },
  { id: "reviews", routeName: "Відгуки", linkTo: HOME_ROUTE, routeId: 3 },
  { routeName: "Про нас", linkTo: ABOUT_US_ROUTE, routeId: 4 },
];

const iconRoutes = [
  {
    icon: <ShoppingCartIcon color="white" fontSize="medium" />,
    linkTo: SHOPPING_CART_ROUTE,
    routeId: 5,
  },
  {
    icon: <LikeIcon color="white" fontSize="medium" />,
    linkTo: LIKED_ROUTE,
    routeId: 6,
  },
  {
    icon: <PersonIcon color="white" fontSize="medium" />,
    linkTo: "#",
    routeId: 7,
  },
];

const settings = [
  { settingName: "Профіль", linkTo: PROFILE_ROUTE },
  { settingName: "Вийти", linkTo: SIGN_OUT_ROUTE },
];

const Header = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const navigate = useNavigate();

  const headerHeight = useHeaderHeight();

  const handleTabClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleTabLinkClick = (route) => {
    if (activePath !== HOME_ROUTE) {
      navigate(HOME_ROUTE);
    } else {
      handleTabClick(route?.id);
    }
  };

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      id="header"
      component="header"
      elevation={0}
      sx={{ alignItems: "center" }}
      position="sticky"
    >
      <Toolbar
        component="nav"
        sx={{
          maxWidth: "xl",
          width: "100%",
          justifyContent: "space-between",
          "&.MuiToolbar-root": {
            paddingLeft: 10,
            paddingRight: 10,
            py: 0,
          },
        }}
      >
        <Link component={RouterLink} to={HOME_ROUTE}>
          <IconButton>
            <img src={SHEVA} alt="Sheva logo" />
          </IconButton>
        </Link>

        <Stack flexDirection="row" justifyContent="space-between">
          {routes.map((route) => (
            <Link
              key={route.routeId}
              to={route.linkTo}
              component={RouterLink}
              underline="none"
              p={5}
              px={10}
              color={"primary.contrastText"}
              sx={{
                backgroundColor: "primary.main",
              }}
              onClick={() => handleTabLinkClick(route)}
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
              <IconButton
                onClick={iconRoute.routeId === 7 ? handleOpenUserMenu : null}
              >
                {iconRoute.icon}
              </IconButton>
            </Link>
          ))}
          <Menu
            sx={{ mt: "35px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, index) => (
              <MenuItem key={index} onClick={handleCloseUserMenu}>
                <Typography
                  variant="caption"
                  textAlign="center"
                  fontWeight="bold"
                >
                  <Link
                    to={setting.linkTo}
                    component={RouterLink}
                    underline="none"
                  >
                    {setting.settingName.toLocaleUpperCase()}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
