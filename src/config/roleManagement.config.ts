/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
export const SIDEDRAWER_ROLE_MANAGEMENT = {
  roles: {
    customer: ["products", "history"],
    retailer: ["products", "orders", "sales"],
    admin: ["users"],
  },
};

export const NAVBAR_ROLE_MANAGEMENT = {
  roles: {
    customer: ["profile", "logOut"],
    retailer: ["profile", "switchRole", "logOut"],
    admin: ["profile", "switchRole", "logOut"],
  },
};
