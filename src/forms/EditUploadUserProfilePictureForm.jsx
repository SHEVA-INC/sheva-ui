import { useForm } from "react-hook-form";
import StyledForm from "../components/styled/StyledForm";
import { Avatar, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import StyledFileDropzone from "../components/styled/StyledFileDropzone";
import userService from "../services/UserService";

const EditUploadUserProfilePictureForm = () => {
  const [isEditPhotoOpen, setIsEditPhotoOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  const handleEditMainPhotoClose = () => {
    setIsEditPhotoOpen(false);
  };

  const handleMainImageChange = (file) => {
    setUploadedImage(file);
  };

  useEffect(() => {
    const getProfilePicture = async () => {
      try {
        const response = await userService.fetchUser();
        setProfilePictureUrl(response.profile_picture);
      } catch (error) {
        console.error("Error fetching shoes details:", error);
      }
    };

    getProfilePicture();
  }, []);

  const { register, setValue, handleSubmit } = useForm({
    values: {
      profilePicture: profilePictureUrl,
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (uploadedImage) {
      console.log(uploadedImage);
      setValue("profilePicture", uploadedImage);
    }
  }, [uploadedImage, setValue]);

  const onSubmit = async (data) => {
    const updatedImageData = {
      profile_picture: data.profilePicture,
    };

    try {
      await userService.updateUserPicture(updatedImageData);
    } catch (error) {
      console.error("Error updating main image:", error);
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      boxShadow="none"
      width="fit-content"
      alignItems="flex-start"
    >
      <StyledFileDropzone
        accept="image/*"
        open={isEditPhotoOpen}
        onClose={handleEditMainPhotoClose}
        onFileChange={handleMainImageChange}
        uploadedFile={uploadedImage}
        setUploadedFile={setUploadedImage}
        register={{ ...register("profilePicture") }}
      />
      <Avatar
        src={
          uploadedImage ? URL.createObjectURL(uploadedImage) : profilePictureUrl
        }
        alt="Avatar"
        sx={{ width: 180, height: 180 }}
      />
      {!uploadedImage && (
        <Button
          variant="contained"
          size="large"
          onClick={() => setIsEditPhotoOpen(true)}
        >
          <Typography
            variant="body2"
            textTransform="uppercase"
            fontWeight="bold"
          >
            Реадагувати
          </Typography>
        </Button>
      )}
      {uploadedImage && (
        <Button variant="contained" size="large" type="submit">
          <Typography
            variant="body2"
            textTransform="uppercase"
            fontWeight="bold"
          >
            Зберегти
          </Typography>
        </Button>
      )}
    </StyledForm>
  );
};

export default EditUploadUserProfilePictureForm;
