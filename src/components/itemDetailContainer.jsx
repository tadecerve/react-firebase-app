import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../firebase";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(()=>{
        const docRef = doc(db, "servicios",id);
        getDoc(docRef)
            .then((resp)=> {
                console.log(resp);
                console.log(user);
            })
    }, [id])


    return(
        <div>
            {item}
        </div>
    )
}

export default ItemDetailContainer