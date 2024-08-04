import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import shoesBrands from "../enums/shoesBrands";
import shoesTypes from "../enums/shoesTypes";
import { useForm } from "react-hook-form";
import DeleteIcon from "../icons/DeleteIcon";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";
import shoesColors from "../enums/shoesColors";
import StyledFileDropzone from "../components/styled/StyledFileDropzone";
import StyledFilesDropzone from "../components/styled/StyledFilesDropzone";

const AddShoesForm = () => {
  const [sizes, setSizes] = useState([]);
  const [isEditMainPhotoOpen, setIsEditMainPhotoOpen] = useState(false);
  const [uploadedMainImage, setUploadedMainImage] = useState(null);
  const [isEditPhotosOpen, setIsEditPhotosOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleEditPhotosClose = () => {
    setIsEditPhotosOpen(false);
  };

  const handleImagesChange = (files) => {
    setUploadedImages(files);
  };

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
      brand: Object.keys(shoesBrands)[0],
      type: Object.values(shoesTypes)[0],
      color: Object.keys(shoesColors)[0],
    },
  });

  useEffect(() => {
    if (uploadedMainImage) {
      setValue("main_image", uploadedMainImage);
    }
  }, [uploadedMainImage, setValue]);

  useEffect(() => {
    if (uploadedImages.length > 0) {
      setValue("uploaded_images", uploadedImages);
    }
  }, [uploadedImages, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("type", data.type);
    formData.append("color", data.color);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("main_image", data.main_image);
    data.uploaded_images.forEach((file) => {
      formData.append("uploaded_images", file);
    });
    sizes.forEach((size, idx) => {
      formData.append(`sizes[${idx}]size`, size.size);
      formData.append(`sizes[${idx}]stock`, size.stock);
    });

    try {
      await shoesService.createShoes(formData);
      setValue("name", "");
      setValue("brand", Object.keys(shoesBrands)[0]);
      setValue("type", Object.values(shoesTypes)[0]);
      setValue("color", Object.keys(shoesColors)[0]);
      setValue("price", "");
      setValue("description", "");
      setValue("main_image", {});
      setValue("images", []);
      setSizes([]);
      setUploadedMainImage(null);
      setUploadedImages([]);
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
        title="Бренд"
        selectId="brand-select"
        defaultValue={Object.keys(shoesBrands)[0]}
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
        defaultValue={Object.values(shoesTypes)[0]}
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
        defaultValue={Object.keys(shoesColors)[0]}
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
      <Stack flexDirection="column" alignSelf="flex-start">
        <Typography variant="h6" fontWeight="bold">
          Головне фото
        </Typography>
        <Button onClick={() => setIsEditMainPhotoOpen(true)}>
          {uploadedMainImage ? "Редагувати фото" : "Додати Фото"}
        </Button>
        <StyledFileDropzone
          accept="image/*"
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
      <Stack flexDirection="column" alignSelf="flex-start">
        <Typography variant="h6" fontWeight="bold">
          Фото
        </Typography>
        <Button onClick={() => setIsEditPhotosOpen(true)}>
          {uploadedImages.length > 0 ? "Редагувати фото" : "Додати Фото"}
        </Button>
        <StyledFilesDropzone
          accept="image/*"
          open={isEditPhotosOpen}
          onClose={handleEditPhotosClose}
          onFileChange={handleImagesChange}
          uploadedFiles={uploadedImages}
          setUploadedFiles={setUploadedImages}
          register={{ ...register("uploaded_images") }}
        />
        <Stack direction="column" spacing={2}>
          {uploadedImages.length > 0 &&
            uploadedImages.map((uploadedImage, idx) => (
              <Box
                key={idx}
                component="img"
                src={uploadedImage ? URL.createObjectURL(uploadedImage) : {}}
                alt={`Shoes ${idx + 1}`}
                sx={{ width: 300, height: "auto" }}
              />
            ))}
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

export default AddShoesForm;
