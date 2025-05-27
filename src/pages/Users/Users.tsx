/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { useEffect, useState } from "react";
import { CustomPagination, Loader, Navbar, Error } from "../../components";
import { SideDrawer } from "../../navigator/SideDrawer";
import {
  MainContainer,
  StyledPageBox,
  ErrorContainer,
} from "./components/SearchBar/styles";
import { SearchBar, UserDetails } from "./components";
import { useGetAllUsersStore } from "./stores";

const Users = () => {
  const [menu, setMenu] = useState(false);
  const [payload, setPayload] = useState({
    skip: 0,
    limit: 2,
    name: "",
    email: "",
    orderBy: "ASC",
  });

  const {
    getAllUsersResponse,
    getAllUsersError,
    fetchGetAllUsers,
    resetGetAllUsers,
  } = useGetAllUsersStore();

  useEffect(() => {
    fetchGetAllUsers(payload);
  }, []);

  const _onPageChange = (page: number) => {
    setPayload((payload: any) => ({
      ...payload,
      skip: (page - 1) * 2,
    }));

    resetGetAllUsers();
    fetchGetAllUsers({
      ...payload,
      skip: (page - 1) * 2,
    });
  };

  const _onSearchPress = () => {
    setPayload((payload: any) => ({
      ...payload,
      skip: 0,
    }));

    resetGetAllUsers();
    fetchGetAllUsers({
      ...payload,
      skip: 0,
    });
  };

  const _onSortPress = (type: string) => {
    setPayload((payload: any) => ({
      ...payload,
      orderBy: type,
      skip: 0,
    }));

    resetGetAllUsers();
    fetchGetAllUsers({
      ...payload,
      orderBy: type,
      skip: 0,
    });
  };

  const _renderLoader = () => {
    return null;
  };

  const _renderPage = () => {
    if (getAllUsersResponse && Object.keys(getAllUsersResponse).length > 0) {
      const users = getAllUsersResponse?.payload?.users;
      if (users.length > 0) {
        return (
          <>
            <UserDetails Users={users} />
            <CustomPagination
              perPageCount={2}
              totalPageCount={getAllUsersResponse?.payload?.totalCount}
              currentPage={payload?.skip / 2 + 1}
              onPageChange={_onPageChange}
            />
          </>
        );
      }

      return (
        <ErrorContainer>
          <Error
            subtitle="No Data Found"
            buttonTitle="Retry"
            onPress={() => {
              resetGetAllUsers();
              fetchGetAllUsers(payload);
            }}
          />
        </ErrorContainer>
      );
    }

    if (getAllUsersError && getAllUsersError.length > 0) {
      return (
        <Error
          subtitle={getAllUsersError}
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllUsers();
            fetchGetAllUsers(payload);
          }}
        />
      );
    }

    return <Loader />;
  };

  return (
    <>
      <MainContainer>
        <Navbar menu={menu} onToggleMenu={() => setMenu(!menu)} />
        <SideDrawer menu={menu} toggleMenu={() => setMenu(!menu)} />
        <StyledPageBox>
          <SearchBar
            setPayload={setPayload}
            onSearchPress={_onSearchPress}
            onSortPress={_onSortPress}
          />
          {_renderPage()}
        </StyledPageBox>
      </MainContainer>
      {_renderLoader()}
    </>
  );
};

export default Users;
