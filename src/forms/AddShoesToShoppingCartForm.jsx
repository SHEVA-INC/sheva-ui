import { Button, Typography } from "@mui/material";
import ItemCounter from "../components/ItemCounter";
import StyledForm from "../components/styled/StyledForm";

const AddShoesToShoppingCartForm = ({
  countValue,
  setCountValue,
  onSubmit,
}) => {
  return (
    <StyledForm
      flexDirection="row"
      justifyContent="space-between"
      boxShadow="none"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <ItemCounter countValue={countValue} setCountValue={setCountValue} />
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.stopPropagation();
        }}
        type="submit"
      >
        <Typography px={3}>В корзину</Typography>
      </Button>
    </StyledForm>
  );
};

export default AddShoesToShoppingCartForm;
