import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Usuario () {
    const {register, handleSubmit} = useForm ();
    const navigate = useNavigate();

    const { user } = useAuth();
    const userEmail = user.email;

    const agregarUsuario = (data) => {
        const userData = {
            email: userEmail, 
            nombre: data.nombre,
            apellido: data.apellido,
            telefono: data.telefono,
            ubicacion: data.ubicacion,
        }
        

        const usuarioRef = collection (db,"users");

        addDoc(usuarioRef,userData)
            .then((doc)=> {
                console.log(doc.id);
            })
            navigate("/");
    }



  return (
    <div className="container">
    <h1 className="main-title"> Agregar Datos del Usuario </h1>
    <form className="formulario" onSubmit={handleSubmit(agregarUsuario)}>

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

      <button className="agregar" type="submit"> Confirmar Datos </button>

    </form>

    
</div>
  );
};
