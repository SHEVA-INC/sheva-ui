import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Link,
} from "@mui/material";

const StyledFileDropzone = ({
  open,
  onClose,
  onFileChange,
  uploadedFile,
  setUploadedFile,
  register,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      onFileChange(file);
    },
    [onFileChange, setUploadedFile],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    multiple: false,
  });

  const handleSave = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Редагувати</DialogTitle>
      <DialogContent>
        <div
          {...getRootProps()}
          style={{
            border: "1px dashed #ccc",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <input {...getInputProps()} {...register} />
          <Typography variant="body1">
            {uploadedFile ? (
              <span>Завантажено: {uploadedFile.name}</span>
            ) : (
              <Link>Оберіть фото:</Link>
            )}
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Відмінити</Button>
        <Button onClick={handleSave} disabled={!uploadedFile}>
          Зберегти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StyledFileDropzone;
