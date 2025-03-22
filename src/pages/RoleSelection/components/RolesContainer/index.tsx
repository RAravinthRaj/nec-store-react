/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import { ROLESELECTION_CONFIG } from "../../config";
import { useNavigate } from "react-router-dom";

export interface IRoleSelection {}

export const RoleContainer = ({}: IRoleSelection) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const roles = ["Admin", "Retailer", "Customer"];
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const handleClick = (role: string) => {
    setActiveRole((prev) => (prev === role ? null : role));
  };

  const login = () => {
    if (activeRole !== null) {
      const data = ROLESELECTION_CONFIG.loginToast + activeRole;
      toast.success(data);
      navigate("/products");
    } else {
      toast.info(ROLESELECTION_CONFIG.warnToast);
    }
  };

  const _rolesContainer = () => {
    return (
      <S.RoleContainer $bgColor={theme.colors.backGround}>
        {roles.map((role) => {
          const currRole: any = role.toLowerCase();
          const isActive = activeRole === role;

          return (
            <S.IconHolder
              $bgColor={theme.colors.secondaryBackGround}
              $hoverbgColor={theme.colors.tertiary}
              $textColor={theme.colors.primary}
              onClick={() => handleClick(role)}
              $isActive={isActive}
              key={currRole}
            >
              <S.Icon src={theme.images[currRole]} />
              <S.RoleText $bgColor={theme.colors.primary}>{role}</S.RoleText>
            </S.IconHolder>
          );
        })}
      </S.RoleContainer>
    );
  };

  const _chooseRoleButton = () => {
    return (
      <S.SelectionButton
        $bgColor={theme.colors.primary}
        onClick={() => login()}
      >
        {ROLESELECTION_CONFIG.continueButton}
      </S.SelectionButton>
    );
  };

  return (
    <S.Container $bgColor={theme.colors.backGround}>
      {_rolesContainer()}
      {_chooseRoleButton()}
    </S.Container>
  );
};
