/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import {
  SignIn,
  SignUp,
  RoleSelection,
  Products,
  Orders,
  Sales,
  Carts,
  MyOrders,
  Users,
  Profile,
  Landing,
} from "../pages";
import { Routes, Route } from "react-router-dom";
import { PageContainer } from "../components";

export const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/roles" element={<RoleSelection />} />
      <Route
        path="/products"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <Products />
          </PageContainer>
        }
      />
      <Route path="/orders" element={<Orders />} />
      <Route path="/sales" element={<Sales />} />
      <Route
        path="/carts"
        element={
          <PageContainer showSideBar={false} showHamburgerIcon={false}>
            <Carts />
          </PageContainer>
        }
      />
      <Route
        path="/history"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <MyOrders />
          </PageContainer>
        }
      />
      <Route
        path="/users"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <Users />
          </PageContainer>
        }
      />
      <Route
        path="/profile"
        element={
          <PageContainer showSideBar={false} showHamburgerIcon={false}>
            <Profile />
          </PageContainer>
        }
      />
    </Routes>
  );
};
