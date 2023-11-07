import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles.css";
import { useState, useEffect } from "react";
import { getDoc, doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ServiceRating } from "./ServiceRating";

const ItemDetail = ({ item }) => {
  const [userio, loading, error] = useAuthState(auth);
  const { usuario, logout } = useAuth();
  console.log(userio.uid);
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

  //Añadir a Favoritos
  const handleFavorite = async () => {
    if (!userio) {
      console.log(
        "Por favor, autentícate para agregar un servicio a favoritos"
      );
      return;
    }

    const favorite = {
      userId: userio.uid, // Usar el ID del usuario autenticado actualmente
      serviceId: item.id,
    };

    await addDoc(collection(db, "favoritos"), favorite);

    alert("El servicio ha sido agregado a favoritos con éxito"); // Mostrar un mensaje de éxito
  };

  //Añadir servicio contratado
  const handleHire = async (serviceId) => {
    if (!userio) {
      console.log("Por favor, autentícate para contratar un servicio");
      return;
    }
    if (userio.uid === item.userId) {
      alert("No puedes contratar tu propio servicio rey :(");
      return;
    }

    if (!item.estado) {
      alert("Este servicio no está disponible para contratar ahora mismo :(.");
      return;
    }
    const hire = {
      userId: userio.uid, // Usar el ID del usuario autenticado actualmente
      serviceId: serviceId,
    };

    await addDoc(collection(db, "hires"), hire);
    alert("El servicio ha sido contratado con éxito");
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
          <p className="estado">
            Estado: {item.estado ? "Disponible" : "No disponible"}
          </p>
          <p className="user">
            Agregado por: {user ? user.name : "Cargando..."}
          </p>
          <button onClick={() => handleHire(item.id)}>Contratar</button>
          <button onClick={handleFavorite}>Agregar a favoritos</button>
        </div>

        <ServiceRating serviceId={item.id} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ItemDetail;
