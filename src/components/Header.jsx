import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SHEVA from "../../src/assets/SHEVA.svg";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Drawer,
  Box,
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
import MenuIcon from "../icons/MenuIcon";
import SignOutIcon from "../icons/SignOutIcon";
import { HashLink } from "react-router-hash-link";
import useScrollToHash from "../custom-hooks/useScrollToHash";

const mainRoutes = [
  { routeId: 0, routeName: "Каталог", linkTo: CATALOG_ROUTE },
  { routeId: 1, routeName: "Новинки", linkTo: HOME_ROUTE, id: "new-items" },
  { routeId: 2, routeName: "Популярне", linkTo: HOME_ROUTE, id: "popular" },
  { routeId: 3, routeName: "Відгуки", linkTo: HOME_ROUTE, id: "reviews" },
  { routeId: 4, routeName: "Про нас", linkTo: ABOUT_US_ROUTE },
];

const iconRoutes = [
  {
    routeId: 5,
    icon: <ShoppingCartIcon color="white" fontSize="medium" />,
    linkTo: SHOPPING_CART_ROUTE,
  },
  {
    routeId: 6,
    icon: <LikeIcon color="white" fontSize="medium" />,
    linkTo: LIKED_ROUTE,
  },
  {
    routeId: 7,
    icon: <PersonIcon color="white" fontSize="medium" />,
    linkTo: "#",
  },
];

const settingsRoutes = [
  { routeId: 11, routeName: "Налаштування", linkTo: PROFILE_ROUTE },
  {
    routeId: 12,
    routeName: "Вийти",
    linkTo: SIGN_OUT_ROUTE,
    icon: <SignOutIcon color="black" fontSize="medium" />,
  },
];

const routesForDrawer = [
  ...mainRoutes,
  {
    routeId: 8,
    routeName: "Корзина",
    linkTo: SHOPPING_CART_ROUTE,
  },
  {
    routeId: 9,
    routeName: "Вподобане",
    linkTo: LIKED_ROUTE,
  },
  ...settingsRoutes,
];

const Header = () => {
  const { hash } = useLocation();
  const headerHeight = useHeaderHeight();

  useScrollToHash(hash, headerHeight);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Stack onClick={handleDrawerToggle}>
      <List sx={{ py: 5 }}>
        {routesForDrawer.map((route) => (
          <ListItem key={route.routeId} disablePadding>
            <ListItemButton sx={{ p: 3 }}>
              <Link
                to={route.linkTo}
                component={RouterLink}
                underline="none"
                px={6}
                py={1}
                minWidth={1}
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
                gap={4}
              >
                {route.icon}

                <Typography variant="h6" fontWeight="bold">
                  {route.routeName}
                </Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
            {mainRoutes.map((route) => (
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
