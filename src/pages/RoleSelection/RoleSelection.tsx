/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useLocation } from "react-router-dom";
import { ContainerComp } from "./components";
import { useGetRolesStore } from "./stores";
import { Error, Loader } from "../../components";
import { useEffect } from "react";

const RoleSelection = () => {
  const location = useLocation();
  const token = location.state?.token;
  const { getRolesResponse, getRolesError, fetchGetRoles, resetGetRoles } =
    useGetRolesStore();

  useEffect(() => {
    fetchGetRoles(token);
  }, []);

  const _renderLoader = () => {
    return null;
  };

  const _renderError = () => {
    return null;
  };

  const _renderPage = () => {
    if (getRolesResponse && Object.keys(getRolesResponse).length > 0) {
      return <ContainerComp Roles={getRolesResponse?.payload} />;
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
      {_renderError()}
      {_renderPage()}
    </>
  );
};

export default RoleSelection;
