/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import * as S from "../Cart/components/CartComp/styles";
import {
  getItemInLocalStorage,
  getUserDetails,
  removeItemInLocalStorage,
} from "../../utils";
import { CartComp, Footer } from "./components";
import { useGetAllProductsStore, useCreateOrdersStore } from "./stores";
import { CustomPagination, Error, Loader } from "../../components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetAllOrdersStore } from "../History/stores";

const Carts = () => {
  const [productIDs, setProductIDs] = useState(() => {
    const storedCart = getItemInLocalStorage("cartProducts") || [];
    return storedCart.map((item: { id: any }) => item.id);
  });

  const [payload, setPayload] = useState({
    skip: 0,
    limit: 2,
    productIds: productIDs,
  });
  const userId = getUserDetails()?.id;

  const {
    getAllProductsResponse,
    getAllProductsError,
    getAllProductsLoading,
    resetGetAllProducts,
    fetchGetAllProducts,
  } = useGetAllProductsStore();

  const {
    createOrderResponse,
    createOrderError,
    createOrderLoading,
    resetCreateOrder,
    fetchCreateOrder,
  } = useCreateOrdersStore();

  const { fetchGetAllOrders } = useGetAllOrdersStore();

  const navigate = useNavigate();

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      productIds: productIDs,
    }));
  }, [productIDs]);

  useEffect(() => {
    if (payload.productIds?.length > 0) {
      fetchGetAllProducts(payload);
    }
  }, [payload.productIds, payload.skip]);

  const _onPageChange = (page: number) => {
    setPayload((payload: any) => ({
      ...payload,
      skip: (page - 1) * 2,
    }));

    resetGetAllProducts();
    fetchGetAllProducts({
      ...payload,
      skip: (page - 1) * 2,
    });
  };

  useEffect(() => {
    if (createOrderResponse && Object.keys(createOrderResponse).length > 0) {
      toast.success("Order Placed Successfully. Check Your History");

      resetCreateOrder();
      removeItemInLocalStorage("cartProducts");
      removeItemInLocalStorage("totalPrice");
      if (userId) {
        fetchGetAllOrders(userId);
      }

      navigate("/products");
    }
  }, [createOrderResponse && Object.keys(createOrderResponse).length > 0]);

  const _renderLoader = () => {
    if (getAllProductsLoading || createOrderLoading) {
      return <Loader />;
    }
  };

  const _renderError = () => {
    if (getAllProductsError && Object.keys(getAllProductsError).length > 0) {
      return <Error />;
    }

    if (createOrderError && Object.keys(createOrderError).length > 0) {
      toast.error("Failed to Place Order");
    }
  };

  const _createOrder = () => {
    const data = getItemInLocalStorage("cartProducts");

    if (!Array.isArray(data) || data.length === 0) {
      console.warn("Cart is empty or invalid.");
      return;
    }

    const transformedData = data.map((item: any) => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    return fetchCreateOrder(transformedData);
  };

  const _renderPage = () => {
    if (
      productIDs.length > 0 &&
      getAllProductsResponse &&
      Object.keys(getAllProductsResponse).length > 0
    ) {
      return (
        <>
          <CartComp
            setProductIDs={setProductIDs}
            cartProductsDetails={getAllProductsResponse?.payload?.products}
          />
          <CustomPagination
            perPageCount={2}
            totalPageCount={getAllProductsResponse?.payload?.totalCount}
            currentPage={payload?.skip / 2 + 1}
            onPageChange={_onPageChange}
          />
          <Footer createOrder={_createOrder} />
        </>
      );
    }

    if (productIDs.length <= 0) {
      removeItemInLocalStorage("cartProducts");
      removeItemInLocalStorage("totalPrice");

      return (
        <Error
          title="No Items Found"
          subtitle="Your cart is currently empty."
          buttonTitle="Explore Products"
        />
      );
    }
  };

  return (
    <>
      <S.PreviousPageLink
        onClick={() => {
          navigate(-1);
        }}
      />
      {_renderLoader()}
      {_renderError()}
      {_renderPage()}
    </>
  );
};

export default Carts;
