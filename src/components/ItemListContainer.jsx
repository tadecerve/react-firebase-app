import { useState, useEffect } from "react";
import data from "../data/servicios.json";
import ItemList from "./ItemList";
import { pedirDatos } from "../helpers/pedirDatos";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const serviciosRef = collection(db, "servicios");

    getDocs(serviciosRef).then((resp) => {
      setServicios(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div>
      {/* <Navbar/> */}
      <ItemList servicios={servicios} />
    </div>
  );
};

export default ItemListContainer;
