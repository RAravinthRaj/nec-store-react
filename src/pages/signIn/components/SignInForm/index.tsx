/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import { useState, useEffect } from "react";
import * as S from "./styles";
import OTPInput from "../Otp";
import { toast } from "react-toastify";

export const SignInForm = () => {
  const theme = useTheme();
  const [OtpBox, setOtpBox] = useState(false);
  const [mail, setmail] = useState("");
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

  const handleValues = () => {
    if (mail !== "") {
      setOtpBox(true);
      setSeconds(30);
      toast.success(`OTP has sent to ${mail}`, { style: { fontSize: "14px" } });
    } else {
      toast.error("Please Enter Your Mail", { style: { fontSize: "14px" } });
    }
  };

  const reset = () => {
    setSeconds(30);
    toast.info("OTP has been resend to your mail", {
      style: { fontSize: "14px" },
    });
  };

  return (
    <S.SignInForm>
      <S.Text $textColor={theme.colors.black}>Sign In</S.Text>
      <S.SubText $textColor={theme.colors.black}>
        Good to See you again
      </S.SubText>
      <S.EForm>
        <S.InputWrapper $bgColor={theme.colors.backGround} $edit={OtpBox}>
          <S.MailIcon $bgColor={theme.colors.primary} />
          <S.Input
            type="email"
            placeholder="Email ID"
            $bgColor={theme.colors.backGround}
            onChange={(e) => setmail(e.target.value)}
          />
        </S.InputWrapper>
        {!OtpBox && (
          <>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => handleValues()}
            >
              Get OTP
            </S.Button>
          </>
        )}
        {OtpBox && (
          <>
            <OTPInput
              onChange={function (otp: string): void {
                throw new Error("Function not implemented.");
              }}
            />
            <S.ResendFrame>
              {seconds === 0 ? (
                <S.SignUpBold
                  $textColor={theme.colors.primary}
                  onClick={() => reset()}
                >
                  Resend OTP
                </S.SignUpBold>
              ) : (
                <S.Resend $textColor={theme.colors.black}>
                  Resend OTP in 00:{seconds < 10 ? `0${seconds}` : seconds}
                </S.Resend>
              )}
            </S.ResendFrame>
            <S.Button $bgColor={theme.colors.primary}>Sign In</S.Button>
          </>
        )}
        <S.SignUpText>
          <S.SignUpSubText $textColor={theme.colors.black}>
            New to NEC Store ?
          </S.SignUpSubText>
          <S.SignUpBold $textColor={theme.colors.primary}>Sign Up</S.SignUpBold>
        </S.SignUpText>
      </S.EForm>
    </S.SignInForm>
  );
};
