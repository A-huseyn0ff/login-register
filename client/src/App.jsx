import { Route, Routes } from "react-router-dom";
import UserPage from "./Pages/UserPage";
import MainLayout from "./Layout/MainLayout";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<UserPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/SignUp" element={<SignUpPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
