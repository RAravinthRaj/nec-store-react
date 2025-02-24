/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import { useState, useEffect } from "react";
import * as S from "./styles";
import { OTPInput } from "../Otp";
import { toast } from "react-toastify";
import { SIGNIN_CONFIG } from "../../config";

export const SignInForm = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [OTPVisible, setOTPVisible] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds <= 0) {
      setSeconds(0);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const _onSubmitEmail = () => {
    if (email === "") {
      toast.info("Please enter your Email.");
    } else {
      setOTPVisible(true);
      setSeconds(30);
      toast.success(`A OTP has been sent to the email ${email}.`);
    }
  };

  const _resetOTP = () => {
    setSeconds(30);
    toast.success(`A OTP has been sent to the email ${email}.`);
  };

  const _renderHeader = () => {
    return (
      <S.HeaderContainer>
        <S.HeaderTitle>{SIGNIN_CONFIG.headerTitle}</S.HeaderTitle>
        <S.HeaderSubtitle $textColor={"#707070"}>
          Good to See you again
        </S.HeaderSubtitle>
      </S.HeaderContainer>
    );
  };

  const _renderEmail = () => {
    return (
      <S.InputWrapper $bgColor={theme.colors.backGround} $active={!OTPVisible}>
        <S.MailIcon $bgColor={theme.colors.primary} />
        <S.EmailInput
          type="email"
          placeholder="Email ID"
          onChange={(e) => setEmail(e.target.value)}
        />
      </S.InputWrapper>
    );
  };

  const _renderButton = (title: string, onClick: () => void) => {
    return (
      <S.Button $bgColor={theme.colors.primary} onClick={onClick}>
        {title}
      </S.Button>
    );
  };

  const _renderOTP = () => {
    if (OTPVisible) {
      return (
        <OTPInput
          onChange={function (otp: string): void {
            console.log("Here is the OTP", otp);
          }}
        />
      );
    }

    return null;
  };

  const _renderResend = () => {
    if (OTPVisible) {
      if (seconds === 0) {
        return (
          <S.ResendContainer>
            <S.SignUpBold
              $textColor={theme.colors.primary}
              onClick={() => _resetOTP()}
            >
              Resend OTP
            </S.SignUpBold>
          </S.ResendContainer>
        );
      }

      return (
        <S.ResendContainer>
          <S.Resend>
            Resend OTP in 00 : {seconds < 10 ? `0${seconds}` : seconds}
          </S.Resend>
        </S.ResendContainer>
      );
    }

    return null;
  };

  const _renderFooter = () => {
    return (
      <S.SignUpContainer>
        <S.SignUpSubText $textColor={"#707070"}>
          New to NEC Store?{" "}
          <S.SignUpBold $textColor={theme.colors.primary}>
            {" "}
            Sign Up
          </S.SignUpBold>
        </S.SignUpSubText>
      </S.SignUpContainer>
    );
  };

  return (
    <S.FormMainContainer>
      {_renderHeader()}
      {_renderEmail()}
      {_renderOTP()}
      {_renderResend()}
      {_renderButton(OTPVisible ? "Sign In" : "Get OTP", () =>
        _onSubmitEmail()
      )}
      {_renderFooter()}
    </S.FormMainContainer>
  );
};
