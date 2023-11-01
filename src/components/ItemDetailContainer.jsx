import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "servicios", id);
    getDoc(docRef)
      .then((resp) => {
        console.log(resp.data());
      })
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
}

export default ItemDetailContainer;
