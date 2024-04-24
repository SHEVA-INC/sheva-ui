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
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        width={{ xs: "min-content", md: 1 }}
        gap={6}
        px={{ xs: 3, md: 10 }}
        py={{ xs: 2, md: 22 }}
      >
        {numbers.map((numberItem) => (
          <Stack key={numberItem.id}>
            <Typography color="thirdly.main" fontWeight="bold" variant="h1">
              {numberItem.number}
            </Typography>
            <Typography color="thirdly.main" fontWeight="bold">
              {numberItem.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default NumbersBlock;
