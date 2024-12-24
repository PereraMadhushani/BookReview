import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReview, updateReview } from "../Services/Api";
import ReviewForm from "../Component/ReviewForm";

const EditReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);

  useEffect(() => {
    getReview(id).then(setReview);
  }, [id]);

  const handleSubmit = (data) => {
    updateReview(id, data).then(() => navigate("/"));
  };

  return review ? <ReviewForm onSubmit={handleSubmit} initialData={review} /> : <p>Loading...</p>;
};

export default EditReviewPage;
