import { Avatar, Stack, Typography } from "@mui/material";
import StyledRating from "../styled/StyledRating";
import dayjs from "dayjs";
import DeleteIcon from "../../icons/DeleteIcon";
import useAuth from "../../auth/useAuth";

const ReviewItem = ({
  id,
  usrId,
  profilePicture,
  username,
  text,
  rating,
  date,
  onDelete,
}) => {
  const { userId } = useAuth();
  return (
    <Stack id={id} borderTop={1} borderBottom={1} width={1} py={6}>
      <Stack flexDirection="row" alignSelf="flex-end" gap={3}>
        <Typography minWidth="fit-content" variant="body2">
          {dayjs(date).format("DD MMMM YYYY")}
        </Typography>
        {usrId === userId && (
          <DeleteIcon color="black" fontSize="small" onClick={onDelete} />
        )}
      </Stack>
      <Stack flexDirection={{ xs: "column", sm: "row" }} gap={6}>
        <Stack
          borderRadius={2}
          py={6}
          px={5}
          gap={1}
          maxWidth={{ xs: 1, sm: "200px" }}
          width={1}
          sx={{ backgroundColor: "#F2F2F2" }}
        >
          <Stack flexDirection="row" gap={2} alignItems="center">
            <Avatar
              alt={username}
              src={profilePicture}
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="subtitle2" fontWeight="bold">
              {username}
            </Typography>
          </Stack>
        </Stack>
        <Stack gap={1}>
          <StyledRating value={rating} readOnly={true} title="Оцінка:" />
          <Typography>{text}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ReviewItem;
