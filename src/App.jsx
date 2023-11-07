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
import "./styles.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { MisServicios } from "./components/UsuarioServicios";
import EditarPerfil from "./components/EditarPerfil";
import ServiciosContratados from "./components/ServiciosContratados";
import Favoritos from "./components/Favoritos";
import EditarServicio from "./components/EditarServicio";


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
          />
          <Route path="/misServicios" element={<MisServicios />}></Route>

          <Route path="/misServicios/editarServicio/:id" element={<EditarServicio />} />

          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>

          <Route path="/nosotros" element={<ProtectedRoute><Nosotros /> </ProtectedRoute>} ></Route>

          <Route path="/contactos" element={<ProtectedRoute> <Contactos /></ProtectedRoute>}></Route>

          <Route path="/agregarservicio"element={ <ProtectedRoute> <AgregarServicio /> </ProtectedRoute>}></Route>

          <Route path="/serviciosContratados" element={<ServiciosContratados></ServiciosContratados>} ></Route>

          <Route path="/serviciosFavoritos" element={<Favoritos></Favoritos>} ></Route>

          <Route path="/editarPerfil" element={<EditarPerfil></EditarPerfil>}></Route>

            
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
