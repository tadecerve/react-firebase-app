import React, { useState } from "react";
import "../styles.css";
import { useForm } from "react-hook-form";

import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";

import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function AgregarServicio() {
  const [servicioId, setServicioId] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage,file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // You can use this part to display the progress to the user
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setImageUrl(downloadURL);
        });
      }
    );
  };

  const agregarServicio = (data) => {
    const pedido = {
      ...data,
      imageUrl: imageUrl,
      userId: user.uid
    };
    console.log(pedido);

    const serviciosRef = collection(db, "servicios");

    addDoc(serviciosRef, pedido)
      .then((doc) => {
        setServicioId(doc.id);
        console.log(doc.id);
    });
  };

  if (servicioId) {
    return (
      <div className="container">
        <Navbar></Navbar>
        <h1 className="main-title">Muchas gracias por subir tu servicio! </h1>
        <p>Tu numero de servicio es: {servicioId}</p>
        <Link to="/">Volver al Inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="main-title"> Agregar Servicio </h1>
        <form className="formulario" onSubmit={handleSubmit(agregarServicio)}>
          <input
            type="text"
            placeholder="Ingresa el titulo del servicio"
            {...register("titulo")}
          />
          <input type="number" placeholder="Precio" {...register("precio")} />
          <input
            type="number"
            placeholder="telefono"
            {...register("telefono")}
          />
          <input type="text" placeholder="Agrega una breve descripcion" {...register("descripcion")} />
          <input type="file" onChange={handleUpload} />
          <button className="boton boton--primario" type="submit">
            {" "}
            Agregar Servicio{" "}
          </button>
        </form>
      </div>

     <Footer></Footer>
    </div>
  );
}