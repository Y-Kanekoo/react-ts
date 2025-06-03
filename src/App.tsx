import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sample01 from "./pages/Sample01";
import Myname from "./components/Myname";
import Ex30 from "./pages/Ex30";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Myname /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample01" element={<Sample01 />} />
          <Route path="/ex30" element={<Ex30 />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
