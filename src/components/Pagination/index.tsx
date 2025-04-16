/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const CustomPagination = () => {
  return (
    <Stack spacing={1}>
      <Pagination count={10} showFirstButton showLastButton shape="rounded" />
    </Stack>
  );
};
