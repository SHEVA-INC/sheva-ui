import { IconButton, Link, Stack, Typography } from "@mui/material";
import footerLogo from "../../src/assets/footer-logo.svg";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Link as RouterLink } from "react-router-dom";
import TikTokIcon from "../components/icons/socials/TikTokIcon";
import InstagramIcon from "../components/icons/socials/InstagramIcon";
import TelegramIcon from "../components/icons/socials/TelegramIcon";

const socials = [
  { socialName: "Tik Tok", linkTo: "#", icon: <TikTokIcon />, socialId: 0 },
  {
    socialName: "Instagram",
    linkTo: "#",
    icon: <InstagramIcon />,
    socialId: 1,
  },
  { socialName: "Telegram", linkTo: "#", icon: <TelegramIcon />, socialId: 2 },
];

const contacts = [
  {
    contactInfo: "+(380) 68 346 12 13",
    icon: <CallOutlinedIcon />,
    contactId: 0,
  },
  {
    contactInfo: "sheva.boots@gmail.com",
    icon: <MailOutlineOutlinedIcon />,
    contactId: 1,
  },
];

const Footer = () => {
  return (
    <Stack
      component="footer"
      width={1}
      alignItems="center"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Stack
        component="nav"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="lg"
        width={1}
        gap={10}
        p={3}
      >
        <IconButton disableRipple>
          <img src={footerLogo} alt="Sheva logo" />
        </IconButton>

        <Stack>
          {socials.map((social) => (
            <Link
              key={social.socialId}
              to={social.linkTo}
              component={RouterLink}
              underline="none"
              p={2}
            >
              <Typography
                variant="p"
                textAlign="center"
                color="primary.contrastText"
                display="flex"
                alignItems="center"
                gap={4}
              >
                {social.icon} {social.socialName}
              </Typography>
            </Link>
          ))}
        </Stack>

        <Stack>
          {contacts.map((contact) => (
            <Typography
              key={contact.contactId}
              variant="p"
              textAlign="center"
              color="primary.contrastText"
              display="flex"
              alignItems="center"
              gap={4}
              underline="none"
              p={2}
            >
              {contact.icon} {contact.contactInfo}
            </Typography>
          ))}
        </Stack>
        <Stack>
          <Typography maxWidth="140px" color="primary.contrastText">
            Працюємо з 10:00 до 22:00 без вихідних
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
