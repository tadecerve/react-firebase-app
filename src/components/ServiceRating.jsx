import { useState,useEffect } from 'react';
import { doc, setDoc,getDoc } from "firebase/firestore";
import { db } from '../firebase'; 
import { useAuth } from '../context/authContext';


export function ServiceRating({ serviceId }) {
  const [rating, setRating] = useState(0); // Estado para almacenar la calificación del usuario
  const [comment, setComment] = useState(''); // Estado para almacenar el comentario del usuario
  const { user } = useAuth(); // Obtén el usuario actual
  const [isFavorited, setIsFavorited] = useState(false); 


  useEffect(() => {
    const checkIfFavorited = async () => {
      const docRef = doc(db, 'usersrating', `${user.uid}_${serviceId}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setIsFavorited(true);
      }
    };

    if (user) {
      checkIfFavorited();
    }
  }, [user, serviceId]);


  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value); // Actualiza el estado del comentario cuando el usuario cambia el texto en el área de texto
  };

  const handleSubmit = async () => {
    // Verifica que user no es undefined antes de intentar acceder a user.uid
    if (user && !isFavorited ) {
      // Crea un objeto con los datos de la calificación
      const ratingData = {
        serviceId: serviceId,
        rate: rating,
        userId: user.uid,
        comment: comment, 
      };

      // Envía los datos a Firebase
      await setDoc(doc(db, "usersrating", `${user.uid}_${serviceId}`), ratingData);
      alert('Calificación y comentario enviados con éxito!');
    } else {
      // Maneja el caso en que user es undefined (es decir, el usuario no está autenticado)
      console.log('El usuario no está autenticado');
    }
  };

  return (
    <div className="service-rating">
      <h3>Calificar este servicio</h3>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingChange(star)}
            className={star <= rating ? 'star selected' : 'star'}
          >
            {star <= rating ? '⭐' : '☆'}
          </span>
        ))}
      </div>
      <textarea
        className="comment-input"
        placeholder="Deja un comentario"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button className="submit-button" onClick={handleSubmit}>Enviar calificación y comentario</button>
    </div>
  );
}