/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
export const ORDERS_CONFIG = {
  title: ["Sl No.", "Product Name", "Quantity", "MRP"],
  orderNumber: "Order Number : ",
  orderBy: "Order By : ",
  date: "Date : ",
  prMrp: "Total : ₹ ",
  deleteButton: "Delete",
  amountReceived: "Amount Received",
  deliver: "Deliver",
  viewButton: "View",
  delete: "Delete",
  sortedOptions: ["Sort By OrderNo. Asc", "Sort By OrderNo. Desc"],
  all: "All",
  orders: [
    {
      OrderNumber: "204",
      OrderBy: "2312070",
      Date: "25.30.2025",
      Total: 450,
    },
    {
      OrderNumber: "204",
      OrderBy: "2312070",
      Date: "25.30.2025",
      Total: 450,
    },
    {
      OrderNumber: "204",
      OrderBy: "2312070",
      Date: "25.30.2025",
      Total: 450,
    },
    {
      OrderNumber: "204",
      OrderBy: "2312070",
      Date: "25.30.2025",
      Total: 450,
    },
    {
      OrderNumber: "204",
      OrderBy: "2312070",
      Date: "25.30.2025",
      Total: 450,
    },
    {
      OrderNumber: "204",
      OrderBy: "2312070",
      Date: "25.30.2025",
      Total: 450,
    },
    {
      OrderNumber: "204",
      OrderBy: "2312070",
      Date: "25.30.2025",
      Total: 450,
    },
  ],
  orderItems: [
    {
      No: 1,
      Pname: "Shampoo",
      Quantity: 20,
      Price: 20,
    },
    {
      No: 1,
      Pname: "TagFile",
      Quantity: 20,
      Price: 20,
    },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
  ],
  productDelivered: "Product Delivered",
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
  category: ["All", "Order Number", "Purchaser Number"],
};
