import { Stack, Typography, Box } from "@mui/material";
import ShoesImageMain from "../assets/shoes/shoes-image-1.png";
import StyledTitle from "../components/styled/StyledTitle";

const GetToKnowBlock = () => {
  return (
    <Stack
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack gap={6}>
        <StyledTitle title="Sheva-shop: Ваш надійний партнер у світі спортивного взуття" />
        <Typography>
          Ласкаво просимо на наш сайт! Ми молода команда, яка з 2023 року працює
          у сфері продажу футбольного взуття. Наша місія — забезпечити доступ до
          сучасних моделей реплік відомих брендів, таких як Найк, Адідас та
          Пума. У нас ви знайдете широкий вибір взуття, що відповідає останнім
          трендам і вимогам якості. Приєднуйтесь до нашої спільноти любителів
          футболу та знайдіть ідеальну пару футбольного взуття для своїх
          спортивних досягнень та стилю!
        </Typography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          gap={2}
        >
          <Box
            component="img"
            src={ShoesImageMain}
            alt="Boots"
            width="100%"
            maxWidth={{ xs: "50%", sm: "50%" }}
            height="max-content"
            display={{ xs: "block", md: "none" }}
          />
        </Stack>
      </Stack>
      <Box
        component="img"
        src={ShoesImageMain}
        alt="Boots"
        width="100%"
        maxWidth="50%"
        height="max-content"
        display={{ xs: "none", md: "block" }}
      />
    </Stack>
  );
};

export default GetToKnowBlock;
