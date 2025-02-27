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
import { Link, useNavigate } from "react-router-dom";

export interface ISignInForm {}

export const SignInForm = ({}: ISignInForm) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [OTPVisible, setOTPVisible] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [read, setRead] = useState(false);
  const [otp, SetOtp] = useState("");

  const navigate = useNavigate();
  const roles = ["Admin", "Retailer", "Customer"];

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
      toast.info(SIGNIN_CONFIG.checkEmailToast);
    } else if (!OTPVisible) {
      setOTPVisible(true);
      setRead(true);
      setSeconds(30);
      toast.success(`${SIGNIN_CONFIG.OTPSentText}${email}`);
    } else if (OTPVisible && otp === "111111" && roles.length > 1) {
      return navigate("/roles");
    } else {
      toast.warn("You have Entered wrong OTP");
    }
  };

  const _resetOTP = () => {
    setSeconds(30);
    toast.success(`${SIGNIN_CONFIG.OTPSentText}${email}`);
  };

  const _renderHeader = () => {
    return (
      <S.HeaderContainer>
        <S.HeaderTitle>{SIGNIN_CONFIG.headerTitle}</S.HeaderTitle>
        <S.HeaderSubtitle $textColor={theme.colors.textSecondary}>
          {SIGNIN_CONFIG.headerSubTitle}
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
          readOnly={read}
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
            SetOtp(otp);
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
              {SIGNIN_CONFIG.resendTitle}
            </S.SignUpBold>
          </S.ResendContainer>
        );
      }

      return (
        <S.ResendContainer>
          <S.Resend>
            {SIGNIN_CONFIG.resendTimer}
            {seconds < 10 ? `0${seconds}` : seconds}
          </S.Resend>
        </S.ResendContainer>
      );
    }

    return null;
  };

  const _renderFooter = () => {
    return (
      <S.SignUpContainer>
        <S.SignUpSubText $textColor={theme.colors.textSecondary}>
          {SIGNIN_CONFIG.signUpText}
          <Link to="/signup">
            <S.SignUpBold $textColor={theme.colors.primary}>
              {SIGNIN_CONFIG.signUpDirect}
            </S.SignUpBold>
          </Link>
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
      {_renderButton(
        OTPVisible ? SIGNIN_CONFIG.signInText : SIGNIN_CONFIG.getOTPText,
        () => _onSubmitEmail()
      )}
      {_renderFooter()}
    </S.FormMainContainer>
  );
};
