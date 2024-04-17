import { Stack, Typography } from "@mui/material";

const numbers = [
  {
    id: 1,
    number: 1068,
    text: "Задоволених покупців!",
  },
  {
    id: 2,
    number: 1068,
    text: "Задоволених покупців!",
  },
  {
    id: 3,
    number: 1068,
    text: "Задоволених покупців!",
  },
];

const NumbersBlock = () => {
  return (
    <Stack
      width={1}
      sx={{ background: (theme) => theme.palette.primary.main }}
      alignItems="center"
    >
      <Stack
        maxWidth="lg"
        flexDirection="row"
        justifyContent="space-between"
        width={1}
        px={10}
        py={22}
      >
        {numbers.map((numberItem) => (
          <Stack key={numberItem.id}>
            <Typography variant="h1" color="thirdly.main" fontWeight="bold">
              {numberItem.number}
            </Typography>
            <Typography
              color="thirdly.main"
              textAlign="center"
              fontWeight="bold"
            >
              {numberItem.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default NumbersBlock;
