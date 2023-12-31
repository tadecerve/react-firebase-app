import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import loginImage from "../img/login.jpg";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "ubicacion":
        setUbicacion(value);
        break;
      default:
        setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (user.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    try {
      await signup(
        user.email,
        user.password,
        name,
        lastName,
        phone,
        ubicacion
      );
      navigate("/");
    } catch (error) {
      if (error.code === "auth/internal-error") {
        setError("Correo Invalido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Correo ya en uso");
      }

      // setError(error.message);
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
          <div className="mb-4">
            <h1 className="title"> Registrarse</h1>
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
              htmlFor="name"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Tu apellido"
              className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Teléfono
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Tu teléfono"
              className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="profileImage"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Ubicacion
            </label>
            <input
              type="text"
              name="profileImage"
              placeholder="Ciudad en la que reside"
              className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
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

          <button
            className="bg-blue-500 hover:gb-blue-700 text-sm
                        text-white font-bold py-2 px-4 rounded 
                        focus:outline-none focus:shadow-outline"
          >
            Registrarse
          </button>
        </form>
        <p
          className="my-4 text-sm flex justify-between
                px-1 text-white"
        >
          Ya tienes una cuenta?
          <Link className="link" to="/login">
            Iniciar Sesion
          </Link>
        </p>
      </div>
    </div>
  );
}
