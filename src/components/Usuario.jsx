import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import fondoUsuario from '../img/fondoUsuarios.jpg';
import { useState } from 'react';

export function Usuario () {
    const {register, handleSubmit} = useForm ();
    const navigate = useNavigate();

    const { user } = useAuth();
    const userEmail = user.email;

    const [error, setError] = useState(null);

    const agregarUsuario = (data) => {

        const userData = {
            email: userEmail, 
            nombre: data.nombre,
            apellido: data.apellido,
            telefono: data.telefono,
            ubicacion: data.ubicacion,
        }
        if ( !data.nombre || !data.apellido || !data.telefono || !data.ubicacion) {
          setError('Por favor completa todos los campos.');
        }
        else{
          const usuarioRef = collection (db,"users");

          addDoc(usuarioRef, userData)
          .then((doc) => {
            console.log(doc.id);
            navigate('/');
          })
          .catch((error) => {
            setError('Error al agregar el usuario: ' + error);
          });
        }

        
      }
    

     // Imagen Fondo
  const estiloDelFondo = {
    backgroundImage: `url(${fondoUsuario})`,
    backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir todo el elemento
    backgroundPosition: "center", // Centra la imagen horizontalmente y verticalmente
    height: "100vh", // Establece la altura al 100% del viewport
    display: "flex",
    flexDirection: "column",

    color: "white", // Color del texto
  };

  return (
    <div className="h-screen text-black flex bg-gray-800"
        style={estiloDelFondo}>
    <h1 className="main-title"> Agregar Datos del Usuario </h1>
    <form onSubmit={handleSubmit(agregarUsuario)}>

    <input
        type="text"
        placeholder="Ingresa el mail"
        defaultValue={userEmail} // Establece el valor del campo de entrada
        disabled
        {...register("email")}
      />
      <input type="text" placeholder="Ingresa el nombre" {...register("nombre")}/>
      <input type="text" placeholder="Ingresa el apellido" {...register("apellido")}/>
      <input type="text" placeholder="Ingresa el telefono" {...register("telefono")}/>
      <input type="text" placeholder="Ingresa la ubicacion" {...register("ubicacion")}/>

      <p>
        <button className="agregar" type="submit"> Confirmar Datos </button>
      <button className="butt_cancelar" > Cancelar </button>
      </p>
      
      {error && <p className="main-title">{error}</p>} {/* Mostrar el error si existe */}
    </form>
    </div>
  );
}
