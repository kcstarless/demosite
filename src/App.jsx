import CssTextClamp from "./demos/CssTextClamp";
import { Header } from "./layouts/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/demo1" element={<CssTextClamp />} />
      </Routes>
    </Router>
  );
}

export default App;
