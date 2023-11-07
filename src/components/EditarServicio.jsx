import React, { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; 
import { useParams } from 'react-router-dom';

const EditarServicio = () => {
  const { id } = useParams();
  const [servicioData, setServicioData] = useState({
    titulo: '',
    precio: '',
    telefono: '',
    estado: false
  });

  useEffect(() => {
    const fetchServicio = async () => {
      const servicioRef = doc(db, "servicios", id);
      const servicioSnap = await getDoc(servicioRef);

      if (servicioSnap.exists()) {
        setServicioData(servicioSnap.data());
      } else {
        console.log('No such document!');
      }
    };
    console.log(id);

    fetchServicio();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const servicioRef = doc(db, "servicios", id);

    await updateDoc(servicioRef, {
      titulo: servicioData.titulo,
      precio: servicioData.precio,
      telefono: servicioData.telefono,
      estado: servicioData.estado,
    });

    alert('El servicio ha sido actualizado con éxito');
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Título:
        <input
          type="text"
          value={servicioData.titulo}
          onChange={(e) => setServicioData({ ...servicioData, titulo: e.target.value })}
        />
      </label>
      <label>
        Precio:
        <input
          type="text"
          value={servicioData.precio}
          onChange={(e) => setServicioData({ ...servicioData, precio: e.target.value })}
        />
      </label>
      <label>
        Teléfono:
        <input
          type="text"
          value={servicioData.telefono}
          onChange={(e) => setServicioData({ ...servicioData, telefono: e.target.value })}
        />
      </label>
      <label>
        Estado:
        <input
          type="checkbox"
          checked={servicioData.estado}
          onChange={(e) => setServicioData({ ...servicioData, estado: e.target.checked })}
        />
      </label>
      <button type="submit">Actualizar servicio</button>
    </form>
  );
};

export default EditarServicio;