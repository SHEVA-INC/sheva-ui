import { Stack } from "@mui/material";
import ShoesAdItem from "./ShoesAdItem";
import ShoesAds from "./ShoesAds";

const ShoesAdList = () => {
  return (
    <Stack flexDirection="row" gap={5}>
      {ShoesAds.map((shoesAdItem) => (
        <ShoesAdItem
          key={shoesAdItem.id}
          name={shoesAdItem.name}
          text={shoesAdItem.text}
          image={shoesAdItem.image}
        />
      ))}
    </Stack>
  );
};

export default ShoesAdList;
