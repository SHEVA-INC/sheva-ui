import { useForm } from "react-hook-form";
import StyledForm from "../components/styled/StyledForm";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import accessoriesService from "../services/AccessoriesService";
import accessoriesTypes from "../enums/accessoriesTypes";
import StyledFileDropzone from "../components/styled/StyledFileDropzone";

const EditDetailsAccessoriesDataForm = ({ accessoriesId }) => {
  const [accessoriesDetails, setAccessoriesDetails] = useState(null);
  const [isEditMainPhotoOpen, setIsEditMainPhotoOpen] = useState(false);
  const [uploadedMainImage, setUploadedMainImage] = useState(null);
  const [mainImageUrl, setMainImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm({
    values: {
      name: accessoriesDetails?.name || "",
      type: accessoriesDetails?.type || "",
      price: accessoriesDetails?.price || "",
      size: accessoriesDetails?.size || "",
      description: accessoriesDetails?.description || "",
    },
    defaultValues: {
      name: accessoriesDetails?.name || "",
      type: accessoriesDetails?.type || "",
      price: accessoriesDetails?.price || "",
      size: accessoriesDetails?.size || "",
      description: accessoriesDetails?.description || "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    const getShoesDetails = async () => {
      try {
        const response =
          await accessoriesService.fetchAccessoriesDetails(accessoriesId);
        setAccessoriesDetails(response);
        setMainImageUrl(response.main_image);

        setValue("name", response.name);
        setValue("type", response.type);
        setValue("price", response.price);
        setValue("size", response.size);
        setValue("description", response.description);
      } catch (error) {
        console.error("Error fetching shoes details:", error);
      }
    };

    getShoesDetails();
  }, [accessoriesId, setValue]);

  const handleEditMainPhotoClose = () => {
    setIsEditMainPhotoOpen(false);
  };

  const handleMainImageChange = (file) => {
    setUploadedMainImage(file);
    setValue("mainImage", file, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (data) => {
    const changedFields = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = data[key];
      return acc;
    }, {});

    if (!Object.keys(changedFields).length) return;

    const formData = new FormData();

    Object.keys(changedFields).forEach((key) => {
      if (key === "mainImage" && changedFields[key] instanceof File) {
        formData.append("main_image", changedFields[key]);
      } else if (
        changedFields[key] !== undefined &&
        changedFields[key] !== null
      ) {
        formData.append(key, changedFields[key]);
      }
    });

    try {
      const result = await accessoriesService.updateAccessoriesDetails(
        accessoriesId,
        formData,
      );
      setAccessoriesDetails((prev) => ({ ...prev, result }));
      console.log("Accessories details updated successfully.");
    } catch (error) {
      console.error("Error updating accessories details:", error);
    }
  };

  useEffect(() => {
    console.log(accessoriesDetails);
  }, [accessoriesDetails]);

  if (!accessoriesDetails) {
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
        title="Тип"
        selectId="type-select"
        defaultValue={accessoriesDetails?.type}
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

      <Stack flexDirection="column" alignSelf="flex-start">
        <Typography variant="h6" fontWeight="bold">
          Головне фото
        </Typography>
        <Button onClick={() => setIsEditMainPhotoOpen(true)}>
          Редагувати Фото
        </Button>
        <StyledFileDropzone
          open={isEditMainPhotoOpen}
          onClose={handleEditMainPhotoClose}
          onFileChange={handleMainImageChange}
          uploadedFile={uploadedMainImage}
          setUploadedFile={setUploadedMainImage}
          register={{ ...register("mainImage") }}
        />
        <Box
          component="img"
          src={
            uploadedMainImage
              ? URL.createObjectURL(uploadedMainImage)
              : mainImageUrl
          }
          alt="Main shoe"
          sx={{ width: 300, height: "auto" }}
        />
      </Stack>
      <Button
        variant="contained"
        size="large"
        type="submit"
        sx={{ alignSelf: "flex-end" }}
      >
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Зберегти
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default EditDetailsAccessoriesDataForm;
