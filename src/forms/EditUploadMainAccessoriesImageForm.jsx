import { useForm } from "react-hook-form";
import StyledForm from "../components/styled/StyledForm";
import { Box, Button, Stack, Typography } from "@mui/material";
import shoesService from "../services/ShoesService";
import { useEffect, useState } from "react";
import StyledFileDropzone from "../components/styled/StyledFileDropzone";
import accessoriesService from "../services/AccessoriesService";

const EditUploadMainAccessoriesImageForm = ({ accessoriesId }) => {
  const [isEditMainPhotoOpen, setIsEditMainPhotoOpen] = useState(false);
  const [uploadedMainImage, setUploadedMainImage] = useState(null);
  const [mainImageUrl, setMainImageUrl] = useState("");

  const handleEditMainPhotoClose = () => {
    setIsEditMainPhotoOpen(false);
  };

  const handleMainImageChange = (file) => {
    setUploadedMainImage(file);
  };

  useEffect(() => {
    const getAccessoriesDetails = async (accessoriesId) => {
      try {
        const response =
          await accessoriesService.fetchAccessoriesDetails(accessoriesId);
        setMainImageUrl(response.main_image);
      } catch (error) {
        console.error("Error fetching shoes details:", error);
      }
    };

    getAccessoriesDetails(accessoriesId);
  }, [accessoriesId]);

  const { register, setValue, handleSubmit } = useForm({
    values: {
      mainImage: mainImageUrl,
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (uploadedMainImage) {
      setValue("mainImage", uploadedMainImage);
    }
  }, [uploadedMainImage, setValue]);

  const onSubmit = async (data) => {
    const updatedImageData = {
      main_image: data.mainImage,
    };

    try {
      await shoesService.updateMainImage(accessoriesId, updatedImageData);
    } catch (error) {
      console.error("Error updating main image:", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} boxShadow="none">
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
        disabled={!uploadedMainImage}
      >
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Зберегти
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default EditUploadMainAccessoriesImageForm;
