import { Button, Stack, Typography } from "@mui/material";
import StyledTitle from "../styled/StyledTitle";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import {
  MANAGE_ACCESSORIES_DETAILS_ROUTE,
  SIGN_IN_ROUTE,
} from "../../app/Routes";
import AddShoesToShoppingCartForm from "../../forms/AddShoesToShoppingCartForm";
import shoppingCartService from "../../services/ShoppingCartService";
import { useForm } from "react-hook-form";
import useShoppingCart from "../../custom-hooks/useShoppingCart";
import accessoriesService from "../../services/AccessoriesService";

const AccessoriesDetails = () => {
  const [accessoriesDetails, setAccessoriesDetails] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [countValue, setCountValue] = useState(1);

  const { accessoriesId } = useParams();
  const { userRole, authorized } = useAuth();
  const navigate = useNavigate();

  const { handleSubmit } = useForm({
    mode: "all",
  });

  useEffect(() => {
    const getAccessoriesDetails = async () => {
      try {
        const response =
          await accessoriesService.fetchAccessoriesDetails(accessoriesId);
        setAccessoriesDetails(response);
        setMainImage(response.main_image);
      } catch (error) {
        console.error("Error fetching accessories details:", error);
      }
    };

    getAccessoriesDetails();
  }, [accessoriesId]);

  const { shoppingCartList, isAddedToCart } = useShoppingCart();

  const isInCart = () => {
    return shoppingCartList.some(
      (item) =>
        item?.product_type === "accessory" &&
        item?.id === accessoriesDetails?.id &&
        item?.size == accessoriesDetails?.size,
    );
  };

  let isItemInCart = isInCart() || isAddedToCart;

  if (!accessoriesDetails) {
    return <Typography>Loading...</Typography>;
  }

  const onSubmit = async (data) => {
    console.log(data);

    const cartParams = {
      product_type: "accessory",
      product_id: accessoriesDetails.id,
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

  const handleNavigateToManageAccessoriesRoute = (id) => {
    navigate(MANAGE_ACCESSORIES_DETAILS_ROUTE.replace(":accessoriesId", id));
  };

  const descriptionParagraphs = accessoriesDetails.description.split("/n");

  return (
    <Stack gap={6}>
      {userRole === "admin" && (
        <Stack flexDirection="row" alignSelf="flex-end" gap={5}>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              handleNavigateToManageAccessoriesRoute(accessoriesId)
            }
          >
            Редагувати
          </Button>
        </Stack>
      )}

      <>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={8}
        >
          <Stack width={{ xs: 1, md: 0.5 }}>
            <img
              src={mainImage}
              alt="Main"
              style={{
                width: "100%",
                aspectRatio: 4.5 / 3,
                objectFit: "cover",
              }}
              onClick={() => setMainImage(mainImage)}
            />
          </Stack>
          <Stack width={{ xs: 1, md: 0.5 }} gap={{ xs: 4, sm: 2, md: 6 }}>
            <Typography variant="h4" fontWeight="bold">
              {accessoriesDetails.name}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {accessoriesDetails.price}
            </Typography>
            <Typography variant="h6">Тип: {accessoriesDetails.type}</Typography>
            <Typography variant="h6">
              Розмір: {accessoriesDetails.size}
            </Typography>
            {authorized() ? (
              <AddShoesToShoppingCartForm
                countValue={countValue}
                setCountValue={setCountValue}
                onSubmit={handleSubmit(onSubmit)}
                disabled={isItemInCart}
              />
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate(SIGN_IN_ROUTE);
                }}
                sx={{ alignSelf: "flex-end" }}
              >
                <Typography px={3}>Додати в корзину</Typography>
              </Button>
            )}
          </Stack>
        </Stack>

        <StyledTitle title="Опис" />
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          width={1}
          gap={8}
        >
          <Stack width={{ xs: 1, sm: 0.5 }}>
            {descriptionParagraphs.map((paragraph, index) => (
              <Typography key={index} variant="h6" sx={{ textIndent: "2em" }}>
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </>
    </Stack>
  );
};

export default AccessoriesDetails;
