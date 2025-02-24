/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import { useState, useEffect } from "react";
import * as S from "./styles";
import { toast } from "react-toastify";
import { SIGNUP_CONFIG } from "../../config";
import { Link, useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const navigate = useNavigate();

  const _checkvalidity = () => {
    if (name !== "" && email !== "" && rollNumber !== "") {
      toast.success("Signed Up Successfully !!!");
      navigate("/");
    } else {
      toast.info("Please Fill the required data");
    }
  };

  const _renderHeader = () => {
    return (
      <S.HeaderContainer>
        <S.HeaderTitle>{SIGNUP_CONFIG.headerTitle}</S.HeaderTitle>
        <S.HeaderSubtitle $textColor={theme.colors.textSecondary}>
          {SIGNUP_CONFIG.headerSubTitle}
        </S.HeaderSubtitle>
      </S.HeaderContainer>
    );
  };

  const _getDetails = () => {
    return (
      <>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.UserIcon $bgColor={theme.colors.primary} />
          <S.Input
            type="input"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.MailIcon $bgColor={theme.colors.primary} />
          <S.Input
            type="email"
            placeholder="Email ID"
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.RollNumberIcon $bgColor={theme.colors.primary} />
          <S.Input
            type="input"
            placeholder="Roll Number"
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.MailIcon $bgColor={theme.colors.primary} />
          <S.Input
            type="input"
            placeholder="Department"
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrapper>
      </>
    );
  };

  const _renderButton = (title: string) => {
    return (
      <S.Button
        $bgColor={theme.colors.primary}
        onClick={() => _checkvalidity()}
      >
        {title}
      </S.Button>
    );
  };

  const _renderFooter = () => {
    return (
      <S.SignInContainer>
        <S.SignInSubText $textColor={theme.colors.textSecondary}>
          {SIGNUP_CONFIG.signInText}
          {"  "}
          <Link to="/">
            <S.SignInBold $textColor={theme.colors.primary}>
              {"  "}
              {SIGNUP_CONFIG.signInDirect}
            </S.SignInBold>
          </Link>
        </S.SignInSubText>
      </S.SignInContainer>
    );
  };

  return (
    <S.FormMainContainer>
      {_renderHeader()}
      {_getDetails()}
      {_renderButton(SIGNUP_CONFIG.headerTitle)}
      {_renderFooter()}
    </S.FormMainContainer>
  );
};
