import { BrowserRouter } from "react-router-dom";
import MuiTheme from "./MuiTheme";
import Router from "./Router";
import { AuthProvider } from "../auth/useAuth";
import AxiosInterceptor from "../api/AxiosInterceptor";
import CookieConsentSnackbar from "../components/CookieConsentSnackbar";
import { CookiesProvider, useCookies } from "react-cookie";

const App = () => {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <MuiTheme>
      <AuthProvider>
        <AxiosInterceptor>
          <CookiesProvider defaultSetOptions={{ path: "/" }}>
            <BrowserRouter>
              <Router />
              {!cookies.cookieConsent && <CookieConsentSnackbar />}
            </BrowserRouter>
          </CookiesProvider>
        </AxiosInterceptor>
      </AuthProvider>
    </MuiTheme>
  );
};

export default App;
