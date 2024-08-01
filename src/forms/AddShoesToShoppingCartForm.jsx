import { Button, Typography } from "@mui/material";
import ItemCounter from "../components/ItemCounter";
import StyledForm from "../components/styled/StyledForm";
import useShoppingCart from "../custom-hooks/useShoppingCart";

const AddShoesToShoppingCartForm = ({
  countValue,
  setCountValue,
  onSubmit,
  disabled,
}) => {
  const { handleItemAdd } = useShoppingCart();

  return (
    <StyledForm
      flexDirection="row"
      justifyContent="space-between"
      boxShadow="none"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
        handleItemAdd(true);
      }}
    >
      <ItemCounter
        countValue={countValue}
        setCountValue={setCountValue}
        disabled={disabled}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.stopPropagation();
        }}
        type="submit"
        disabled={disabled}
      >
        <Typography px={3}>{disabled ? "Додано" : "В корзину"} </Typography>
      </Button>
    </StyledForm>
  );
};

export default AddShoesToShoppingCartForm;
