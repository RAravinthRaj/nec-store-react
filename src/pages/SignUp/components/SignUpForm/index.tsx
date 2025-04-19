/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import { useState } from "react";
import * as S from "./styles";
import { toast } from "react-toastify";
import { SIGNUP_CONFIG } from "../../config";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

export interface ISignUpForm {}

export const SignUpForm = ({}: ISignUpForm) => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    SIGNUP_CONFIG.department
  );

  const navigate = useNavigate();

  const _checkValidity = () => {
    if (
      name !== "" &&
      email !== "" &&
      rollNumber !== "" &&
      selectedDepartment !== SIGNUP_CONFIG.department
    ) {
      toast.success(SIGNUP_CONFIG.signedUpSuccess);
      navigate("/");
    } else {
      toast.info(SIGNUP_CONFIG.requiredData);
    }
  };

  const _handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedDepartment(event.target.value as string);
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

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <S.StyledSelect
          value={selectedDepartment}
          onChange={(e) => _handleChange(e)}
          displayEmpty
          renderValue={(selected) => (
            <>{selected ? selected : SIGNUP_CONFIG.department}</>
          )}
          style={{ padding: "0", color: theme.colors.textSecondary }}
        >
          {SIGNUP_CONFIG.departments?.map((item, id) => {
            return (
              <MenuItem key={id} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </S.StyledSelect>
      </S.StyledFormControl>
    );
  };

  const _getDetails = () => {
    return (
      <div>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.UserIcon $bgColor={theme.colors.primary} />
          <S.Input
            type="input"
            placeholder={SIGNUP_CONFIG.fullName}
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.MailIcon $bgColor={theme.colors.primary} />
          <S.Input
            type="email"
            placeholder={SIGNUP_CONFIG.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.RollNumberIcon $bgColor={theme.colors.primary} />
          <S.Input
            type="input"
            placeholder={SIGNUP_CONFIG.rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.DepartmentIcon $bgColor={theme.colors.primary} />
          {_renderMenu()}
        </S.InputWrapper>
      </div>
    );
  };

  const _renderButton = (title: string) => {
    return (
      <S.Button
        $bgColor={theme.colors.primary}
        onClick={() => _checkValidity()}
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
          <Link to="/">
            <S.SignInBold $textColor={theme.colors.primary}>
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
