import { useState } from "react";
import { useCookies } from "react-cookie";
import { Box, Button, Typography, Link, Snackbar } from "@mui/material";
import { PRIVACY_POLICY_ROUTE } from "../app/Routes";

const CookieConsentSnackbar = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [open, setOpen] = useState(!cookies.cookieConsent);

  const handleCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      message={
        <Box>
          <Typography variant="body2" color="secondary">
            Ми використовуємо файли cookie для покращення взаємодії з
            користувачем. Продовжуючи відвідувати цей сайт, ви погоджуєтеся на
            використання файлів cookie.{" "}
            <Link href={PRIVACY_POLICY_ROUTE} underline="hover">
              Дізнатися більше.
            </Link>
          </Typography>
        </Box>
      }
      action={
        <Button
          variant="contained"
          color="primary"
          onClick={handleCookieConsent}
        >
          Прийняти
        </Button>
      }
      ContentProps={{
        sx: {
          background: (theme) => theme.palette.thirdly.main,
          width: { xs: "100%", sm: "500px", md: "800px" },
        },
      }}
    />
  );
};

export default CookieConsentSnackbar;
