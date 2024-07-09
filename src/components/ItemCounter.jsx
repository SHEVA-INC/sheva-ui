import { Button, Stack, Typography } from "@mui/material";

const ItemCounter = ({ countValue, setCountValue, size }) => {
  const decrement = (e) => {
    e.stopPropagation();
    setCountValue((c) => c - 1);
  };

  const increment = (e) => {
    e.stopPropagation();
    setCountValue((c) => c + 1);
  };

  return (
    <Stack flexDirection="row" alignItems="center" gap={2}>
      <Button
        onClick={decrement}
        variant="outlined"
        color="secondary"
        size={size}
        disabled={countValue === 1}
        sx={{
          minWidth: "28px",
          minHeight: "28px",
          p: "0px",
        }}
      >
        -
      </Button>
      <Typography variant="h6" fontWeight="bold">
        {countValue}
      </Typography>
      <Button
        onClick={increment}
        variant="contained"
        size={size}
        color="secondary"
        sx={{
          minWidth: "28px",
          minHeight: "28px",
          p: "0px",
        }}
      >
        +
      </Button>
    </Stack>
  );
};

export default ItemCounter;
