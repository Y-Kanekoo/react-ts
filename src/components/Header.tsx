import React from "react";
import { Link } from "react-router";

const Header: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |<Link to="/sample01">Sample01</Link> |
      <Link to="/s216countup">S216CountUp</Link> |<Link to="/ex30">Ex30</Link>|
      <Link to="/ex50">Ex50</Link>|<Link to="/ex60">Ex60</Link>|
      <Link to="/ex70">Ex70</Link>|<Link to="/ex80">Ex80</Link>|
      <Link to="/ex90">Ex90</Link>|<Link to="/ex100">Ex100</Link>|
      <Link to="/ex110">Ex110</Link>|<Link to="/ex120">Ex120</Link>|
      <Link to="/ex130">Ex130</Link>|
    </nav>
  );
};
export default Header;
