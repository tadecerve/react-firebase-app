import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase"; // Asegúrate de que esta ruta sea la correcta para tu archivo de configuración de Firebase
import { useAuthState } from "react-firebase-hooks/auth";


const ServiciosContratados = () => {
  const [user, loading, error] = useAuthState(auth);
  const [hires, setHires] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "hires"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const hires = [];
      querySnapshot.forEach((doc) => {
        hires.push(doc.data());
      });
      setHires(hires);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      const services = [];
      for (let hire of hires) {
        const serviceDoc = await getDoc(doc(db, "servicios", hire.serviceId));
        services.push(serviceDoc.data());
      }
      setServices(services);
    };

    fetchServices();
  }, [hires]);

  return (
    <div>
      {services.map((service, index) => (
        <div key={index}>
          <div className="servicio-detalle">
            <img src={service.imageUrl} alt={service.titulo} />
          </div>
          <h3 className="titulo">{service.titulo}</h3>
          <p className="precio">Precio: ${service.precio}</p>
          <p className="telefono">Telefono: {service.telefono}</p>
          <p className="descripcion">Descripcion: {service.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiciosContratados;
