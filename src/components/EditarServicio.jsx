import React, { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const EditarServicio = () => {
  const { id } = useParams();
  const [servicioData, setServicioData] = useState({
    titulo: "",
    precio: "",
    telefono: "",
    descripcion: "",
    estado: false,
  });

  useEffect(() => {
    const fetchServicio = async () => {
      const servicioRef = doc(db, "servicios", id);
      const servicioSnap = await getDoc(servicioRef);

      if (servicioSnap.exists()) {
        setServicioData(servicioSnap.data());
      } else {
        console.log("No such document!");
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
      descripcion: servicioData.descripcion,
      estado: servicioData.estado,
    });

    alert("El servicio ha sido actualizado con éxito");
  };

  return (
    <div>
      <h1 className="centrar-texto">Editar Servicio</h1>
      <form className="EditarServicio" onSubmit={handleUpdate}>
        <label>
          Título:
          <input
            type="text"
            value={servicioData.titulo}
            onChange={(e) =>
              setServicioData({ ...servicioData, titulo: e.target.value })
            }
          />
        </label>
        <label>
          Precio:
          <input
            type="text"
            value={servicioData.precio}
            onChange={(e) =>
              setServicioData({ ...servicioData, precio: e.target.value })
            }
          />
        </label>
        <label>
          Teléfono:
          <input
            type="text"
            value={servicioData.telefono}
            onChange={(e) =>
              setServicioData({ ...servicioData, telefono: e.target.value })
            }
          />
        </label>
        <label>
          Descripcion:
          <input
            type="text"
            value={servicioData.descripcion}
            onChange={(e) =>
              setServicioData({ ...servicioData, descripcion: e.target.value })
            }
          />
        </label>
        <label>
          Estado:
          <input
            type="checkbox"
            checked={servicioData.estado}
            onChange={(e) =>
              setServicioData({ ...servicioData, estado: e.target.checked })
            }
          />
        </label>
        <button type="submit">Actualizar servicio</button>
        <button className="boton boton--primario"><Link to="/misServicios">Volver a Mis Servicios</Link></button>
      </form>
     
      <Footer></Footer>
    </div>
  );
};

export default EditarServicio;
