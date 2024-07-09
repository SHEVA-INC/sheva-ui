import { BrowserRouter } from "react-router-dom";
import MuiTheme from "./MuiTheme";
import Router from "./Router";
import { AuthProvider } from "../auth/useAuth";
import AxiosInterceptor from "../api/AxiosInterceptor";
import { ShoppingCartProvider } from "../custom-hooks/useShoppingCart";

const App = () => {
  return (
    <MuiTheme>
      <AuthProvider>
        <ShoppingCartProvider>
          <AxiosInterceptor>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </AxiosInterceptor>
        </ShoppingCartProvider>
      </AuthProvider>
    </MuiTheme>
  );
};

export default App;
