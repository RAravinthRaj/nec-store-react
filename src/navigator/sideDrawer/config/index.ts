/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { theme } from "../../../assets/Variables";

export const SIDE_DRAWER_CONFIG = {
  title: "NEC STORE",
  retailerActions: [
    {
      id: 1,
      title: "Products",
      imageSrc: theme.images.products,
      link: "/products",
    },
    {
      id: 2,
      title: "Orders",
      imageSrc: theme.images.orders,
      link: "/orders",
    },
    {
      id: 3,
      title: "Sales",
      imageSrc: theme.images.sales,
      link: "/sales",
    },
  ],
  customerActions: [
    {
      id: 1,
      title: "Products",
      imageSrc: theme.images.products,
      link: "/products",
    },
    {
      id: 2,
      title: "History",
      imageSrc: theme.images.history,
      link: "/history",
    },
  ],
  userActions: [
    {
      id: 1,
      title: "Users",
      imageSrc: theme.images.customer,
      link: "/users",
    },
  ],
};
