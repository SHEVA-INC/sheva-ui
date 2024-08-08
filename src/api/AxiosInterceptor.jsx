import axios from "axios";
import { useEffect, useState } from "react";
import AuthManager from "../auth/TokenService";
import useAuth from "../auth/useAuth";

const baseUrl = "/api/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (
      config.url.endsWith("user/login") ||
      config.url.endsWith("user/register") ||
      config.url.endsWith("user/token/refresh")
    ) {
      return config;
    }
    let token;
    try {
      token = await AuthManager.getAccessToken();
    } finally {
      if (token && config?.headers) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const AxiosInterceptor = ({ children }) => {
  const [isSet, setIsSet] = useState(false);
  const { signOut } = useAuth();

  useEffect(() => {
    const responseOnFulfilledInterceptor = (response) => {
      return response;
    };

    const responseOnRejectedInterceptor = async (err) => {
      if (err?.response?.status === 401) {
        await signOut();
      }
      return Promise.reject(err);
    };

    const responseInterceptor = axiosInstance.interceptors.response.use(
      responseOnFulfilledInterceptor,
      responseOnRejectedInterceptor,
    );

    setIsSet(true);

    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [signOut]);

  return <>{isSet && children}</>;
};

export { axiosInstance };
export default AxiosInterceptor;
