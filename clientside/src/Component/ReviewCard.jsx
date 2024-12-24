const ReviewCard = ({ review, onDelete }) => (
    <div className="border p-4 rounded-md shadow-sm">
      <h2>{review.title}</h2>
      <p>By {review.author}</p>
      <p>Rating: {review.rating}⭐</p>
      <p>{review.text}</p>
      <button onClick={() => onDelete(review.id)} className="bg-red-500 text-white">
        Delete
      </button>
    </div>
  );
  
  export default ReviewCard;
  