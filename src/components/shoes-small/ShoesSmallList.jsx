import { Stack } from "@mui/material";
import ShoesSmallItem from "./ShoesSmallItem";
import StyledTitle from "../styled/StyledTitle";

const ShoesSmallList = ({ title, shoesSmallData }) => {
  return (
    <Stack gap={6} width={1} maxWidth={{ sm: "420px" }}>
      <StyledTitle variant="h5" title={title} textAlign="left" />
      {shoesSmallData?.map((shoesSmallItem) => (
        <ShoesSmallItem
          key={shoesSmallItem.id}
          imageSrc={shoesSmallItem.image}
          name={shoesSmallItem.name}
          description={shoesSmallItem.description}
        />
      ))}
    </Stack>
  );
};
export default ShoesSmallList;
