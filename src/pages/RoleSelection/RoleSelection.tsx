/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useNavigate } from "react-router-dom";
import { ContainerComp } from "./components";
import { useGetAccessTokenStore, useGetRolesStore } from "./stores";
import { Error, Loader } from "../../components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getItemInLocalStorage,
  setItemInLocalStorage,
  removeItemInLocalStorage,
} from "../../utils";
import { ROLE_SELECTION_CONFIG } from "./config";

const RoleSelection = () => {
  const [signInToken, setSignInToken] = useState<string>(
    getItemInLocalStorage("signInToken") || ""
  );

  const { getRolesResponse, getRolesError, fetchGetRoles, resetGetRoles } =
    useGetRolesStore();

  const {
    getAccessTokenResponse,
    getAccessTokenError,
    fetchGetAccessToken,
    resetGetAccessToken,
    getAccessTokenLoading,
  } = useGetAccessTokenStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (signInToken) {
      resetGetRoles();
      fetchGetRoles(signInToken);
    }
  }, [signInToken]);

  useEffect(() => {
    return () => {
      resetGetAccessToken();
      resetGetRoles();
    };
  }, []);

  useEffect(() => {
    if (getAccessTokenResponse?.payload?.token) {
      removeItemInLocalStorage("token");
      setItemInLocalStorage("token", getAccessTokenResponse.payload.token);

      const msg = `${ROLE_SELECTION_CONFIG.loginToast} ${getAccessTokenResponse.payload.role}`;
      toast.success(msg);

      navigate("/");
      resetGetRoles();
      resetGetAccessToken();
    }
  }, [getAccessTokenResponse]);

  useEffect(() => {
    if (getAccessTokenError) {
      resetGetAccessToken();
      toast.error(getAccessTokenError);
    }
  }, [getAccessTokenError]);

  const _onHandleRoleSelection = (role: string) => {
    resetGetAccessToken();
    resetGetRoles();

    if (signInToken) {
      fetchGetAccessToken(role, signInToken);
    } else {
      toast.error("Sign-in token is missing. Please sign in again.");
    }
  };

  const _renderLoader = () =>
    getAccessTokenLoading ? <Loader useModalLoader /> : null;

  const _renderPage = () => {
    if (getAccessTokenLoading) return <Loader />;

    if (getRolesResponse?.payload) {
      return (
        <ContainerComp
          Roles={getRolesResponse.payload}
          onRoleSelection={_onHandleRoleSelection}
        />
      );
    }

    if (getRolesError) {
      return (
        <Error
          subtitle={getRolesError}
          buttonTitle="Retry"
          onPress={() => {
            resetGetRoles();
            fetchGetRoles(signInToken);
          }}
        />
      );
    }

    return <Loader />;
  };

  return (
    <>
      {_renderLoader()}
      {_renderPage()}
    </>
  );
};

export default RoleSelection;
