import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProductosLista } from "./components/index";
import { Nosotros } from "./components/Nosotros";
import { Contactos } from "./components/Contactos";
import "normalize.css";
import { AgregarServicio } from "./components/AgregarServicio";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
                <ProductosLista />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register></Register>}></Route>

          <Route
            path="/nosotros"
            element={
              <ProtectedRoute>
                <Nosotros />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/contactos"
            element={
              <ProtectedRoute>
                <Contactos />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/agregarservicio"
            element={
              <ProtectedRoute>
                <AgregarServicio />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/usuario"
            element={
              <ProtectedRoute>
                <Usuario />
              </ProtectedRoute>
            }
          ></Route>

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

//className="bg-slate-300 h-screen text-black flex bg-gray-800
