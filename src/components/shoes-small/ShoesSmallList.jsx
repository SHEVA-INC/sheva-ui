import { Stack } from "@mui/material";
import ShoesSmall from "./ShoesSmall";
import ShoesSmallItem from "./ShoesSmallItem";
import StyledTitle from "../styled/StyledTitle";

const ShoesSmallList = ({ title }) => {
  return (
    <Stack gap={6}>
      <StyledTitle variant="h5" title={title} textAlign="left" />
      {ShoesSmall.map((shoesSmallItem) => (
        <ShoesSmallItem
          key={shoesSmallItem.id}
          imageSrc={shoesSmallItem.image}
          name={shoesSmallItem.name}
          description={shoesSmallItem.description}
          price={shoesSmallItem.price}
        />
      ))}
    </Stack>
  );
};

export default ShoesSmallList;
