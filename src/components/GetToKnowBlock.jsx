import { Stack, Typography, Box } from "@mui/material";
import ShoesImageMain from "../assets/shoes/shoes-image-1.png";
import StyledTitle from "../components/styled/StyledTitle";
import DoubleCheckIcon from "../icons/DoubleCheckIcon";

const advantages = [
  {
    id: 1,
    text: "Висока якість товарів: Ми пропонуємо лише оригінальне та високоякісне спортивне взуття від провідних брендів.",
  },
  {
    id: 2,
    text: "Широкий асортимент: Наш каталог включає безліч моделей, які задовольнять будь-який смак та потреби ваших клієнтів.",
  },
  {
    id: 3,
    text: "Зручність і простота: Ми беремо на себе всі турботи про доставку та обробку замовлень, що дозволяє вам сконцентруватися на маркетингу і продажах.",
  },
  {
    id: 4,
    text: " Вигідні умови співпраці: Прозорі умови, швидкі виплати та гнучка система знижок для наших партнерів.",
  },
];

const howItWorks = [
  {
    id: 1,
    text: "Реєстрація: Зареєструйтеся на нашій платформі та отримайте доступ до каталогу товарів.",
  },
  {
    id: 2,
    text: "Вибір товарів: Обирайте товари, які ви хочете продавати, та розміщуйте їх на своїх майданчиках.",
  },
  {
    id: 3,
    text: "Обробка замовлень: Коли клієнт робить замовлення, ви передаєте його нам, а ми беремо на себе всі турботи щодо доставки.",
  },
  {
    id: 4,
    text: "Задоволені клієнти: Ваші клієнти отримують своє замовлення швидко і безпечно, а ви отримуєте свій прибуток.",
  },
];

const GetToKnowBlock = () => {
  return (
    <Stack
      flexDirection={{ xs: "column" }}
      justifyContent="space-between"
      gap={6}
    >
      <Stack
        gap={6}
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
      >
        <Stack gap={4}>
          <StyledTitle title="Sheva-shop: Ваш надійний партнер у світі спортивного взуття" />
          <Typography variant="h6">
            Ласкаво просимо на наш сайт! Ми молода команда, яка з 2023 року
            працює у сфері продажу футбольного взуття. Наша місія — забезпечити
            доступ до сучасних моделей відомих брендів, таких як Найк, Адідас та
            Пума. У нас ви знайдете широкий вибір взуття, що відповідає останнім
            трендам і вимогам якості. Приєднуйтесь до нашої спільноти любителів
            футболу та знайдіть ідеальну пару футбольного взуття для своїх
            спортивних досягнень та стилю!
          </Typography>
        </Stack>
        <Box
          component="img"
          src={ShoesImageMain}
          alt="Boots"
          width="100%"
          maxWidth={{ xs: "70%", sm: "50%" }}
          height="fit-content"
        />
      </Stack>
      <Stack
        flexDirection="column"
        justifyContent="space-between"
        width={1}
        gap={4}
      >
        <Typography variant="h5" fontWeight="bold">
          Дропшипінг
        </Typography>
        <Stack gap={3}>
          {advantages.map((item) => (
            <Stack
              key={item.id}
              flexDirection="row"
              gap={2}
              alignItems="center"
            >
              <DoubleCheckIcon />
              <Typography>{item.text}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack
        flexDirection="column"
        justifyContent="space-between"
        width={1}
        gap={4}
      >
        <Typography variant="h5" fontWeight="bold">
          Як це працює?
        </Typography>
        <Stack gap={3}>
          {howItWorks.map((item) => (
            <Stack
              key={item.id}
              flexDirection="row"
              gap={2}
              alignItems="center"
            >
              <DoubleCheckIcon />
              <Typography>{item.text}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Typography fontWeight="bold">
        Почніть співпрацювати з Sheva-shop вже сьогодні і відкрийте нові
        можливості для вашого бізнесу! Всі контактні дані внизу сторінки.
      </Typography>
    </Stack>
  );
};

export default GetToKnowBlock;
