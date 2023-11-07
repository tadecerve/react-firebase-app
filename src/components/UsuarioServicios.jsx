import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles.css";


export function MisServicios() {
  const [servicios, setServicios] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {  // Add this line
      const q = query(collection(db, "servicios"), where("userId", "==", user.uid));
  
      getDocs(q).then((querySnapshot) => {
        const servicios = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setServicios(servicios);
      });
    }
  }, [user]);

  return (
    <div>
        <Navbar></Navbar>
      {servicios.map(servicio => (
        <div className="container" key={servicio.id}>
            <img src={servicio.imageUrl} alt="serviciourlimage" />
            <h2>{servicio.titulo}</h2>
            <p>{servicio.precio}</p>
            <p>{servicio.telefono}</p>
          
          
        </div>
      ))}
    </div>
  );
}