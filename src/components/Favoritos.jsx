import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, doc,getDoc } from "firebase/firestore";
import { db,auth } from "../firebase"; 
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);
  const [services, setServices] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const q = query(
      collection(db, "favoritos"),
      where("userId", "==", user.uid)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const favorites = [];
      querySnapshot.forEach((doc) => {
        favorites.push(doc.data());
      });
      setFavorites(favorites);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      const services = [];
      for (let favorite of favorites) {
        const serviceDoc = await getDoc(doc(db, "servicios", favorite.serviceId));
        services.push(serviceDoc.data());
      }
      setServices(services);
    };

    fetchServices();
  }, [favorites]);

  return (
     <div>
      <Navbar></Navbar>
      <h1 className="centrar-texto">Mis Servicios Favoritos</h1>
      {services.length === 0 ? (
      <p className="">No tienes ningún servicio favorito :(</p>
      ) :(services.map((service, index) => (
        <div key={index}>
          <div className="Favoritos">
            <img src={service.imageUrl} alt={service.titulo} />
          </div>
          <h3 className="titulo">{service.titulo}</h3>
          <p className="precio">Precio: ${service.precio}</p>
          <p className="telefono">Telefono: {service.telefono}</p>
          <p className="descripcion">Descripcion: {service.descripcion}</p>
        </div>
      ))
      )}
      <Footer></Footer>
    </div>
  );
};

export default Favoritos;
