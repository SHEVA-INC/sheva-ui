import { Button, MenuItem, Stack, Typography, Box } from "@mui/material";
import StyledColorPicker from "../styled/StyledColorPicker";
import StyledFormControlWithSelect from "../styled/StyledFormControlWithSelect";
import StyledTitle from "../styled/StyledTitle";
import { useEffect, useState } from "react";
import shoesService from "../../services/ShoesService";
import upperCaseFirstLetter from "../../utils/upperCaseFirstLetter";
import { useNavigate, useParams } from "react-router-dom";
import ShoesDetailsImageSlider from "../ShoesDetailsImageSlider";
import useAuth from "../../auth/useAuth";
import { MANAGE_SHOES_DETAILS_ROUTE } from "../../app/Routes";
import AddShoesToShoppingCartForm from "../../forms/AddShoesToShoppingCartForm";
import shoppingCartService from "../../services/ShoppingCartService";
import { useForm } from "react-hook-form";
import useShoppingCart from "../../custom-hooks/useShoppingCart";

const ShoesDetails = () => {
  const [shoesDetails, setShoesDetails] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [countValue, setCountValue] = useState(1);

  const { shoesId } = useParams();
  const { userRole } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, watch, setValue } = useForm({
    mode: "all",
    defaultValues: {
      size: "",
    },
  });

  useEffect(() => {
    const getShoesDetails = async () => {
      try {
        const response = await shoesService.fetchShoesDetails(shoesId);
        setShoesDetails(response);
        setMainImage(response.main_image);

        if (response.sizes && response.sizes.length > 0) {
          setValue("size", response.sizes[0].size);
        }
      } catch (error) {
        console.error("Error fetching shoes details:", error);
      }
    };

    getShoesDetails();
  }, [shoesId, setValue]);

  const selectedSize = watch("size");

  const { shoppingCartList } = useShoppingCart();

  const isInCart = () => {
    return shoppingCartList.some(
      (item) => item?.id === shoesDetails?.id && item?.size == selectedSize,
    );
  };

  let isItemInCart = isInCart();

  if (!shoesDetails) {
    return <Typography>Loading...</Typography>;
  }

  const allImages = [
    shoesDetails.main_image,
    ...shoesDetails.images.map((img) => img.image_url),
  ];

  const onSubmit = async (data) => {
    const cartParams = {
      product_id: shoesDetails.id,
      quantity: countValue,
      ...data,
    };

    try {
      if (!isItemInCart) {
        await shoppingCartService.addShoesToShoppingCart(cartParams);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleNavigateToManageBootsRoute = (id) => {
    navigate(MANAGE_SHOES_DETAILS_ROUTE.replace(":shoesId", id));
  };

  return (
    <Stack gap={6}>
      {userRole === "admin" && (
        <Stack flexDirection="row" alignSelf="flex-end" gap={5}>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleNavigateToManageBootsRoute(shoesId)}
          >
            Редагувати
          </Button>
        </Stack>
      )}

      <>
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={8}
        >
          <Stack width={{ xs: 1, md: 0.5 }}>
            <ShoesDetailsImageSlider
              images={allImages}
              mainImage={mainImage}
              setMainImage={setMainImage}
            />
          </Stack>

          <Stack width={{ xs: 1, md: 0.5 }} gap={{ xs: 4, sm: 2, md: 6 }}>
            <Typography variant="h4" fontWeight="bold">
              {upperCaseFirstLetter(shoesDetails.brand)} {shoesDetails.name}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {shoesDetails.price}
            </Typography>
            <Typography variant="h6">Тип: {shoesDetails.type}</Typography>
            <StyledColorPicker
              colors={shoesDetails.color}
              selectedColor={shoesDetails.color}
              showColorsName={true}
              gap={1}
              disabled={true}
            />
            <StyledFormControlWithSelect
              title="Розмір"
              selectId="size-select"
              defaultValue={shoesDetails.sizes[0].size}
              formControlSize="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
              register={{
                ...register("size", {
                  required: {
                    value: true,
                    message: "Field is required!",
                  },
                }),
              }}
            >
              {shoesDetails.sizes.map((size) => (
                <MenuItem key={size.size} value={size.size}>
                  {size.size}
                </MenuItem>
              ))}
            </StyledFormControlWithSelect>
            <AddShoesToShoppingCartForm
              countValue={countValue}
              setCountValue={setCountValue}
              onSubmit={handleSubmit(onSubmit)}
              disabled={isItemInCart}
            />
          </Stack>
        </Stack>

        <StyledTitle title="Опис" />
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          width={1}
        >
          <Typography variant="h6">{shoesDetails.description}</Typography>
          <Stack width={{ xs: 1, sm: 0.5 }} gap={10}>
            <Stack
              width={0.6}
              alignSelf={{ xs: "flex-start", sm: "center", md: "flex-start" }}
            >
              <Box
                component="img"
                src={shoesDetails.images[1].image_url}
                alt={shoesDetails.name}
                height="max-content"
              />
            </Stack>
            <Stack
              width={0.6}
              alignSelf={{ xs: "flex-end", sm: "center", md: "flex-end" }}
            >
              <Box
                component="img"
                src={shoesDetails.images[2].image_url}
                alt={shoesDetails.name}
                height="max-content"
              />
            </Stack>
          </Stack>
        </Stack>
      </>
    </Stack>
  );
};

export default ShoesDetails;
