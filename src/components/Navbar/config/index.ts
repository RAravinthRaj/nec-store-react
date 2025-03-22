/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { theme } from "../../../assets/Variables";

export const NAVBAR_CONFIG = {
  title: "NEC STORE",
  navBarOptions: [
    {
      id: 1,
      title: "View Profile",
      imageSrc: theme.images.viewprofile,
      link: "/dashboard",
    },
    {
      id: 2,
      title: "Switch Role",
      imageSrc: theme.images.switchrole,
      link: "/roles",
    },
    {
      id: 3,
      title: "LogOut",
      imageSrc: theme.images.logout,
      link: "/",
    },
  ],
};
