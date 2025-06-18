/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import { ProductContainer, SearchBar } from "./components";
import { useGetAllCategoriesStore } from "./stores/getAllCategories.store";

const Products = () => {
  const {
    getAllCategoriesResponse,
    getAllCategoriesError,
    fetchGetAllCategories,
    resetGetAllCategories,
  } = useGetAllCategoriesStore();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchGetAllCategories();
  }, []);

  useEffect(() => {
    if (
      getAllCategoriesResponse &&
      Object.keys(getAllCategoriesResponse).length > 0
    ) {
      setCategories(getAllCategoriesResponse.payload.categories || []);
    }
  }, [getAllCategoriesResponse]);

  return (
    <>
      <SearchBar categories={categories} />
      <ProductContainer />
    </>
  );
};

export default Products;
