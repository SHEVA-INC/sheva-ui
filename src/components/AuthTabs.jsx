import { useState } from "react";
import { AppBar, Stack, Tab, Tabs, Typography } from "@mui/material";
import SignInForm from "../forms/SignInForm";
import SignUpForm from "../forms/SignUpForm";
import { useNavigate } from "react-router-dom";
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "../app/Routes";

const AuthTabs = ({ active }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(active);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === "login") {
      navigate(SIGN_IN_ROUTE);
    } else if (newValue === "register") {
      navigate(SIGN_UP_ROUTE);
    }
  };

  return (
    <Stack boxShadow="0 0 10px 10px rgba(0, 0, 0, 0.02)">
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        component="div"
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="secondary"
          variant="fullWidth"
          sx={{
            "& .MuiTabs-indicator": {
              height: "1px",
            },
          }}
        >
          <Tab
            label={
              <Typography variant="subtitle1" fontWeight="bold">
                Увійти
              </Typography>
            }
            value="login"
            sx={{ borderBottom: 1, borderColor: "secondary.light", p: 0 }}
          />
          <Tab
            label={
              <Typography variant="subtitle1" fontWeight="bold">
                Зареєструватись
              </Typography>
            }
            value="register"
            sx={{ borderBottom: 1, borderColor: "secondary.light", p: 0 }}
          />
        </Tabs>
      </AppBar>
      {activeTab === "login" ? <SignInForm /> : <SignUpForm />}
    </Stack>
  );
};

export default AuthTabs;
