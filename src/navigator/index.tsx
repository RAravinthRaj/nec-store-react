/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { SignIn } from "../pages";
import { SignUp } from "../pages";
import { RoleSelection } from "../pages";
import { Products } from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};
