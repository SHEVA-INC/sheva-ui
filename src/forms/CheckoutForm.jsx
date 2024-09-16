import { useEffect, useState } from "react";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import userService from "../services/UserService";
import { useForm } from "react-hook-form";
import orderService from "../services/OrderService";
import { Button, MenuItem, Stack, Typography } from "@mui/material";
import novaPostService from "../services/NovaPostService";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import useShoppingCart from "../custom-hooks/useShoppingCart";
import paymentMethods from "../enums/paymentMethods";
import paymentService from "../services/PaymentService";

const CheckoutForm = ({ width }) => {
  const [userData, setUserData] = useState({});
  const [areas, setAreas] = useState([]);
  const [isAreaChosen, setIsAreaChosen] = useState(false);
  const [cities, setCities] = useState([]);
  const [isCityChosen, setIsCityChosen] = useState(false);
  const [warehouses, setWarehouses] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    values: {
      lastName: userData?.last_name || "",
      firstName: userData?.first_name || "",
      middleName: userData?.middle_name || "",
      email: userData?.email || "",
      phoneNumber: userData?.phone_number || "",
      area: "",
      city: "",
      warehouse: "",
    },
    mode: "onBlur",
  });

  const area = watch("area");
  const city = watch("city");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await userService.fetchUser();
        setUserData(response);
        setValue("lastName", response.last_name || "");
        setValue("firstName", response.first_name || "");
        setValue("middleName", response.middle_name || "");
        setValue("email", response.email || "");
        setValue("phoneNumber", response.phone_number || "");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUser();
  }, [setValue]);

  useEffect(() => {
    const getAreas = async () => {
      try {
        const response = await novaPostService.getAreas();
        setAreas(response.data);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };

    getAreas();
  }, []);

  useEffect(() => {
    if (area) {
      const getCities = async (ref) => {
        try {
          const response = await novaPostService.getCities(ref);
          setCities(response.data);
          setIsAreaChosen(true);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };

      getCities(area);
    }
  }, [area, setValue]);

  useEffect(() => {
    if (city) {
      const getWarehouses = async (ref) => {
        try {
          const response = await novaPostService.getWarehouses(ref);
          setWarehouses(response.data);
          setIsCityChosen(true);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };

      getWarehouses(city);
    }
  }, [city, setValue]);

  const { totalPrice, cartId } = useShoppingCart();

  const handleSaveChanges = async (data) => {
    const selectedArea = areas.find((area) => area.Ref === data.area);
    const selectedCity = cities.find((city) => city.Ref === data.city);
    const selectedWarehouse = warehouses.find(
      (warehouse) => warehouse.Ref === data.warehouse,
    );

    const orderData = {
      full_name: `${data.lastName} ${data.firstName} ${data.middleName}`,
      phone_number: data.phoneNumber,
      email: data.email,
      region: selectedArea ? selectedArea.Description : data.area,
      city_town: selectedCity ? selectedCity.Description : data.city,
      post_office_number: selectedWarehouse
        ? selectedWarehouse.Description
        : data.warehouse,
      total_price: totalPrice,
      cart: cartId,
      payment_method: data.paymentMethod,
    };

    try {
      const response = await orderService.createOrder(orderData);

      if (response && response.id) {

        if (orderData.payment_method === "Зараз") {
          try {
            const res = await paymentService.createPayment(response.id);
            if (res && res.pageUrl) {
              window.location.href = res.pageUrl;
            }
          } catch (err) {
            console.error("Error processing payment:", err);
          }
        }
      }
    } catch (err) {
      console.error("Error creating order:", err);
    }
  };

  return (
    <StyledForm
      alignItems="flex-start"
      boxShadow="none"
      borderRadius={0}
      onSubmit={handleSubmit(handleSaveChanges)}
      width={width}
    >
      <Stack
        borderRadius={(theme) => theme.shape.containerBorderRadius}
        border={1}
        borderColor="secondary.light"
        flexDirection="row"
        width={1}
        gap={8}
        px={12}
        py={10}
      >
        <Typography variant="h6" fontWeight="bold" flex={1}>
          Контактна інформація
        </Typography>
        <Stack width={0.7}>
          <StyledFormControlWithTextField
            title="Прізвище"
            htmlFor="lastName"
            variant="p"
            register={{
              ...register("lastName", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
                minLength: {
                  value: 2,
                  message: "Min length is 2 symbols!",
                },
                maxLength: {
                  value: 100,
                  message: "Max length is 100 symbols!",
                },
              }),
            }}
            helperText={errors?.lastName ? errors.lastName.message : " "}
            error={!!errors?.lastName}
          />
          <StyledFormControlWithTextField
            title="Ім'я"
            htmlFor="firstName"
            variant="p"
            register={{
              ...register("firstName", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
                minLength: {
                  value: 2,
                  message: "Min length is 2 symbols!",
                },
                maxLength: {
                  value: 100,
                  message: "Max length is 100 symbols!",
                },
              }),
            }}
            helperText={errors?.firstName ? errors.firstName.message : " "}
            error={!!errors?.firstName}
          />
          <StyledFormControlWithTextField
            title="По батькові"
            htmlFor="middleName"
            variant="p"
            register={{
              ...register("middleName", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
                minLength: {
                  value: 2,
                  message: "Min length is 2 symbols!",
                },
                maxLength: {
                  value: 100,
                  message: "Max length is 100 symbols!",
                },
              }),
            }}
            helperText={errors?.middleName ? errors.middleName.message : " "}
            error={!!errors?.middleName}
          />
          <StyledFormControlWithTextField
            title="Пошта"
            htmlFor="email"
            variant="p"
            register={{
              ...register("email", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
                maxLength: {
                  value: 100,
                  message: "Max length is 100 symbols!",
                },
                pattern: {
                  value:
                    /[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Z|a-z]{2,}/,
                  message: "Enter a valid email!",
                },
              }),
            }}
            helperText={errors?.email ? errors.email.message : " "}
            error={!!errors?.email}
          />
          <StyledFormControlWithTextField
            title="Номер телефону"
            htmlFor="phoneNumber"
            variant="p"
            register={{
              ...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
                maxLength: {
                  value: 15,
                  message: "Max length is 15 symbols!",
                },
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: "Enter a valid phone number: +380",
                },
              }),
            }}
            helperText={errors?.phoneNumber ? errors.phoneNumber.message : " "}
            error={!!errors?.phoneNumber}
          />
        </Stack>
      </Stack>
      <Stack
        borderRadius={(theme) => theme.shape.containerBorderRadius}
        border={1}
        borderColor="secondary.light"
        flexDirection="row"
        width={1}
        gap={8}
        px={12}
        py={10}
      >
        <Stack flex={1}>
          <Typography variant="h6" fontWeight="bold">
            Адреса доставки
          </Typography>
          <Typography variant="p" fontWeight="bold">
            (Нова пошта)
          </Typography>
        </Stack>
        <Stack width={0.7}>
          <StyledFormControlWithSelect
            title="Область"
            selectId="area-select"
            variant="p"
            displayEmpty={true}
            register={{
              ...register("area", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
              }),
            }}
            defaultValue=""
            gap={2}
            error={!!errors?.area}
            helperText={errors?.area ? errors.area.message : " "}
          >
            <MenuItem disabled value="">
              Виберіть область
            </MenuItem>
            {areas?.map((area) => (
              <MenuItem key={area.Ref} value={area.Ref}>
                {area.Description}
              </MenuItem>
            ))}
          </StyledFormControlWithSelect>

          <StyledFormControlWithSelect
            title="Населений пункт"
            selectId="city-select"
            variant="p"
            defaultValue=""
            displayEmpty={true}
            register={{
              ...register("city", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
              }),
            }}
            disabled={!isAreaChosen}
            gap={2}
            error={!!errors?.city}
            helperText={errors?.city ? errors.city.message : " "}
          >
            <MenuItem disabled value="">
              Виберіть населений пункт
            </MenuItem>
            {cities?.map((city) => (
              <MenuItem key={city.Ref} value={city.Ref}>
                {city.Description}
              </MenuItem>
            ))}
          </StyledFormControlWithSelect>

          <StyledFormControlWithSelect
            title="Відділення"
            selectId="warehouses-select"
            variant="p"
            defaultValue=""
            displayEmpty={true}
            register={{
              ...register("warehouse", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
              }),
            }}
            disabled={!isCityChosen}
            gap={2}
            error={!!errors?.warehouse}
            helperText={errors?.warehouse ? errors.warehouse.message : " "}
          >
            <MenuItem disabled value="">
              Виберіть місто
            </MenuItem>
            {warehouses?.map((warehouse) => (
              <MenuItem key={warehouse.Ref} value={warehouse.Ref}>
                {warehouse.Description}
              </MenuItem>
            ))}
          </StyledFormControlWithSelect>
        </Stack>
      </Stack>

      <Stack
        borderRadius={(theme) => theme.shape.containerBorderRadius}
        border={1}
        borderColor="secondary.light"
        flexDirection="row"
        justifyContent="space-between"
        width={1}
        gap={8}
        px={12}
        py={10}
      >
        <Typography variant="h6" fontWeight="bold">
          Оплата
        </Typography>
        <Stack flexDirection="row" width={0.7}>
          <StyledFormControlWithSelect
            title="Спосіб оплати"
            variant="p"
            selectId="payment-method-select"
            defaultValue={Object.values(paymentMethods)[1]}
            register={{
              ...register("paymentMethod", {
                required: {
                  value: true,
                  message: "Field is required!",
                },
              }),
            }}
            gap={2}
          >
            {Object.entries(paymentMethods).map(([key, value]) => (
              <MenuItem key={key} value={value}>
                {value}
              </MenuItem>
            ))}
          </StyledFormControlWithSelect>
        </Stack>
      </Stack>

      <Button variant="contained" size="large" type="submit">
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Зберегти
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default CheckoutForm;
