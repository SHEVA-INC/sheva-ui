import { Stack } from "@mui/material";
import ShoesSmall from "./ShoesSmall";
import ShoesSmallItem from "./ShoesSmallItem";
import StyledTitle from "../styled/StyledTitle";

const ShoesSmallList = ({ title }) => {
  return (
    <Stack gap={6} width={1} maxWidth={{ sm: "420px" }}>
      <StyledTitle variant="h5" title={title} textAlign="left" />
      {ShoesSmall.map((shoesSmallItem) => (
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
