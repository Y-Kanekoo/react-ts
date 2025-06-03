import React from "react";
import { Link } from "react-router";

const Header: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |<Link to="/sample01">Sample01</Link> |
      <Link to="/ex30">Ex30</Link>
      {/* Add more links as needed */}
    </nav>
  );
};
export default Header;
