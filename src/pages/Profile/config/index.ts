/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
export const PROFILE_CONFIG = {
  sortedOptions: ["Sort By Title Asc", "Sort By Title Desc"],
  email: "Email Id",
  rollNumber: "Roll Number",
  department: "Department",
  block: "BLOCK",
  permit: "PERMIT",
  departments: ["CSE", "IT", "MECH", "AI&DS", "Civil", "EEE", "ECE"],
  data: {
    Name: "Aravinth Raj R",
    Department: "CSE",
    RollNumber: "2312070",
    Email: "2312070@nec.edu.in",
  },
  swal: {
    title: "Are you sure you want to block?",
    text: "You won't be able to revert this!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    confirmButtonText: "Yes, Block it!",
    cancelButtonText: "No, cancel!",
    successTitle: "Blocked!",
    successText: "The profile has been blocked.",
    successIcon: "success",
  },
  addCategoryTitle: "Add Category",
  addItemTitle: "Add Role",
  role: "Roles",
  submitButton: "Submit",
  addItemToastSuccess: "Role Added Successfully",
  name: "Name",
  roles: ["Admin", "Retailer"],
  edit: "Edit Profile",
};
