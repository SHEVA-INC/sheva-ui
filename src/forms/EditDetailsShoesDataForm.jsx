import { useForm } from "react-hook-form";
import StyledForm from "../components/styled/StyledForm";
import {
  Button,
  IconButton,
  MenuItem,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import shoesService from "../services/ShoesService";
import { useEffect, useState } from "react";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import shoesTypes from "../enums/shoesTypes";
import shoesBrands from "../enums/shoesBrands";

const EditDetailsShoesDataForm = ({ shoesId }) => {
  const [shoesDetails, setShoesDetails] = useState(null);
  const [sizes, setSizes] = useState([]);

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...sizes];
    newSizes[index] = { ...newSizes[index], [field]: value };
    setSizes(newSizes);
  };

  const addSize = () => {
    setSizes([...sizes, { size: "", stock: "" }]);
  };

  const deleteSize = (index) => {
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

  const { register, handleSubmit } = useForm({
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
    <StyledForm onSubmit={handleSubmit(onSubmit)} boxShadow="none">
      <StyledFormControlWithTextField
        title="Назва"
        htmlFor="name"
        register={{
          ...register("name"),
        }}
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
      <StyledFormControlWithTextField
        title="Ціна"
        htmlFor="price"
        register={{
          ...register("price"),
        }}
      />
      <StyledFormControlWithTextField
        title="Опис"
        htmlFor="description"
        multiline={true}
        minRows={1}
        register={{
          ...register("description"),
        }}
      />
      <Stack
        flexDirection="row"
        alignSelf="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Typography>Розміри</Typography>
        {sizes.map((size, index) => (
          <Stack
            key={index}
            flexDirection="row"
            alignItems="center"
            spacing={2}
          >
            <TextField
              label={`Розмір ${index + 1}`}
              value={size.size}
              onChange={(e) => handleSizeChange(index, "size", e.target.value)}
              variant="outlined"
            />
            <TextField
              label={`Кількість ${index + 1}`}
              value={size.stock}
              onChange={(e) => handleSizeChange(index, "stock", e.target.value)}
              variant="outlined"
            />
            <IconButton onClick={() => deleteSize(index)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}
        <Button variant="outlined" onClick={addSize}>
          Додати Розмір
        </Button>
      </Stack>
      <Button variant="contained" size="large" type="submit">
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Зберегти
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default EditDetailsShoesDataForm;
