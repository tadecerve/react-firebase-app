import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"; // Asegúrate de que esta es la ruta correcta a tu configuración de Firebase

const EditarPerfil = () => {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef)
        .then((doc) => {
          if (doc.exists()) {
            setPerfil(doc.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const userRef = doc(db, "users", user.uid);
      updateDoc(userRef, {
        name: perfil.name,
        lastName: perfil.lastName,
        phone: perfil.phone,
        ubicacion: perfil.ubicacion
      })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    }
  };

  if (!perfil) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={perfil.name}
          onChange={(e) => setPerfil({ ...perfil, name: e.target.value })}
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          value={perfil.lastName}
          onChange={(e) => setPerfil({ ...perfil, lastName: e.target.value })}
        />
      </label>
      <label>
        Teléfono:
        <input
          type="text"
          value={perfil.phone}
          onChange={(e) => setPerfil({ ...perfil, phone: e.target.value })}
        />
      </label>
      <label>
        Ubicación:
        <input
          type="text"
          value={perfil.ubicacion}
          onChange={(e) => setPerfil({ ...perfil, ubicacion: e.target.value })}
        />
      </label>
      <button type="submit" >Guardar cambios</button>
    </form>
  );
};

export default EditarPerfil;
