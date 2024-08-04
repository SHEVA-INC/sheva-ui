import { useForm } from "react-hook-form";
import StyledForm from "../components/styled/StyledForm";
import { Button, IconButton, MenuItem, Stack, Typography } from "@mui/material";
import shoesService from "../services/ShoesService";
import { useEffect, useState } from "react";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import shoesTypes from "../enums/shoesTypes";
import shoesBrands from "../enums/shoesBrands";
import DeleteIcon from "../icons/DeleteIcon";
import shoesColors from "../enums/shoesColors";
import StyledFormControlWithCheckbox from "../components/styled/StyledFormControlWithCheckbox";

const EditDetailsShoesDataForm = ({ shoesId }) => {
  const [shoesDetails, setShoesDetails] = useState(null);
  const [sizes, setSizes] = useState([]);

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...sizes];
    newSizes[index] = { ...newSizes[index], [field]: value };
    setSizes(newSizes);
  };

  const handleAddSize = () => {
    setSizes([...sizes, { size: "", stock: "" }]);
  };

  const handleDeleteSize = (index) => {
    const newSizes = [...sizes];
    newSizes.splice(index, 1);
    setSizes(newSizes);
  };

  useEffect(() => {
    const getShoesDetails = async () => {
      try {
        const response = await shoesService.fetchShoesDetails(shoesId);
        setShoesDetails(response);
        setSizes(response.sizes);
      } catch (error) {
        console.error("Error fetching shoes details:", error);
      }
    };

    getShoesDetails();
  }, [shoesId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: shoesDetails?.name || "",
      brand: shoesDetails?.brand || "",
      type: shoesDetails?.type || "",
      price: shoesDetails?.price || "",
      color: shoesDetails?.color || "",
      description: shoesDetails?.description || "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const updatedData = {
      ...data,
      sizes: sizes.map((size) => ({
        size: size.size,
        stock: size.stock,
      })),
    };

    console.log(updatedData);

    try {
      const response = await shoesService.updateShoesDetails(
        shoesId,
        updatedData,
      );
      console.log(response);
    } catch (error) {
      console.error("Error updating shoes details:", error);
    }
  };

  if (!shoesDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      boxShadow="none"
      alignItems="flex-start"
    >
      <StyledFormControlWithTextField
        title="Назва"
        htmlFor="name"
        register={{
          ...register("name", {
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
              message: "Max length is 50 symbols!",
            },
          }),
        }}
        error={!!errors?.name}
        helperText={errors?.name ? errors.name.message : " "}
      />
      <StyledFormControlWithSelect
        title="Бренд"
        selectId="brand-select"
        defaultValue={shoesDetails?.brand}
        register={{
          ...register("brand"),
        }}
      >
        {Object.keys(shoesBrands).map((brandItem) => (
          <MenuItem key={brandItem} value={brandItem}>
            {brandItem}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>
      <StyledFormControlWithSelect
        title="Тип"
        selectId="type-select"
        defaultValue={shoesDetails?.type}
        register={{
          ...register("type"),
        }}
      >
        {Object.values(shoesTypes).map((typeItem) => (
          <MenuItem key={typeItem} value={typeItem}>
            {typeItem}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>
      <StyledFormControlWithSelect
        title="Колір"
        selectId="color-select"
        defaultValue={shoesDetails?.color}
        register={{
          ...register("color"),
        }}
      >
        {Object.entries(shoesColors).map(([key, value]) => (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>
      <StyledFormControlWithTextField
        title="Ціна"
        htmlFor="price"
        register={{
          ...register("price", {
            required: {
              value: true,
              message: "Field is required!",
            },
            min: {
              value: 100,
              message: "Min value is 100!",
            },
            max: {
              value: 10000,
              message: "Max value is 10000!",
            },
          }),
        }}
        error={!!errors?.price}
        helperText={errors?.price ? errors.price.message : " "}
      />
      <StyledFormControlWithTextField
        title="Опис"
        htmlFor="description"
        multiline={true}
        minRows={2}
        register={{
          ...register("description", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 100,
              message: "Min length is 100 symbols!",
            },
            maxLength: {
              value: 2000,
              message: "Max length is 2000 symbols!",
            },
          }),
        }}
        error={!!errors?.description}
        helperText={errors?.description ? errors.description.message : " "}
      />
      <Stack flexDirection="column" alignSelf="flex-start" spacing={2}>
        <Typography variant="h6" fontWeight="bold">
          Розміри
        </Typography>
        {sizes.map((size, index) => (
          <Stack key={index} flexDirection="row" alignItems="center" gap={2}>
            <StyledFormControlWithTextField
              title={`Розмір ${index + 1}`}
              variant="p"
              value={size.size}
              onChange={(e) => handleSizeChange(index, "size", e.target.value)}
            />
            <StyledFormControlWithTextField
              title={`Кількість ${index + 1}`}
              variant="p"
              value={size.stock}
              onChange={(e) => handleSizeChange(index, "stock", e.target.value)}
            />
            <IconButton onClick={() => handleDeleteSize(index)}>
              <DeleteIcon color="black" />
            </IconButton>
          </Stack>
        ))}
        <Button variant="outlined" onClick={handleAddSize}>
          Додати Розмір
        </Button>
      </Stack>

      <Stack>
        <StyledFormControlWithCheckbox
          register={{ ...register("new") }}
          label={
            <Typography fontWeight="bold" variant="body1">
              Нове
            </Typography>
          }
        />
        <StyledFormControlWithCheckbox
          register={{ ...register("popular") }}
          label={
            <Typography fontWeight="bold" variant="body1">
              Популярне
            </Typography>
          }
        />
      </Stack>

      <Button
        variant="contained"
        size="large"
        type="submit"
        sx={{ alignSelf: "flex-start" }}
      >
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Зберегти
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default EditDetailsShoesDataForm;
