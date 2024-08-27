import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import PrivacyPolicyContent from "./PrivacyPolicyContent";
import { useTheme } from "@emotion/react";

const PrivacyPolicyDialog = ({ open, onClose }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const subheaderVariant = xs ? "body1" : "h6";
  const dialogTitleVariant = xs ? "h5" : "h4";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        ".MuiDialog-paperScrollPaper": {
          px: { xs: 1, md: 8 },
          py: { xs: 1, md: 8 },
        },
      }}
    >
      <DialogTitle variant={dialogTitleVariant} fontWeight="bold">
        Політика конфіденційності
      </DialogTitle>
      <DialogContent>
        <PrivacyPolicyContent subheaderVariant={subheaderVariant} />
      </DialogContent>
      <DialogActions sx={{ px: 6 }}>
        <Button onClick={onClose} variant="contained">
          Закрити
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
