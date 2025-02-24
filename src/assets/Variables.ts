/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import loader from "../assets/lotties/loader.json";
import signInBgImage from "../assets/images/signIn.png";
import signUpBgImage from "../assets/images/SignUp.png";
import logo from "../assets/images/logo.png";

export const theme = {
  colors: {
    primary: "#0424C8",
    secondary: "#207CC9",
    tertiary: "#A0C4FF",
    backGround: "#F1F0EC",
    textSecondary: "#707070",
    OTPBoxColor: "#D9D9D9",
  },
  fonts: {
    sourceSerifPro: "Source Serif Pro",
  },
  images: {
    signInBgImage,
    signUpBgImage,
    logo,
  },
  lotties: {
    loader,
  },
};
