/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components";
import { ThemeProvider } from "./hooks";
import { Navigator } from "./navigator";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
