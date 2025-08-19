/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import { ProductContainer, SearchBar } from "./components";
import {
  useAddCategoryStore,
  useAddProductStore,
  useGetAllCategoriesStore,
  useGetAllProductsStore,
} from "./stores";
import { toast } from "react-toastify";
import { CustomPagination, Loader, Error } from "../../components";
import { checkAccessControl, getUserDetails } from "../../utils";
import { ROLES } from "../../config";
import { AddProductInput, UpdateProductInput } from "./services/graphql";
import { useNavigate } from "react-router-dom";
import { useUpdateProductStore } from "./stores/updateProduct.store";

const Products = () => {
  const [isRetailer, setIsRetailer] = useState<boolean>(false);
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    skip: 0,
    limit: 4,
    title: "",
    categoryId: "",
    orderBy: "ASC",
    productIDs: [],
  });
  const [categories, setCategories] = useState([]);

  const {
    getAllProductsResponse,
    getAllProductsLoading,
    getAllProductsError,
    fetchGetAllProducts,
    resetGetAllProducts,
  } = useGetAllProductsStore();

  const { getAllCategoriesResponse, fetchGetAllCategories } =
    useGetAllCategoriesStore();

  const {
    addCategoryResponse,
    addCategoryLoading,
    addCategoryError,
    fetchAddCategory,
    resetAddCategory,
  } = useAddCategoryStore();

  const {
    addProductResponse,
    addProductError,
    addProductLoading,
    fetchAddProduct,
    resetAddProduct,
  } = useAddProductStore();

  const {
    updateProductResponse,
    updateProductError,
    updateProductLoading,
    fetchUpdateProduct,
    resetUpdateProduct,
  } = useUpdateProductStore();

  useEffect(() => {
    const role = getUserDetails()?.role;
    setIsRetailer(role === ROLES.retailer);
  }, []);

  useEffect(() => {
    fetchGetAllCategories();
  }, [fetchGetAllCategories]);

  useEffect(() => {
    if (
      getAllCategoriesResponse &&
      Object.keys(getAllCategoriesResponse).length > 0
    ) {
      setCategories(getAllCategoriesResponse.payload.categories || []);
    }
  }, [getAllCategoriesResponse]);

  useEffect(() => {
    fetchGetAllProducts(payload);
  }, [payload.categoryId]);

  useEffect(() => {
    if (addCategoryResponse && Object.keys(addCategoryResponse).length > 0) {
      resetAddCategory();
      fetchGetAllCategories();

      setTimeout(() => {
        toast.success("Category Added Successfully !!");
      }, 1000);
    }
  }, [addCategoryResponse, fetchGetAllCategories, resetAddCategory]);

  useEffect(() => {
    if (addCategoryError && Object.keys(addCategoryError).length > 0) {
      resetAddCategory();

      setTimeout(() => {
        toast.error(addCategoryError);
      }, 1000);
    }
  }, [addCategoryError, resetAddCategory]);

  useEffect(() => {
    if (addProductResponse && Object.keys(addProductResponse).length > 0) {
      resetAddProduct();
      fetchGetAllProducts(payload);

      setTimeout(() => {
        toast.success("Product Added Successfully !!");
      }, 1000);
    }
  }, [addProductResponse, fetchGetAllProducts, resetAddProduct]);

  useEffect(() => {
    if (addProductError && Object.keys(addProductError).length > 0) {
      resetAddProduct();

      setTimeout(() => {
        toast.error(addProductError);
      }, 1000);
    }
  }, [addProductError, resetAddProduct]);

  useEffect(() => {
    if (
      updateProductResponse &&
      Object.keys(updateProductResponse).length > 0
    ) {
      resetUpdateProduct();
      fetchGetAllProducts(payload);

      setTimeout(() => {
        toast.success("Product Updated Successfully !!");
      }, 1000);
    }
  }, [updateProductResponse, fetchGetAllProducts, resetUpdateProduct]);

  useEffect(() => {
    if (updateProductError && Object.keys(updateProductError).length > 0) {
      resetUpdateProduct();

      setTimeout(() => {
        toast.error(updateProductError);
      }, 1000);
    }
  }, [updateProductError, resetUpdateProduct]);

  const _onSearchPress = () => {
    setPayload((payload: any) => ({
      ...payload,
      skip: 0,
    }));

    resetGetAllProducts();
    fetchGetAllProducts({
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

    resetGetAllProducts();
    fetchGetAllProducts({
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

    resetGetAllProducts();
    fetchGetAllProducts({
      ...payload,
      skip: (page - 1) * 4,
    });
  };

  const _addCategory = (name: string) => {
    return fetchAddCategory(name);
  };

  const _addProduct = (args: AddProductInput) => {
    return fetchAddProduct(args);
  };

  const _UpdateProduct = (args: UpdateProductInput) => {
    return fetchUpdateProduct(args);
  };

  const _renderLoader = () => {
    if (getAllProductsLoading) {
      return <Loader />;
    }

    return null;
  };

  const _renderPage = () => {
    if (
      getAllProductsResponse &&
      Object.keys(getAllProductsResponse).length > 0
    ) {
      const products = getAllProductsResponse?.payload?.products;
      if (products.length > 0) {
        return (
          <>
            <ProductContainer
              products={products}
              categories={categories}
              isRetailer={isRetailer}
              updateProduct={_UpdateProduct}
            />
            <CustomPagination
              perPageCount={4}
              totalPageCount={getAllProductsResponse?.payload?.totalCount}
              currentPage={payload?.skip / 4 + 1}
              onPageChange={_onPageChange}
            />
          </>
        );
      }

      return (
        <Error
          subtitle="No Data Found"
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllProducts();
            fetchGetAllProducts(payload);
          }}
        />
      );
    }

    if (getAllProductsError && getAllProductsError.length > 0) {
      return (
        <Error
          subtitle={getAllProductsError}
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllProducts();
            fetchGetAllProducts(payload);
          }}
        />
      );
    }
  };

  if (checkAccessControl("products")) {
    return (
      <>
        <SearchBar
          categories={categories}
          addCategory={_addCategory}
          setPayload={setPayload}
          onSearchPress={_onSearchPress}
          onSortPress={_onSortPress}
          isRetailer={isRetailer}
          addProduct={_addProduct}
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

export default Products;
