/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import { CustomPagination, Error, Loader } from "../../components";
import { getUserDetails } from "../../utils";
import { HistoryComp } from "./components";
import { useGetAllOrdersStore } from "./stores";
import { GetAllOrdersInput } from "./services/graphql";

const History = () => {
  const {
    getAllOrdersError,
    getAllOrdersResponse,
    getAllOrdersLoading,
    fetchGetAllOrders,
    resetGetAllOrders,
  } = useGetAllOrdersStore();
  const [orders, setOrders] = useState([]);

  const [payload, setPayload] = useState<GetAllOrdersInput>({
    skip: 0,
    limit: 2,
    orderId: "",
    userId: getUserDetails()?.id,
    orderBy: "ASC",
  });

  useEffect(() => {
    if (payload) {
      fetchGetAllOrders(payload);
    }
  }, []);

  useEffect(() => {
    if (getAllOrdersResponse && Object.keys(getAllOrdersResponse).length > 0) {
      setOrders(getAllOrdersResponse?.payload?.orders || []);
    }
  }, [getAllOrdersResponse]);

  const _onSearchPress = () => {
    setPayload((payload: any) => ({
      ...payload,
      skip: 0,
    }));

    resetGetAllOrders();
    fetchGetAllOrders({
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

    resetGetAllOrders();
    fetchGetAllOrders({
      ...payload,
      orderBy: type,
      skip: 0,
    });
  };

  const _onPageChange = (page: number) => {
    setPayload((payload: any) => ({
      ...payload,
      skip: (page - 1) * 2,
    }));

    resetGetAllOrders();
    fetchGetAllOrders({
      ...payload,
      skip: (page - 1) * 2,
    });
  };

  const _renderLoader = () => {
    if (getAllOrdersLoading) {
      return <Loader />;
    }
  };

  const _renderPage = () => {
    if (getAllOrdersResponse?.payload?.orders.length == 0) {
      return (
        <Error
          title="No Items Found"
          subtitle="Make a Order Now"
          buttonTitle="Explore Products"
        />
      );
    }

    if (getAllOrdersResponse && Object.keys(getAllOrdersResponse).length > 0) {
      return (
        <>
          <HistoryComp
            orders={orders}
            payload={payload}
            setPayload={setPayload}
            onSortPress={_onSortPress}
            onSearchPress={_onSearchPress}
          />
          <CustomPagination
            perPageCount={2}
            totalPageCount={2}
            currentPage={payload?.skip / 2 + 1}
            onPageChange={_onPageChange}
          />
        </>
      );
    }

    if (getAllOrdersError && Object.keys(getAllOrdersError).length > 0) {
      return <Error />;
    }

    return <Error />;
  };

  return (
    <>
      {_renderLoader()}
      {_renderPage()}
    </>
  );
};

export default History;
