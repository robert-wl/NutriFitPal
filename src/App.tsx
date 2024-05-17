import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./components/providers/AuthProvider.tsx";

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
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default App;
