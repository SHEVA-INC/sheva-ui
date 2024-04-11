import { Stack, Typography } from "@mui/material";

const ShoesAdItem = ({ name, text, image }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      borderRadius={1.5}
      sx={{ backgroundColor: "#FFE2E5", width: "100%", overflow: "hidden" }}
    >
      <Stack px={8} py={10}>
        <Typography variant="h4" fontWeight="bold">
          {name}
        </Typography>
        <Typography color="#0BB783">{text}</Typography>
      </Stack>
      <img src={image} alt={name} />
    </Stack>
  );
};

export default ShoesAdItem;
