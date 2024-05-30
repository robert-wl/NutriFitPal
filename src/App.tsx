import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./components/providers/AuthProvider.tsx";
import Protector from "./components/middleware/Protector.tsx";
import Search from "./pages/Search.tsx";
import Calculate from "./pages/Calculate.tsx";
import Profile from "./pages/Profile.tsx";
import ManageUser from "./pages/ManageUser.tsx";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={
                <Protector authenticated={false}>
                  <Login />
                </Protector>
              }
            />
            <Route
              path="/register"
              element={
                <Protector authenticated={false}>
                  <Register />
                </Protector>
              }
            />
            <Route
              path="/search"
              element={
                <Protector
                  authenticated
                  roles={["user", "admin"]}>
                  <Search />
                </Protector>
              }
            />
            <Route
              path="/calculate"
              element={
                <Protector
                  authenticated
                  roles={["user", "admin"]}>
                  <Calculate />
                </Protector>
              }
            />
            <Route
              path="/profile"
              element={
                <Protector
                  authenticated
                  roles={["user", "admin"]}>
                  <Profile />
                </Protector>
              }
            />
            <Route
              path="/manage-user"
              element={
                <Protector
                  authenticated
                  roles={["admin"]}>
                  <ManageUser />
                </Protector>
              }
            />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default App;
