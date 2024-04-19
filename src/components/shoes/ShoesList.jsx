import { Stack } from "@mui/material";
import Shoes from "./Shoes";
import ShoesItem from "./ShoesItem";

const ShoesList = ({ order }) => {
  return (
    <Stack gap={5} flex={1} order={order}>
      {Shoes.map((shoesItem) => (
        <ShoesItem
          key={shoesItem.id}
          images={shoesItem.images}
          mainImage={shoesItem.mainImage}
          name={shoesItem.name}
          description={shoesItem.description}
          price={shoesItem.price}
          colors={shoesItem.colors}
          sizes={shoesItem.sizes}
          liked={shoesItem.liked}
        />
      ))}
    </Stack>
  );
};

export default ShoesList;
