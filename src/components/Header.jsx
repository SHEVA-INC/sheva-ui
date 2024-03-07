import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SHEVA from "../../src/assets/SHEVA.svg";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import {
  ABOUT_US_ROUTE,
  CATALOG_ROUTE,
  LATEST_ROUTE,
  POPULAR_ROUTE,
  REVIEWS_ROUTE,
} from "../app/Routes";
import ShoppingCartIcon from "./icons/shopping/ShoppingCartIcon";
import LikeIcon from "./icons/shopping/LikeIcon";
import PersonIcon from "./icons/shopping/PersonIcon";

const pages = [
  { pageName: "Каталог", linkTo: CATALOG_ROUTE, pageId: 0 },
  { pageName: "Новинки", linkTo: LATEST_ROUTE, pageId: 1 },
  { pageName: "Популярне", linkTo: POPULAR_ROUTE, pageId: 2 },
  { pageName: "Відгуки", linkTo: REVIEWS_ROUTE, pageId: 3 },
  { pageName: "Про нас", linkTo: ABOUT_US_ROUTE, pageId: 4 },
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
        <IconButton disableRipple>
          <img src={SHEVA} alt="Sheva logo" />
        </IconButton>

        <Stack flexDirection="row" justifyContent="space-between">
          {pages.map((page) => (
            <Link
              key={page.pageId}
              to={page.linkTo}
              component={RouterLink}
              underline="none"
              p={5}
              px={10}
              color={
                activePath === page.linkTo
                  ? "primary.main"
                  : "primary.contrastText"
              }
              sx={{
                backgroundColor:
                  activePath === page.linkTo
                    ? "primary.contrastText"
                    : "primary.main",
              }}
            >
              <Typography variant="h6" textAlign="center" fontWeight="bold">
                {page.pageName}
              </Typography>
            </Link>
          ))}
        </Stack>

        <Stack flexDirection="row" gap={4}>
          <IconButton
            disableRipple
            sx={{ p: 0, color: (theme) => theme.palette.primary.contrastText }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            disableRipple
            sx={{ p: 0, color: (theme) => theme.palette.primary.contrastText }}
          >
            <LikeIcon />
          </IconButton>
          <IconButton
            disableRipple
            sx={{ p: 0, color: (theme) => theme.palette.primary.contrastText }}
          >
            <PersonIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
