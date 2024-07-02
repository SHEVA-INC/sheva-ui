import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ItemCounter = ({ value, size }) => {
  const [count, setCount] = useState(value);

  const decrement = (e) => {
    e.stopPropagation();
    setCount((c) => c - 1);
  };

  const increment = (e) => {
    e.stopPropagation();
    setCount((c) => c + 1);
  };

  return (
    <Stack flexDirection="row" alignItems="center" gap={2}>
      <Button
        onClick={decrement}
        variant="outlined"
        color="secondary"
        size={size}
        disabled={count === 0}
        sx={{
          minWidth: "28px",
          minHeight: "28px",
          p: "0px",
        }}
      >
        -
      </Button>
      <Typography variant="h6" fontWeight="bold">
        {count}
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
