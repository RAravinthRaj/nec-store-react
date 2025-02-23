/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { Header } from "../Header";
import { SignInForm } from "../SignInForm";
import * as S from "./styles";

export const Container = () => {
  return (
    <>
      <S.Holder>
        <S.Holder1>
          <Header />
        </S.Holder1>
        <S.Holder2>
          <SignInForm />
        </S.Holder2>
      </S.Holder>
    </>
  );
};
