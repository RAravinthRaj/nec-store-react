/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { USERS_CONFIG } from "../../config";
import { useNavigate } from "react-router-dom";

export interface IUserDetails {
  Users: any;
}

export const UserDetails = ({ Users }: IUserDetails) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const _editProfile = () => {
    navigate("/profile");
  };

  const _renderRoles = (roles_params: any) => {
    return (
      <S.TitleComp>
        {roles_params.map((role: string, index: number) => {
          const color = theme.colors[USERS_CONFIG[role]];
          return (
            <S.Circle key={index} $bgColor={color} $isNotFirst={index !== 0} />
          );
        })}
      </S.TitleComp>
    );
  };

  const _renderUserData = () => {
    return (
      <div>
        {Users.map((item: any, index: number) => (
          <div key={index}>
            <S.ItemBox>
              {Object.entries(item)?.map(([key, value], id) => {
                if (key === "roles") {
                  return (
                    <S.TitleComp key={id}>{_renderRoles(value)}</S.TitleComp>
                  );
                }
                return <S.TitleComp key={id}>{value}</S.TitleComp>;
              })}
              <S.TitleComp>
                <S.Button
                  onClick={() => _editProfile()}
                  $bgColor={theme.colors.primary}
                >
                  {USERS_CONFIG.button}
                </S.Button>
              </S.TitleComp>
            </S.ItemBox>
            <S.UserDivider />
          </div>
        ))}
      </div>
    );
  };

  return (
    <S.UserContainer>
      <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
        {USERS_CONFIG.title?.map((data, index) => (
          <S.TitleComp key={index}>{data}</S.TitleComp>
        ))}
      </S.TitleBox>
      <S.Wrapper>{_renderUserData()}</S.Wrapper>
    </S.UserContainer>
  );
};
