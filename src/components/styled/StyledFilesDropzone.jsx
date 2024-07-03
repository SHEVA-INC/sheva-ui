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

const StyledFilesDropzone = ({
  open,
  onClose,
  onFileChange,
  uploadedFiles,
  setUploadedFiles,
  accept,
  linkTo,
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
    accept,
    onDrop,
  });

  const handleSave = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Edit Photo</DialogTitle>
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
                Uploaded:{" "}
                {Array.isArray(uploadedFiles)
                  ? uploadedFiles.map((file) => file.name).join(", ")
                  : uploadedFiles.name}
              </span>
            ) : (
              <Link to={linkTo} component={RouterLink}>
                Choose photos
              </Link>
            )}
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} disabled={!uploadedFiles.length === 0}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StyledFilesDropzone;
