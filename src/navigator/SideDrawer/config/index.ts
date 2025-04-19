/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { theme } from "../../../assets/Variables";

export const SIDE_DRAWER_CONFIG = {
  title: "NEC STORE",
  Actions: [
    {
      id: "products",
      title: "Products",
      imageSrc: theme.images.products,
      link: "/products",
    },
    {
      id: "orders",
      title: "Orders",
      imageSrc: theme.images.orders,
      link: "/orders",
    },
    {
      id: "sales",
      title: "Sales",
      imageSrc: theme.images.sales,
      link: "/sales",
    },
    {
      id: "history",
      title: "History",
      imageSrc: theme.images.history,
      link: "/history",
    },
    {
      id: "users",
      title: "Users",
      imageSrc: theme.images.customer,
      link: "/users",
    },
  ],
};
