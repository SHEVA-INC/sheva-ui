import { Avatar, Stack, Typography } from "@mui/material";

const TeamMemberItem = ({ imageSrc, fullName, jobPosition }) => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      gap={3}
      borderRadius={(theme) => theme.shape.containerBorderRadius / 2}
      border={1}
      borderColor="secondary.light"
      px={4}
      py={6}
      maxWidth="270px"
      width="100%"
    >
      <Avatar alt={fullName} src={imageSrc} sx={{ width: 64, height: 64 }} />
      <Stack>
        <Typography fontWeight="bold">{fullName}</Typography>
        <Typography variant="body2">{jobPosition}</Typography>
      </Stack>
    </Stack>
  );
};

export default TeamMemberItem;
