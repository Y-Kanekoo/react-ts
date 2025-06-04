import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sample01 from "./pages/Sample01";
import S216CountUp from "./pages/sample/S216countUp";
import S220FetchEmployeeList from "./pages/sample/S220fetchEmployeeList";
import Ex30 from "./pages/Ex30";
import Ex50 from "./pages/Ex50";
import Ex60 from "./pages/Ex60";
import Ex70 from "./pages/Ex70";
import Ex80 from "./pages/Ex80";
import Ex90 from "./pages/Ex90";
// import Ex100 from "./pages/Ex100";
import Ex130 from "./pages/Ex130";
import Ex140 from "./pages/Ex140";
import Ex170 from "./pages/Ex170";
import Ex180 from "./pages/Ex180";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample01" element={<Sample01 />} />
          <Route path="s216countup" element={<S216CountUp />} />
          <Route
            path="/s220fetchEmployeeList"
            element={<S220FetchEmployeeList />}
          />

          <Route path="/ex30" element={<Ex30 />} />
          <Route path="/ex50" element={<Ex50 />} />
          <Route path="/ex60" element={<Ex60 />} />
          <Route path="/ex70" element={<Ex70 />} />
          <Route path="/ex80" element={<Ex80 />} />
          <Route path="/ex90" element={<Ex90 />} />
          {/* <Route path="/ex100" element={<Ex100 />} /> */}
          <Route path="/ex130" element={<Ex130 />} />
          <Route path="/ex140" element={<Ex140 />} />
          <Route path="/ex170" element={<Ex170 />} />
          <Route path="/ex180" element={<Ex180 />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
