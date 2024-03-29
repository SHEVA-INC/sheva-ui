import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ItemCounter = ({ value }) => {
  const [count, setCount] = useState(value);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <Stack flexDirection="row" alignItems="center" gap={2}>
      <Button
        onClick={decrement}
        variant="outlined"
        color="secondary"
        disabled={count === 0}
        sx={{
          minWidth: "28px",
          minHeight: "28px",
          p: "0px",
        }}
      >
        -
      </Button>
      <Typography variant="h5" fontWeight="bold">
        {count}
      </Typography>
      <Button
        onClick={increment}
        variant="contained"
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
