import { Pagination, PaginationItem } from "@mui/material";
import ArrowIconLeft from "../../icons/ArrowIconLeft";
import ArrowIcon from "../../icons/ArrowIcon";

const StyledPagination = ({
  totalPages,
  pageNumber,
  onPageNumberChange,
  sx,
}) => {
  return (
    <Pagination
      size="large"
      color="primary"
      variant="text"
      count={totalPages}
      page={pageNumber}
      onChange={onPageNumberChange}
      renderItem={(item) => (
        <PaginationItem
          components={{
            previous: ArrowIconLeft,
            next: ArrowIcon,
          }}
          {...item}
        />
      )}
      sx={{
        ...sx,
        ".MuiPaginationItem-root": {
          border: 1,
          borderColor: (theme) => theme.palette.secondary.light,
        },
        ".MuiPaginationItem-previousNext": {
          border: 2,
          borderColor: (theme) => theme.palette.primary.main,
        },
      }}
    />
  );
};

export default StyledPagination;
