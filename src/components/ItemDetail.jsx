import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles.css";
import { useState, useEffect } from 'react';
import { getDoc, doc, addDoc, collection  } from 'firebase/firestore';
import { db } from "../firebase";
import { useAuth } from "../context/authContext";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';


const ItemDetail = ({ item }) => {

  const [userio, loading, error] = useAuthState(auth);
  const { usuario, logout } = useAuth();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const userDoc = await getDoc(doc(db, "users", item.userId));
      if (userDoc.exists()) {
        setUser(userDoc.data());
       
      } else {
        console.log("No such document!");
      }
    };
  
    fetchUserData();
  }, [item.userId]);

 console.log(item.id);
 console.log(item.userId);
 console.log(usuario);



  const handleHire = async (serviceId) => {
    const hire = {
      userId: user.uid, // Asegúrate de que 'user' es el usuario actualmente autenticado
      serviceId: serviceId,
    };
  
    await addDoc(collection(db, "hires"), hire); 
  };


  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="servicio-detalle">
        <img src={item.imageUrl} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="precio">Precio: ${item.precio}</p>
          <p className="telefono">Telefono: {item.telefono}</p>
          <p className="descripcion">Descripcion: {item.descripcion}</p>
          <p className="user">Agregado por: {user ? user.name : 'Cargando...'}</p>
          <button onClick={() => handleHire(item.id)}>Contratar</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ItemDetail;
