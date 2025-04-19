/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { Navbar } from "../../../../components";
import { useRef, useState } from "react";
import { SideDrawer } from "../../../../navigator/sideDrawer";
import { AddRoleModal } from "../AddRole";
import { EditProfileModal } from "../EditProfile";
import { PROFILE_CONFIG } from "../../config";
import { toast } from "react-toastify";
import Swal, { SweetAlertIcon } from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import { RxCross2 } from "react-icons/rx";
import { VscCheck } from "react-icons/vsc";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();
  const [menu, setMenu] = useState(false);
  const [openRole, setOpenRole] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [imageSrc, setImageSrc] = useState(theme.images.user);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isAdmin = true;

  const _deleteItem = () => {
    Swal.fire({
      title: PROFILE_CONFIG.swal.title,
      text: PROFILE_CONFIG.swal.text,
      icon: PROFILE_CONFIG.swal.icon as SweetAlertIcon,
      confirmButtonColor: theme.colors.primary,
      cancelButtonColor: theme.colors.cancel,
      color: theme.colors.swalButton,
      confirmButtonText: `${ReactDOMServer.renderToString(
        <VscCheck size={20} style={{ marginTop: "-2px", marginRight: "5px" }} />
      )} ${PROFILE_CONFIG.swal.confirmButtonText} `,
      cancelButtonText: `${ReactDOMServer.renderToString(
        <RxCross2 size={19} style={{ marginTop: "-1px" }} />
      )} ${PROFILE_CONFIG.swal.cancelButtonText}`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: PROFILE_CONFIG.swal.successTitle,
          text: PROFILE_CONFIG.swal.successText,
          icon: PROFILE_CONFIG.swal.successIcon as SweetAlertIcon,
          confirmButtonColor: theme.colors.primary,
          color: theme.colors.swalButton,
        });
        setIsBlock(!isBlock);
      }
    });
  };

  const _handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const _handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const _setBlock = () => {
    if (!isBlock) {
      _deleteItem();
    } else {
      toast.success("Profile UnBlocked");
      setIsBlock(!isBlock);
    }
  };

  const _renderBanner = () => {
    return <S.BannerContainer src={theme.images.banner} />;
  };

  const _renderUserImage = () => {
    return (
      <S.UserImageContainer>
        <S.UserImage src={imageSrc} alt="User Profile" />
        <S.PlusIconContainer onClick={_handleIconClick}>
          <S.AddIcon />
        </S.PlusIconContainer>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={_handleImageChange}
          style={{ display: "none" }}
        />
      </S.UserImageContainer>
    );
  };

  const _renderDetails = () => {
    return (
      <S.DetailsContainer>
        <S.EmailContainer>
          <S.Title $color={theme.colors.textSecondary}>
            {PROFILE_CONFIG.email}
          </S.Title>
          2312070@nec.edu.in
        </S.EmailContainer>
        <S.DeptContainer>
          <S.Title $color={theme.colors.textSecondary}>
            {PROFILE_CONFIG.department}
          </S.Title>
          CSE
        </S.DeptContainer>
        <S.RollContainer>
          <S.Title $color={theme.colors.textSecondary}>
            {PROFILE_CONFIG.rollNumber}
          </S.Title>
          2312070
        </S.RollContainer>
      </S.DetailsContainer>
    );
  };

  const _renderData = () => {
    return (
      <S.DataContainer>
        <S.NameContainer>Aravinth Raj R</S.NameContainer>
        {_renderDetails()}
      </S.DataContainer>
    );
  };

  const _renderButton = () => {
    if (isAdmin) {
      return (
        <S.ButtonContainer>
          <S.Button
            $bgColor={theme.colors.red}
            $isBlock={isBlock}
            onClick={() => {
              _setBlock();
            }}
          >
            <S.BlockIcon />
            {PROFILE_CONFIG.block}
          </S.Button>
          <S.Button
            $bgColor={theme.colors.green}
            $isBlock={!isBlock}
            onClick={() => {
              _setBlock();
            }}
          >
            <S.PermitIcon /> {PROFILE_CONFIG.permit}
          </S.Button>
        </S.ButtonContainer>
      );
    }

    return null;
  };

  const _renderModals = () => {
    return (
      <>
        <AddRoleModal
          modalShow={openRole}
          email={"2312070@nec.edu.in"}
          onClose={() => {
            setOpenRole(false);
          }}
        />
        <EditProfileModal
          modalShow={openEdit}
          individualProfile={PROFILE_CONFIG.data}
          onClose={() => {
            setOpenEdit(false);
          }}
        />
      </>
    );
  };

  const _editRoles = () => {
    return (
      <S.RoleContainer>
        <S.Circle
          $bgColor={theme.colors.red}
          $isNotFirst={false}
          $isLast={false}
        />
        <S.Circle
          $bgColor={theme.colors.green}
          $isNotFirst={true}
          $isLast={false}
        />
        <S.Circle
          $bgColor={theme.colors.sandal}
          $isNotFirst={true}
          $isLast={true}
          onClick={() => {
            setOpenRole(true);
          }}
        >
          <S.RoleAddIcon />
        </S.Circle>
      </S.RoleContainer>
    );
  };

  const _renderRoles = () => {
    if (isAdmin) {
      return (
        <S.EditContainer>
          {_editRoles()}
          <S.EditIcon
            onClick={() => {
              setOpenEdit(true);
            }}
          />
        </S.EditContainer>
      );
    }

    return (
      <S.EditContainer>
        <S.EditIcon
          onClick={() => {
            setOpenEdit(true);
          }}
        />
      </S.EditContainer>
    );
  };

  const _mainContainerItems = () => {
    return (
      <div>
        <S.UserContainer>
          {_renderUserImage()}
          {_renderRoles()}
        </S.UserContainer>
        <S.DataContainer>
          {_renderData()}
          {_renderButton()}
        </S.DataContainer>
        {_renderModals()}
      </div>
    );
  };

  return (
    <S.MainContainer>
      <Navbar menu={menu} onToggleMenu={() => setMenu(!menu)} />
      <SideDrawer menu={menu} toggleMenu={() => setMenu(!menu)} />
      <S.StyledPageBox>
        {_renderBanner()}
        <S.MainContainerItems>{_mainContainerItems()}</S.MainContainerItems>
      </S.StyledPageBox>
    </S.MainContainer>
  );
};
