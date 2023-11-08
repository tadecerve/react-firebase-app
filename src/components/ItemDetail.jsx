import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles.css";
import { useState, useEffect } from "react";
import {
  getDoc,
  doc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ServiceRating } from "./ServiceRating";

const ItemDetail = ({ item }) => {
  const [userio, loading, error] = useAuthState(auth);
  const { usuario, logout } = useAuth();
  const [user, setUser] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [isFavorited, setIsFavorited] = useState(false);

  console.log(userio.uid);

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

  // Check if the current user has already favorited the service
  useEffect(() => {
    const checkIfFavorited = async () => {
      const docRef = doc(db, "favorites", `${userio.uid}_${item.id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setIsFavorited(true);
      }
    };

    if (userio) {
      checkIfFavorited();
    }
  }, [usuario, item.id]);

  // Muestra los comentarios de un servicio
  useEffect(() => {
    const loadRatings = async () => {
      const ratingsCollection = collection(db, "usersrating");
      const ratingsQuery = query(
        ratingsCollection,
        where("serviceId", "==", item.id)
      );
      const ratingsSnapshot = await getDocs(ratingsQuery);
      const ratingsData = ratingsSnapshot.docs.map((doc) => doc.data());
      setRatings(ratingsData);
    };

    loadRatings();
  }, [item.id]);

  //Añadir a Favoritos
  const handleFavorite = async () => {
    if (!userio) {
      console.log(
        "Por favor, autentícate para agregar un servicio a favoritos"
      );
      return;
    }

     // Verificar si el servicio ya ha sido añadido a favoritos
    const docRef = doc(db, "favoritos", `${userio.uid}_${item.id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      alert("Ya tienes este servicio en favoritos");
      return;
    }

    const favorite = {
      userId: userio.uid, // Usar el ID del usuario autenticado actualmente
      serviceId: item.id,
    };

    await addDoc(collection(db, "favoritos"), favorite);
    setIsFavorited(true);
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
          <div className="button-container">
            <button
              className="contratar-button"
              onClick={() => handleHire(item.id)}
            >
              Contratar
            </button>
            <button
              className="favorite-button"
              onClick={handleFavorite}
              disabled={isFavorited}
            >
              {isFavorited ? "Ya en favoritos" : "Agregar a favoritos"}
            </button>
            {/* <span className="heart-icon" onClick={handleFavorite}>
              &#10084;
            </span> */}
          </div>
        </div>
        <ServiceRating serviceId={item.id} />
      </div>
      <div>
        <h1>Comentarios de este servicio</h1>
        {ratings.map((rating, index) => (
          <div key={index}>
            <p>Comentario: {rating.comment}</p>
            <p>Calificación: {"⭐".repeat(rating.rate)}</p>
            <hr />
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ItemDetail;
