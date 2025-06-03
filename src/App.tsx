import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sample01 from "./pages/Sample01";
import Ex30 from "./pages/Ex30";
import Ex50 from "./pages/Ex50";
import Ex60 from "./pages/Ex60";
import Ex70 from "./pages/Ex70";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample01" element={<Sample01 />} />
          <Route path="/ex30" element={<Ex30 />} />
          <Route path="/ex50" element={<Ex50 />} />
          <Route path="/ex60" element={<Ex60 />} />
          <Route path="/ex70" element={<Ex70 />} />
          {/* <Route path="/ex80" element={<Ex80 />} /> */}
          {/* <Route path="/ex90" element={<Ex90 />} /> */}
          {/* <Route path="/ex100" element={<Ex100 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
