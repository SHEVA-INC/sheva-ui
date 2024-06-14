import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { useEffect } from "react";
import { SIGN_IN_ROUTE } from "../app/Routes";

const SignOutForm = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  useEffect(() => {
    const signOutUser = async () => {
      try {
        await signOut();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        navigate(SIGN_IN_ROUTE);
      } catch (err) {
        console.error(err);
      }
    };
    signOutUser();
  }, [signOut, navigate]);

  return (
    <Typography variant="h3" textAlign="center">
      Signing out..
    </Typography>
  );
};

export default SignOutForm;
