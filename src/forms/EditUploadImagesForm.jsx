import { useForm } from "react-hook-form";
import StyledForm from "../components/styled/StyledForm";
import { Box, Button, Stack, Typography } from "@mui/material";
import shoesService from "../services/ShoesService";
import { useEffect, useState } from "react";
import StyledFilesDropzone from "../components/styled/StyledFilesDropzone";

const EditUploadImagesForm = ({ shoesId }) => {
  const [isEditPhotosOpen, setIsEditPhotosOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);

  const handleEditPhotosClose = () => {
    setIsEditPhotosOpen(false);
  };

  const handleImagesChange = (files) => {
    setUploadedImages(files);
  };

  useEffect(() => {
    const getShoesDetails = async () => {
      try {
        const response = await shoesService.fetchShoesDetails(shoesId);
        setImagesUrl(response.images.map((img) => img.image_url));
      } catch (error) {
        console.error("Error fetching shoes details:", error);
      }
    };

    getShoesDetails();
  }, [shoesId]);

  const { register, setValue, handleSubmit } = useForm({
    values: {
      uploaded_images: imagesUrl,
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (uploadedImages.length > 0) {
      setValue("uploaded_images", uploadedImages);
    }
    console.log(uploadedImages);
  }, [uploadedImages, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    data.uploaded_images.forEach((file) => {
      formData.append("uploaded_images", file);
    });

    try {
      await shoesService.updateImages(shoesId, formData);
    } catch (error) {
      console.error("Error updating shoes images:", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} boxShadow="none">
      <Stack flexDirection="column" alignSelf="flex-start">
        <Typography variant="h6" fontWeight="bold">
          Фото
        </Typography>
        <Button onClick={() => setIsEditPhotosOpen(true)}>
          Редагувати Фото
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
          {imagesUrl.map((url, idx) => (
            <Box
              key={idx}
              component="img"
              src={
                uploadedImages[idx]
                  ? URL.createObjectURL(uploadedImages[idx])
                  : url
              }
              alt={`Shoe image ${idx + 1}`}
              sx={{ width: 300, height: "auto" }}
            />
          ))}
        </Stack>
      </Stack>
      <Button
        variant="contained"
        size="large"
        type="submit"
        disabled={!uploadedImages.length}
      >
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Зберегти
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default EditUploadImagesForm;
