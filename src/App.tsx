import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./components/providers/AuthProvider.tsx";
import Protector from "./components/middleware/Protector.tsx";

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
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default App;
