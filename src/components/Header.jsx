import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SHEVA from "../../src/assets/SHEVA.svg";
import { Link as RouterLink } from "react-router-dom";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import {
  ABOUT_US_ROUTE,
  CATALOG_ROUTE,
  LATEST_ROUTE,
  POPULAR_ROUTE,
  REVIEWS_ROUTE,
} from "../app/Routes";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const pages = [
  { pageName: "Каталог", linkTo: CATALOG_ROUTE, pageId: 0 },
  { pageName: "Новинки", linkTo: LATEST_ROUTE, pageId: 1 },
  { pageName: "Популярне", linkTo: POPULAR_ROUTE, pageId: 2 },
  { pageName: "Відгуки", linkTo: REVIEWS_ROUTE, pageId: 3 },
  { pageName: "Про нас", linkTo: ABOUT_US_ROUTE, pageId: 4 },
];

const Header = () => {
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
          gap: 24,
          p: 3,
        }}
      >
        <IconButton disableRipple>
          <img src={SHEVA} alt="Sheva logo" />
        </IconButton>

        <Stack flexDirection="row" flex="1" justifyContent="space-between">
          {pages.map((page) => (
            <Link
              key={page.pageId}
              to={page.linkTo}
              component={RouterLink}
              underline="none"
            >
              <Typography
                variant="h6"
                textAlign="center"
                color="primary.contrastText"
                fontWeight="bold"
              >
                {page.pageName}
              </Typography>
            </Link>
          ))}
        </Stack>

        <Stack flexDirection="row" gap={1}>
          <IconButton
            disableRipple
            sx={{ p: 0, color: (theme) => theme.palette.primary.contrastText }}
          >
            <AddShoppingCartRoundedIcon fontSize="medium" />
          </IconButton>
          <IconButton
            disableRipple
            sx={{ p: 0, color: (theme) => theme.palette.primary.contrastText }}
          >
            <FavoriteBorderRoundedIcon fontSize="medium" />
          </IconButton>
          <IconButton
            disableRipple
            sx={{ p: 0, color: (theme) => theme.palette.primary.contrastText }}
          >
            <PersonRoundedIcon fontSize="medium" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
