/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import * as S from "../Cart/components/CartComp/styles";
import { getItemInLocalStorage } from "../../utils";
import { CartComp, Footer } from "./components";
import { useGetAllProductsStore } from "./stores";
import { CustomPagination, Error, Loader } from "../../components";
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const [productIDs, setProductIDs] = useState(
    getItemInLocalStorage("cartProducts") || []
  );

  const [payload, setPayload] = useState({
    skip: 0,
    limit: 2,
    productIds: productIDs,
  });

  const [cartProducts, setCartProducts] = useState<any[]>([]);

  const {
    getAllProductsResponse,
    getAllProductsError,
    getAllProductsLoading,
    resetGetAllProducts,
    fetchGetAllProducts,
  } = useGetAllProductsStore();

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

  useEffect(() => {
    if (
      getAllProductsResponse &&
      Object.keys(getAllProductsResponse).length > 0
    ) {
      setCartProducts(getAllProductsResponse?.payload?.products);
    }
  }, [getAllProductsResponse]);

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

  const _renderLoader = () => {
    if (getAllProductsLoading) {
      return <Loader />;
    }
  };

  const _renderError = () => {
    if (getAllProductsError && Object.keys(getAllProductsError).length > 0) {
      return <Error />;
    }
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
            cartProducts={getAllProductsResponse?.payload?.products}
            setCartProducts={setCartProducts}
          />
          <CustomPagination
            perPageCount={2}
            totalPageCount={getAllProductsResponse?.payload?.totalCount}
            currentPage={payload?.skip / 2 + 1}
            onPageChange={_onPageChange}
          />
          <Footer />
        </>
      );
    }

    if (productIDs.length <= 0) {
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
