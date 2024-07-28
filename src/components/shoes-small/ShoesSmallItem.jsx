import { Stack, Typography } from "@mui/material";

const ShoesSmallItem = ({ imageSrc, name, description }) => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      gap={{ xs: 2, md: 4 }}
      borderRadius={(theme) => theme.shape.containerBorderRadius / 2}
      border={1}
      borderColor="secondary.light"
      px={4}
      py={6}
      width={1}
    >
      <img src={imageSrc} alt={name} style={{ width: "90px" }} />
      <Stack>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
    </Stack>
  );
};

export default ShoesSmallItem;
