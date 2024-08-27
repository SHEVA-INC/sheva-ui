import { IconButton, Link, Stack, Typography } from "@mui/material";
import FooterLogo from "../../src/assets/footer-logo.svg";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import TikTokIcon from "../icons/socials/TikTokIcon";
import InstagramIcon from "../icons/socials/InstagramIcon";
import PhoneIcon from "../icons/contacts/PhoneIcon";
import EmailIcon from "../icons/contacts/EmailIcon";
import {
  EXCHANGE_RETURN_POLICY_ROUTE,
  HOME_ROUTE,
  PAYMENT_AND_DELIVERY_POLICY_ROUTE,
  PRIVACY_POLICY_ROUTE,
} from "../app/Routes";

const socials = [
  {
    socialName: "Tik Tok",
    linkTo: "https://www.tiktok.com/@sheva24_7?_t=8oHnekqNboE&_r=1",
    icon: <TikTokIcon color="white" fontSize="medium" />,
    socialId: 0,
  },
  {
    socialName: "@sheva.lviv",
    linkTo: "https://www.instagram.com/sheva.lviv",
    icon: <InstagramIcon color="white" fontSize="medium" />,
    socialId: 1,
  },
  {
    socialName: "@sheva.boots",
    linkTo: "https://www.instagram.com/sheva.boots",
    icon: <InstagramIcon color="white" fontSize="medium" />,
    socialId: 2,
  },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Stack
      component="footer"
      alignItems="center"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
      px={3}
      py={6}
      gap={4}
      width={1}
    >
      <Stack
        component="nav"
        width={1}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "flex-start", md: "space-between" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        maxWidth="lg"
        gap={8}
        height="fit-content"
      >
        <IconButton onClick={() => navigate(HOME_ROUTE)}>
          <img
            src={FooterLogo}
            alt="Sheva logo"
            style={{ borderRadius: "50%" }}
          />
        </IconButton>

        <Stack>
          {socials.map((social) => (
            <Stack
              key={social.socialId}
              flexDirection="row"
              alignItems="center"
              gap={4}
              p={2}
            >
              {social.icon}
              <Link
                to={social.linkTo}
                component={RouterLink}
                color="primary.contrastText"
                underline="none"
                target="_blank"
              >
                {social.socialName}
              </Link>
            </Stack>
          ))}
        </Stack>

        <Stack>
          <Stack flexDirection="row" alignItems="flex-start" gap={4} p={2}>
            <PhoneIcon color="white" fontSize="medium" />
            <Stack>
              <Link
                href="tel:+380989243843"
                color="primary.contrastText"
                underline="none"
              >
                +380 98 924 38 43
              </Link>
              <Link
                href="tel:+380930953452"
                color="primary.contrastText"
                underline="none"
              >
                +380 93 095 34 52
              </Link>
            </Stack>
          </Stack>

          <Stack flexDirection="row" alignItems="center" gap={4} p={2}>
            <EmailIcon color="white" fontSize="medium" />
            <Link
              href="mailto:sheva.shop.new@gmail.com"
              color="primary.contrastText"
              underline="none"
            >
              sheva.shop.new@gmail.com
            </Link>
          </Stack>
        </Stack>

        <Stack gap={4} p={2}>
          <Stack color="primary.contrastText">
            <Typography>
              Будні: <strong>10-18</strong>
            </Typography>
            <Typography>
              Вихідні: <strong>11-15</strong>
            </Typography>
          </Stack>
          <Link
            component={RouterLink}
            to={PRIVACY_POLICY_ROUTE}
            underline="none"
            color="thirdly.main"
            variant="body2"
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            Політика конфіденційності
          </Link>
          <Link
            component={RouterLink}
            to={PAYMENT_AND_DELIVERY_POLICY_ROUTE}
            underline="none"
            color="thirdly.main"
            variant="body2"
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            Оплата і доставка
          </Link>
          <Link
            component={RouterLink}
            to={EXCHANGE_RETURN_POLICY_ROUTE}
            underline="none"
            color="thirdly.main"
            variant="body2"
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            Умови обміну/повернення
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
