import { Link } from "react-router-dom";

const Header = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <h1 className="text-lg">Book Review App</h1>
    <div className="flex space-x-4">
      <Link to="/">Home</Link>
      <Link to="/add">Add Review</Link>
    </div>
  </nav>
);

export default Header;
