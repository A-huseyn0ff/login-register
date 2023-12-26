import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./Pages/UserPage";
import MainLayout from "./Layout/MainLayout";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Privateroute from "./router/privateroute";
import Account from "./Pages/ACCOUNT";

function App() {
  return (
    <>
         <BrowserRouter>
         <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<UserPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/SignUp" element={<SignUpPage />}></Route>
          <Route element={<Privateroute/>}>
            <Route path="/account" element={<Account/>}/>
          </Route>
        </Route>
      </Routes>
         </BrowserRouter>
      
    </>
  );
}

export default App;
