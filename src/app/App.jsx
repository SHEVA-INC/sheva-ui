import { BrowserRouter } from "react-router-dom";
import MuiTheme from "./MuiTheme";
import Router from "./Router";
import { AuthProvider } from "../auth/useAuth";
import AxiosInterceptor from "../api/AxiosInterceptor";

const App = () => {
  return (
    <MuiTheme>
      <AxiosInterceptor>
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>
      </AxiosInterceptor>
    </MuiTheme>
  );
};

export default App;
