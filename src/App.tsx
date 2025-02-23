/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { Loader } from "./components";
import { ThemeProvider } from "./hooks";
import { SignIn } from "./pages";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <ThemeProvider>
      <SignIn />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </ThemeProvider>
  );
};

export default App;
