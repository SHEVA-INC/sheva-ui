import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

const PrivacyPolicyDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle variant="h4" fontWeight="bold" sx={{ pt: 14, pb: 8, px: 8 }}>
        Політика конфіденційності
      </DialogTitle>
      <DialogContent>
        <PrivacyPolicyContent />
      </DialogContent>
      <DialogActions sx={{ pb: 14, pt: 8, px: 8 }}>
        <Button onClick={onClose} variant="contained">
          Закрити
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
