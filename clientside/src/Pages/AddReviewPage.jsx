import { useNavigate } from "react-router-dom";
import { createReview } from "../Services/Api";
import ReviewForm from "../Component/ReviewForm";

const AddReviewPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    createReview(data).then(() => navigate("/"));
  };

  return <ReviewForm onSubmit={handleSubmit} />;
};

export default AddReviewPage;
