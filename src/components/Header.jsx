import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Drawer,
  Box,
  Button,
} from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ShoppingCartIcon from "../icons/shopping/ShoppingCartIcon";
import LikeIcon from "../icons/shopping/LikeIcon";
import PersonIcon from "../icons/shopping/PersonIcon";
import MenuIcon from "../icons/MenuIcon";
import SignOutIcon from "../icons/SignOutIcon";
import useHeaderHeight from "../custom-hooks/useHeaderHeight";
import useScrollToHash from "../custom-hooks/useScrollToHash";
import SHEVA from "../../src/assets/SHEVA.svg";
import {
  ABOUT_US_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE,
  LIKED_ROUTE,
  PROFILE_ROUTE,
  SHOPPING_CART_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_OUT_ROUTE,
} from "../app/Routes";
import useAuth from "../auth/useAuth";

const defaultRoutes = [
  { routeId: 0, routeName: "Каталог", linkTo: CATALOG_ROUTE },
  { routeId: 1, routeName: "Новинки", linkTo: HOME_ROUTE, id: "new-items" },
  { routeId: 2, routeName: "Популярне", linkTo: HOME_ROUTE, id: "popular" },
  { routeId: 3, routeName: "Відгуки", linkTo: HOME_ROUTE, id: "reviews" },
  { routeId: 4, routeName: "Про нас", linkTo: ABOUT_US_ROUTE },
];

const authenticatedRoutes = [
  {
    routeId: 5,
    routeName: "Вподобане",
    icon: <LikeIcon color="white" fontSize="medium" />,
    linkTo: LIKED_ROUTE,
  },
  {
    routeId: 6,
    routeName: "Корзина",
    icon: <ShoppingCartIcon color="white" fontSize="medium" />,
    linkTo: SHOPPING_CART_ROUTE,
  },
  {
    routeId: 7,
    icon: <PersonIcon color="white" fontSize="medium" />,
    linkTo: "#",
  },
];

const filteredAuthenticatedRoutesForDrawer = authenticatedRoutes.filter(
  (route) => route.linkTo !== "#",
);

const settingsRoutes = [
  { routeId: 8, routeName: "Налаштування", linkTo: PROFILE_ROUTE },
  {
    routeId: 9,
    routeName: "Вийти",
    linkTo: SIGN_OUT_ROUTE,
    icon: <SignOutIcon color="black" fontSize="medium" />,
  },
];

const Header = () => {
  const { hash } = useLocation();
  const headerHeight = useHeaderHeight();
  useScrollToHash(hash, headerHeight);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { authorized } = useAuth();
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigateToSignInRoute = () => {
    navigate(SIGN_IN_ROUTE);
  };

  const handleLinkClick = (event, route) => {
    event.preventDefault();

    setTimeout(() => {
      navigate(route);
      setMobileOpen(false);
    }, 100);
  };

  const drawer = (
    <Stack>
      <Stack>
        {defaultRoutes.map((route) => (
          <Stack key={route.routeId}>
            <Link
              component={route.id ? HashLink : RouterLink}
              underline="none"
              px={6}
              py={4}
              minWidth={1}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
              gap={4}
              onClick={(e) =>
                handleLinkClick(
                  e,
                  route.id ? `${route.linkTo}#${route.id}` : route.linkTo,
                )
              }
            >
              {route.icon}
              <Typography variant="h6" fontWeight="bold">
                {route.routeName}
              </Typography>
            </Link>
          </Stack>
        ))}
        {authorized() &&
          [...filteredAuthenticatedRoutesForDrawer, ...settingsRoutes].map(
            (route) => (
              <Stack key={route.routeId}>
                <Link
                  component={RouterLink}
                  to={route.linkTo}
                  underline="none"
                  px={6}
                  py={4}
                  minWidth={1}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  gap={4}
                  onClick={(e) => handleLinkClick(e, route.linkTo)}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {route.routeName}
                  </Typography>
                </Link>
              </Stack>
            ),
          )}
        {!authorized() && (
          <Stack>
            <Link
              component={RouterLink}
              to={SIGN_IN_ROUTE}
              underline="none"
              px={6}
              py={4}
              minWidth={1}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
              gap={4}
              onClick={(e) => handleLinkClick(e, SIGN_IN_ROUTE)}
            >
              <Typography variant="h6" fontWeight="bold">
                Увійти
              </Typography>
            </Link>
          </Stack>
        )}
      </Stack>
    </Stack>
  );

  return (
    <>
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
            maxWidth: "lg",
            width: "100%",
            gap: { md: 26, lg: 34 },
            justifyContent: "space-between",
            "&.MuiToolbar-root": {
              paddingLeft: 3,
              paddingRight: 3,
              py: 0,
            },
          }}
        >
          <Link component={RouterLink} to={HOME_ROUTE}>
            <IconButton>
              <Box
                component="img"
                src={SHEVA}
                alt="Sheva logo"
                height={{ xs: "20px", md: "inherit" }}
              />
            </IconButton>
          </Link>

          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon color="white" fontSize="small" />
          </IconButton>

          <Stack
            flexDirection="row"
            justifyContent="space-between"
            flex={1}
            display={{ xs: "none", md: "flex" }}
          >
            {defaultRoutes.map((route) => (
              <Link
                key={route.routeId}
                to={route.id ? `${route.linkTo}#${route.id}` : route.linkTo}
                component={route.id ? HashLink : RouterLink}
                underline="none"
                color={"primary.contrastText"}
                sx={{
                  backgroundColor: "primary.main",
                }}
              >
                <Typography variant="h6" textAlign="center" fontWeight="bold">
                  {route.routeName}
                </Typography>
              </Link>
            ))}
          </Stack>

          <Stack
            flexDirection="row"
            gap={4}
            display={{ xs: "none", md: "flex" }}
          >
            {!authorized() ? (
              <Button
                variant="outlined"
                color="thirdly"
                onClick={handleNavigateToSignInRoute}
              >
                <Typography variant="h6" color="thirdly">
                  Увійти
                </Typography>
              </Button>
            ) : (
              <>
                {authenticatedRoutes.map((authenticatedRoute) => (
                  <Link
                    key={authenticatedRoute.routeId}
                    component={RouterLink}
                    to={authenticatedRoute.linkTo}
                  >
                    <IconButton
                      onClick={
                        authenticatedRoute.linkTo === "#"
                          ? handleOpenUserMenu
                          : handleDrawerToggle
                      }
                    >
                      {authenticatedRoute.icon}
                    </IconButton>
                  </Link>
                ))}
              </>
            )}

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
              {settingsRoutes.map((setting) => (
                <MenuItem
                  key={setting.routeId}
                  onClick={handleCloseUserMenu}
                  sx={{ p: 0 }}
                >
                  <Link
                    to={setting.linkTo}
                    component={RouterLink}
                    underline="none"
                    px={6}
                    py={1}
                    minWidth={1}
                  >
                    <Typography
                      variant="caption"
                      textAlign="center"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      {setting.routeName}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        anchor="right"
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "flex", md: "none" },
          "& .MuiDrawer-paper": { width: "80%" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
