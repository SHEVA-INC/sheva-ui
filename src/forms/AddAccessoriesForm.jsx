import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import StyledFileDropzone from "../components/styled/StyledFileDropzone";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";
import accessoriesService from "../services/AccessoriesService";
import accessoriesTypes from "../enums/accessoriesTypes";

const AddAccessoriesForm = () => {
  const [isEditMainPhotoOpen, setIsEditMainPhotoOpen] = useState(false);
  const [uploadedMainImage, setUploadedMainImage] = useState(null);

  const navigate = useNavigate();

  const handleEditMainPhotoClose = () => {
    setIsEditMainPhotoOpen(false);
  };

  const handleMainImageChange = (file) => {
    setUploadedMainImage(file);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    values: {
      type: Object.values(accessoriesTypes)[0],
    },
  });

  useEffect(() => {
    if (uploadedMainImage) {
      setValue("main_image", uploadedMainImage);
    }
  }, [uploadedMainImage, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("type", data.type);
    formData.append("price", data.price);
    formData.append("size", data.size);
    formData.append("description", data.description);
    formData.append("main_image", data.main_image);

    console.log(data.main_image);

    console.log(formData);

    try {
      await accessoriesService.createAccessories(formData);
      navigate(CATALOG_ROUTE);
    } catch (error) {
      console.error("Error creating shoes:", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} boxShadow="none">
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
        title="Тип"
        selectId="type-select"
        defaultValue={Object.values(accessoriesTypes)[0]}
        register={{
          ...register("type"),
        }}
      >
        {Object.values(accessoriesTypes).map((typeItem) => (
          <MenuItem key={typeItem} value={typeItem}>
            {typeItem}
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
          }),
        }}
        error={!!errors?.price}
        helperText={errors?.price ? errors.price.message : " "}
      />

      <StyledFormControlWithTextField
        title="Розмір"
        htmlFor="size"
        register={{
          ...register("size", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 1,
              message: "Min length is 1 symbol!",
            },
            maxLength: {
              value: 100,
              message: "Max length is 100 symbols!",
            },
          }),
        }}
        error={!!errors?.size}
        helperText={errors?.size ? errors.size.message : " "}
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
              value: 1,
              message: "Min length is 1 symbol!",
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

      <Stack flexDirection="column" alignSelf="flex-start">
        <Typography variant="h6" fontWeight="bold">
          Головне фото
        </Typography>
        <Button onClick={() => setIsEditMainPhotoOpen(true)}>
          {uploadedMainImage ? "Редагувати фото" : "Додати Фото"}
        </Button>
        <StyledFileDropzone
          open={isEditMainPhotoOpen}
          onClose={handleEditMainPhotoClose}
          onFileChange={handleMainImageChange}
          uploadedFile={uploadedMainImage}
          setUploadedFile={setUploadedMainImage}
          register={{ ...register("main_image") }}
        />
        {uploadedMainImage && (
          <Box
            component="img"
            src={
              uploadedMainImage ? URL.createObjectURL(uploadedMainImage) : {}
            }
            alt="Main shoes"
            sx={{ width: 300, height: "auto" }}
          />
        )}
      </Stack>

      <Button variant="contained" size="large" type="submit">
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Зберегти
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default AddAccessoriesForm;
