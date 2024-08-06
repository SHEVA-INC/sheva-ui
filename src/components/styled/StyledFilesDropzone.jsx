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

const StyledFilesDropzone = ({
  open,
  onClose,
  onFileChange,
  uploadedFiles,
  setUploadedFiles,
  register,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      setUploadedFiles(acceptedFiles);
      onFileChange(acceptedFiles);
    },
    [onFileChange, setUploadedFiles],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
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
            {uploadedFiles && uploadedFiles.length > 0 ? (
              <span>
                Завантажено:{" "}
                {Array.isArray(uploadedFiles)
                  ? uploadedFiles.map((file) => file.name).join(", ")
                  : uploadedFiles.name}
              </span>
            ) : (
              <Link>Оберіть хоча б 3 фото:</Link>
            )}
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Відмінити</Button>
        <Button onClick={handleSave} disabled={!uploadedFiles.length === 0}>
          Зберегти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StyledFilesDropzone;
