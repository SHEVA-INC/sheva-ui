import { Stack, Typography } from "@mui/material";

const ShoesSmallItem = ({ imageSrc, name, description, price }) => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      gap={{ xs: 2, md: 5 }}
      borderRadius={(theme) => theme.shape.containerBorderRadius / 2}
      border={1}
      borderColor="secondary.light"
      px={4}
      py={6}
      width={1}
    >
      <img
        src={imageSrc}
        alt={name}
        style={{ width: 88, height: "max-content" }}
      />
      <Stack>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body2" fontWeight="bold" color="info.light" mt={1}>
          {price}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ShoesSmallItem;
