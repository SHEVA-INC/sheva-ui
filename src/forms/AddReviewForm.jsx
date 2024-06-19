import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import StyledRating from "../components/styled/StyledRating";
import { Controller, useForm } from "react-hook-form";
import reviewService from "../services/ReviewService";
import StyledForm from "../components/styled/StyledForm";
import { Button, Typography } from "@mui/material";

const AddReviewForm = ({ setIsReviewAdded }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    values: {
      rating: 1,
      text: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await reviewService.addReview(data);
      setValue("text", "");
      setValue("rating", 1);
      setIsReviewAdded(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      boxShadow="none"
      alignItems="flex-start"
    >
      <Controller
        name="rating"
        control={control}
        render={({ field: { value, onChange } }) => (
          <StyledRating title="Оцінка" value={value} onChange={onChange} />
        )}
      />
      <StyledFormControlWithTextField
        title="Текст"
        htmlFor="text"
        multiline={true}
        minRows={2}
        register={{
          ...register("text", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 20,
              message: "Min length is 20 symbols!",
            },
            maxLength: {
              value: 700,
              message: "Max length is 700 symbols!",
            },
          }),
        }}
        helperText={errors?.text ? errors.text.message : " "}
        error={!!errors?.text}
      />
      <Button variant="contained" size="large" type="submit">
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Додати
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default AddReviewForm;
