import { BrowserRouter , Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import HomePage from "./Pages/HomePage";
import AddReviewPage from "./Pages/AddReviewPage";
import EditReviewPage from "./Pages/EditReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddReviewPage />} />
        <Route path="/edit/:id" element={<EditReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;