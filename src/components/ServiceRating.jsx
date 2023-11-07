import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";

export function ServiceRating({ serviceId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { user } = useAuth();

  console.log(user.uid);
  console.log(serviceId);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Verifica que la calificación sea mayor que 0 y que se haya ingresado un comentario
    if (rating > 0 && comment.trim() !== "") {
      onRatingSubmit(serviceId, rating, comment);
      // Limpia los valores después de enviar la calificación
      setRating(0);
      setComment("");
    } else {
      // Muestra un mensaje de error si la calificación o el comentario son inválidos
      alert(
        "Por favor, selecciona una calificación y escribe un comentario válido."
      );
    }
  };

  const handleRatingChange = async (newRating) => {
    setRating(newRating);

    const ratingData = {
      serviceId: serviceId,
      rate: newRating,
      userId: user.uid,
      comment: comment,
    };
    await setDoc(
      doc(db, "usersrating", `${user.uid}_${serviceId}`),
      ratingData
    );
  };

  return (
    <div>
      <h3>Calificar este servicio</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingChange(star)}
          style={{ cursor: "pointer" }}
        >
          {star <= rating ? "⭐" : "☆"}
        </span>
      ))}
      <textarea
        placeholder="Deja un comentario"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button onClick={handleSubmit}>Enviar calificación y comentario</button>
    </div>
  );
}
