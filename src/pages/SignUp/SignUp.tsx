/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { ContainerComp } from "./components";
import { useCreateUserStore } from "./stores";
import { CreateUserParams } from "./services/rest";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components";
import { toast } from "react-toastify";
import { useEffect } from "react";

const SignUp = () => {
  const { response, error, loading, createUser, resetCreateUser } =
    useCreateUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (response && Object.keys(response).length > 0) {
      navigate("/");
      resetCreateUser();
      setTimeout(() => {
        toast.success("Sign up successful !!!");
      }, 1000);
    }
  }, [response && Object.keys(response).length > 0]);

  useEffect(() => {
    if (error && error.length > 0) {
      resetCreateUser();
      toast.error(error);
    }
  }, [error && error.length > 0]);

  const _handleSignUp = (data: CreateUserParams) => {
    createUser(data);
  };

  const _renderLoader = () => {
    if (loading) {
      return <Loader useModalLoader />;
    }

    return null;
  };

  const _renderError = () => {
    return null;
  };

  const _renderPage = () => {
    return <ContainerComp onSignUpPress={_handleSignUp} />;
  };

  return (
    <>
      {_renderLoader()}
      {_renderError()}
      {_renderPage()}
    </>
  );
};

export default SignUp;
