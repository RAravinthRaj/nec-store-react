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

const SignUp = () => {
  const { response, error, loading, createUser } = useCreateUserStore();

  const handleSignUp = (data: CreateUserParams) => {
    createUser(data);
  };

  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (response) {
    navigate("/");
    return;
  }

  return <ContainerComp onSignUpPress={handleSignUp} />;
};

export default SignUp;
