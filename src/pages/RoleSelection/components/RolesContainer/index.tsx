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
import { ROLE_SELECTION_CONFIG } from "../../config";
import { useNavigate } from "react-router-dom";

export interface IRoleSelection {
  Roles: any;
}

export const RoleContainer = ({ Roles }: IRoleSelection) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [activeRole, setActiveRole] = useState<string | null>(null);

  const handleClick = (role: string) => {
    setActiveRole((prev) => (prev === role ? null : role));
  };

  const login = () => {
    if (activeRole !== null) {
      const data = ROLE_SELECTION_CONFIG.loginToast + activeRole;
      toast.success(data);
      if (activeRole === "Admin") {
        navigate("/users");
      } else {
        navigate("/products");
      }
    } else {
      toast.info(ROLE_SELECTION_CONFIG.warnToast);
    }
  };

  const _rolesContainer = () => {
    return (
      <S.RoleContainer $bgColor={theme.colors.backGround}>
        {Roles.map((role: string) => {
          const isActive = activeRole === role;

          return (
            <S.IconHolder
              $bgColor={theme.colors.secondaryBackGround}
              $hoverBgColor={theme.colors.tertiary}
              $textColor={theme.colors.primary}
              onClick={() => handleClick(role)}
              $isActive={isActive}
              key={role}
            >
              <S.Icon src={theme.images[role]} />
              <S.RoleText $bgColor={theme.colors.primary}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </S.RoleText>
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
        {ROLE_SELECTION_CONFIG.continueButton}
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
