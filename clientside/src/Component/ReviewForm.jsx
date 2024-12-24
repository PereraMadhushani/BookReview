import { useState } from "react";

const ReviewForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    author: initialData.author || "",
    rating: initialData.rating || 1,
    text: initialData.text || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" required />
      <select name="rating" value={formData.rating} onChange={handleChange}>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>{r} Star</option>
        ))}
      </select>
      <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Review" required />
      <button type="submit" className="bg-blue-500 text-white">Submit</button>
    </form>
  );
};

export default ReviewForm;
