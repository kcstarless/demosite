import { CssTextClamp } from "./demos/csstextclamp/CssTextClamp";
import { SmoothScroll } from "./demos/smoothscroll/SmoothScroll";
import { Header } from "./layouts/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/CssTextClamp" element={<CssTextClamp />} />
        <Route path="/SmoothScroll" element={<SmoothScroll />} />
      </Routes>
    </Router>
  );
}

export default App;
