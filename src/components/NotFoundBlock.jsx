import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import ErrorImg from "../assets/404-error.svg";
import ArrowIconLeft from "../icons/ArrowIconLeft";
import HomeIcon from "../icons/HomeIcon";

const NotFoundBlock = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1, { replace: true });
  };

  return (
    <Stack alignItems="center" gap={5} maxWidth="sm">
      <img
        src={ErrorImg}
        alt="Error"
        style={{ width: "100%", maxWidth: "500px" }}
      />
      <Typography variant="h4" fontWeight="bold">
        Помилка 404
      </Typography>
      <Typography variant="p" textAlign="center">
        Щось пішло не так. Схоже, що ваш запит не знайдено. Ймовірно посилання
        не працює або сторінку видалено.
      </Typography>
      <Stack flexDirection="row" gap={5}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handleBackClick}
          startIcon={<ArrowIconLeft color="white" fontSize="large" />}
        >
          <Typography textTransform="uppercase" fontWeight="bold">
            Назад
          </Typography>
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          sx={{ borderColor: "#FFE7D6" }}
          onClick={handleBackClick}
          startIcon={<HomeIcon color="#51379B" padding={0.4} />}
        >
          <Typography textTransform="uppercase" fontWeight="bold">
            На головну
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default NotFoundBlock;
