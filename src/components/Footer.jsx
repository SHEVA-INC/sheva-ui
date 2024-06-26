import { IconButton, Link, Stack, Typography } from "@mui/material";
import FooterLogo from "../../src/assets/footer-logo.svg";
import { Link as RouterLink } from "react-router-dom";
import TikTokIcon from "../icons/socials/TikTokIcon";
import InstagramIcon from "../icons/socials/InstagramIcon";
import TelegramIcon from "../icons/socials/TelegramIcon";
import PromIcon from "../icons/socials/PromIcon";
import PhoneIcon from "../icons/contacts/PhoneIcon";
import EmailIcon from "../icons/contacts/EmailIcon";

const socials = [
  {
    socialName: "Tik Tok",
    linkTo: "#",
    icon: <TikTokIcon color="white" fontSize="medium" />,
    socialId: 0,
  },
  {
    socialName: "Instagram",
    linkTo: "#",
    icon: <InstagramIcon color="white" fontSize="medium" />,
    socialId: 1,
  },
  {
    socialName: "Telegram",
    linkTo: "#",
    icon: <TelegramIcon color="white" fontSize="medium" />,
    socialId: 2,
  },
  {
    socialName: "Prom",
    linkTo: "#",
    icon: <PromIcon color="white" fontSize="medium" />,
    socialId: 3,
  },
];

const contacts = [
  {
    contactInfo: "+(380) 68 346 12 13",
    contactInfoAdditional: "+(380) 68 346 12 13",
    icon: <PhoneIcon color="white" fontSize="medium" />,
    contactId: 0,
  },
  {
    contactInfo: "sheva.boots@gmail.com",
    icon: <EmailIcon color="white" fontSize="medium" />,
    contactId: 1,
  },
];

const Footer = () => {
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
        <IconButton>
          <img src={FooterLogo} alt="Sheva logo" />
        </IconButton>

        <Stack>
          {socials.map((social) => (
            <Typography key={social.socialId}>
              <Link
                to={social.linkTo}
                component={RouterLink}
                underline="none"
                color="primary.contrastText"
                display="flex"
                alignItems="center"
                width="fit-content"
                gap={4}
                p={2}
              >
                {social.icon} {social.socialName}
              </Link>
            </Typography>
          ))}
        </Stack>

        <Stack>
          {contacts.map((contact) => (
            <Typography
              key={contact.contactId}
              color="primary.contrastText"
              display="flex"
              alignItems={
                contact.contactInfoAdditional ? "flex-start" : "center"
              }
              gap={4}
              p={2}
            >
              {contact.icon} {contact.contactInfo} <br />
              {contact.contactInfoAdditional}
            </Typography>
          ))}
        </Stack>
        <Typography
          color="primary.contrastText"
          maxWidth={{ xs: "100%", md: "140px" }}
        >
          Працюємо з <strong>10:00</strong> до{" "}
          <strong>22:00 без вихідних</strong>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
