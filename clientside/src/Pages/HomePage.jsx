import { useEffect, useState } from "react";
import { deleteReview, getReviews } from "../Services/Api";
import ReviewCard from "../Component/ReviewCard";
import "./HomePage.css";

const HomePage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(setReviews);
  }, []);

  const handleDelete = (id) => {
    deleteReview(id).then(() => setReviews((prev) => prev.filter((r) => r.id !== id)));
  };

  return (
    <div className="p-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default HomePage;
