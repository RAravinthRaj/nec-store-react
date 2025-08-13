/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useLocation, useNavigate } from "react-router-dom";
import { ContainerComp } from "./components";
import { useGetAccessTokenStore, useGetRolesStore } from "./stores";
import { Error, Loader } from "../../components";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { setItemInLocalStorage } from "../../utils";
import { ROLE_SELECTION_CONFIG } from "./config";
import { ROLES } from "../../config";

const RoleSelection = () => {
  const location = useLocation();
  const token = location.state?.token;

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
    if (token) {
      resetGetRoles();
      fetchGetRoles(token);
    }
  }, []);

  useEffect(() => {
    if (
      getAccessTokenResponse &&
      Object.keys(getAccessTokenResponse).length > 0
    ) {
      setItemInLocalStorage("token", getAccessTokenResponse?.payload?.token);

      const msg = `${ROLE_SELECTION_CONFIG.loginToast} ${getAccessTokenResponse?.payload?.role}`;
      if (getAccessTokenResponse?.payload?.role === ROLES.admin) {
        toast.success(msg);
      } else {
        toast.success(msg);
      }

      navigate("/");
      resetGetRoles();
      resetGetAccessToken();
    }
  }, [
    getAccessTokenResponse && Object.keys(getAccessTokenResponse).length > 0,
  ]);

  useEffect(() => {
    if (getAccessTokenError && getAccessTokenError.length > 0) {
      resetGetAccessToken();
      toast.error(getAccessTokenError);
    }
  }, [getAccessTokenError && getAccessTokenError.length > 0]);

  const _onHandleRoleSelection = (role: string) => {
    fetchGetAccessToken(role, token);
  };

  const _renderLoader = () => {
    if (getAccessTokenLoading) {
      return <Loader useModalLoader />;
    }

    return null;
  };

  const _renderPage = () => {
    if (
      getAccessTokenLoading &&
      Object.keys(getAccessTokenLoading).length > 0
    ) {
      return <Loader />;
    }

    if (getRolesResponse && Object.keys(getRolesResponse).length > 0) {
      return (
        <ContainerComp
          Roles={getRolesResponse?.payload}
          onRoleSelection={_onHandleRoleSelection}
        />
      );
    }

    if (getRolesError && getRolesError.length > 0) {
      return (
        <Error
          subtitle={getRolesError}
          buttonTitle="Retry"
          onPress={() => {
            resetGetRoles();
            fetchGetRoles(token);
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
