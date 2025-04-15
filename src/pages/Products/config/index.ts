/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
export const PRODUCTS_CONFIG = {
  drawerWidth: 240,
  addCategoryTitle: "Add Category",
  addItemTitle: "Add Item",
  category: "Category",
  quantity: "Quantity",
  mrp: "MRP",
  image: "Image",
  title: "Title",
  addButton: "Add",
  submitButton: "Submit",
  categoryToastSuccess: "Category Added Successfully",
  addItemToastSuccess: "Item Added Successfully",
  cartItemToastSuccess: "Item Added to Cart",
  all: "All",
  prQuantity: "Quantity : ",
  prMrp: "MRP : ₹ ",
  editButton: "Edit",
  deleteButton: "Delete",
  addToCartButton: "Add To Cart",
  sortedOptions: ["Sort By Title Asc", "Sort By Title Desc"],
  products: [
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
  ],
  swal: {
    title: "Are you sure you want to delete?",
    text: "You won't be able to revert this!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    successTitle: "Deleted!",
    successText: "Your item has been deleted.",
    successIcon: "success",
  },
};
