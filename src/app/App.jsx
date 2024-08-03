import { BrowserRouter } from "react-router-dom";
import MuiTheme from "./MuiTheme";
import Router from "./Router";
import { AuthProvider } from "../auth/useAuth";
import AxiosInterceptor from "../api/AxiosInterceptor";

const App = () => {
  return (
    <MuiTheme>
      <AuthProvider>
        <AxiosInterceptor>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AxiosInterceptor>
      </AuthProvider>
    </MuiTheme>
  );
};

export default App;
