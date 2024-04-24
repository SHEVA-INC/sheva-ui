import { Stack, Typography, Box } from "@mui/material";

const ShoesAdItem = ({ name, text, image, display }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      borderRadius={1.5}
      display={display}
      overflow="hidden"
      width={1}
      maxWidth={{ sm: "420px", md: 1 }}
      sx={{ backgroundColor: "#FFE2E5" }}
    >
      <Stack px={8} py={10} width={0.6}>
        <Typography variant="h4" fontWeight="bold">
          {name}
        </Typography>
        <Typography color="#0BB783">{text}</Typography>
      </Stack>
      <Box
        component="img"
        src={image}
        alt={name}
        height="max-content"
        width={0.4}
      />
    </Stack>
  );
};

export default ShoesAdItem;
