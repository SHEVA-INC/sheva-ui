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
import { Link as RouterLink } from "react-router-dom";

const StyledFileDropzone = ({
  open,
  onClose,
  onFileChange,
  uploadedFile,
  setUploadedFile,
  accept,
  linkTo,
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
    accept: accept,
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
              <span>Uploaded: {uploadedFile.name}</span>
            ) : (
              <Link to={linkTo} component={RouterLink}>
                Choose a photo
              </Link>
            )}
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} disabled={!uploadedFile}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StyledFileDropzone;
