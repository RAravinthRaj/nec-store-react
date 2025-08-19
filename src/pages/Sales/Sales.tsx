/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import { CustomPagination, Error, Loader } from "../../components";
import { SearchBar, SalesComp, Footer } from "./components";
import { useGetSalesStore, useGetSalesReportStore } from "./stores";
import { checkAccessControl } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesStore } from "../Products/stores";
import { toast } from "react-toastify";

const Sales = () => {
  const {
    getSalesLoading,
    getSalesResponse,
    getSalesError,
    fetchGetSales,
    resetGetSales,
  } = useGetSalesStore();

  const { getAllCategoriesResponse, fetchGetAllCategories } =
    useGetAllCategoriesStore();

  const {
    getSalesReportResponse,
    getSalesReportError,
    getSalesReportLoading,
    fetchGetSalesReport,
    resetGetSalesReport,
  } = useGetSalesReportStore();

  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    skip: 0,
    limit: 4,
    orderBy: "ASC",
    categoryId: "",
    from: "",
    to: "",
    title: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchGetAllCategories();
  }, [fetchGetAllCategories]);

  useEffect(() => {
    fetchGetSales(payload);
  }, [payload.categoryId, payload.from, payload.to]);

  useEffect(() => {
    if (getSalesReportResponse) {
      toast.success(getSalesReportResponse?.payload?.message);
    }
  }, [getSalesReportResponse]);

  useEffect(() => {
    if (
      getAllCategoriesResponse &&
      Object.keys(getAllCategoriesResponse).length > 0
    ) {
      setCategories(getAllCategoriesResponse.payload.categories || []);
    }
  }, [getAllCategoriesResponse]);

  useEffect(() => {
    if (getSalesReportError && Object.keys(getSalesReportError).length > 0) {
      toast.error(getSalesReportError);
    }
  }, []);

  const _onSearchPress = () => {
    setPayload((payload: any) => ({
      ...payload,
      skip: 0,
    }));

    resetGetSales();
    fetchGetSales({
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

    resetGetSales();
    fetchGetSales({
      ...payload,
      orderBy: type,
      skip: 0,
    });
  };

  const _onPageChange = (page: number) => {
    setPayload((payload: any) => ({
      ...payload,
      skip: (page - 1) * 4,
    }));

    resetGetSales();
    fetchGetSales({
      ...payload,
      skip: (page - 1) * 4,
    });
  };

  const _getSalesReport = () => {
    const { from, to } = payload;
    if (from.trim() === "" || to.trim() === "") {
      toast.info("Enter the dates");
      return;
    }
    fetchGetSalesReport({ from, to });
    resetGetSalesReport();
  };

  const _renderLoader = () => {
    if (getSalesLoading) {
      return <Loader />;
    }

    if (getSalesReportLoading) {
      return <Loader useModalLoader />;
    }

    return null;
  };

  const _renderPage = () => {
    if (getSalesResponse && Object.keys(getSalesResponse).length > 0) {
      const salesData = getSalesResponse?.payload?.sales;

      if (salesData.length == 0) {
        return (
          <Error
            title="Uh Oh !!!"
            subtitle={"No Data Found"}
            buttonTitle="Retry"
            onPress={() => {
              resetGetSales();
              fetchGetSales(payload);
            }}
          />
        );
      }

      return (
        <>
          <SalesComp SalesDetails={salesData} />
          <CustomPagination
            perPageCount={4}
            totalPageCount={getSalesResponse?.payload?.totalCount}
            currentPage={payload?.skip / 4 + 1}
            onPageChange={_onPageChange}
          />
          <Footer
            totalSold={getSalesResponse?.payload?.totalSold}
            totalAmount={getSalesResponse?.payload?.totalPrice}
            getSalesReport={_getSalesReport}
          />
        </>
      );
    }

    if (getSalesError && getSalesError.length > 0) {
      return (
        <Error
          subtitle={"Something Went Wrong"}
          buttonTitle="Retry"
          onPress={() => {
            resetGetSales();
            fetchGetSales(payload);
          }}
        />
      );
    }

    return <Loader />;
  };

  if (checkAccessControl("sales")) {
    return (
      <>
        <SearchBar
          categories={categories}
          setPayload={setPayload}
          onSearchPress={_onSearchPress}
          onSortPress={_onSortPress}
        />
        {_renderPage()}
        {_renderLoader()}
      </>
    );
  }

  return (
    <Error
      subtitle="Page Not Found"
      buttonTitle="Go to Home"
      onPress={() => {
        navigate("/");
      }}
    />
  );
};

export default Sales;
