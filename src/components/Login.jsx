import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import "../styles.css";
import loginImage from "../img/login.jpg";
// import {getFirestore} from 'firebase/firestore'

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      } else if (error.code === "auth/internal-error") {
        setError("Correo inválido");
      } else {
        setError("Error al iniciar sesión");
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Porfavor ingresa tu email");

    try {
      await resetPassword(user.email);
      setError(
        "Te hemos enviado un email con un link para restablecer tu contraseña"
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // Imagen Fondo
  const estiloDelFondo = {
    backgroundImage: `url(${loginImage})`,
    backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir todo el elemento
    backgroundPosition: "center", // Centra la imagen horizontalmente y verticalmente
    height: "100vh", // Establece la altura al 100% del viewport
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white", // Color del texto
  };

  return (
    <div
      className="h-screen text-black flex bg-gray-800"
      style={estiloDelFondo}
    >
      <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md
                 rounded px-8 pt-6 pb-8 mb-4"
        >
          <div>
          <h1 className = "title"> Iniciar Sesion</h1>
            <label
              htmlFor="email"
              className="block
                        text-gray-700 text-sm font-fold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="youremail@company.ltd"
              className="shadow appearance-none border rounded text-sm
                            w-full py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block
                        text-gray-700 text-sm font-fold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="shadow appearance-none border rounded text-sm
                            w-full py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline"
              placeholder="******"
            ></input>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:hb-blue-700 text-sm
                        text-white font-bold py-2 px-4 rounded 
                        focus:outline-none focus:shadow-outline"
            >
              Iniciar
            </button>

            <a
              href="#!"
              className="inline-block align-baseline font-bold text-sm text-blue-500
                        hover:text-blue-800 "
              onClick={handleResetPassword}
            >
              Olvido su contraseña?
            </a>
          </div>
        </form>

        <p
          className="my-4 text-sm flex justify-between
                px-3 text-white "
        >
          No tienes una cuenta? <Link className = "link" to="/register"> Registrarse</Link>
        </p>

        <button
          onClick={handleGoogleSignin}
          className="loginGoogle"
        >
          Google Login
        </button>
      </div>
    </div>
  );
}
