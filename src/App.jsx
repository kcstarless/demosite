import { CssTextClamp } from "./demos/csstextclamp/CssTextClamp";
import HoverProjectGallery from "./demos/hoverprojectgallery/HoverProjectGallery";
import { SmoothScroll } from "./demos/smoothscroll/SmoothScroll";
import { ThreeFiber } from "./demos/threejs/ThreeFiber";
import { PreventMouseScroll } from "./demos/preventmousescroll/PreventMouseScroll";

import { Header } from "./layouts/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/CssTextClamp" element={<CssTextClamp />} />
        <Route path="/SmoothScroll" element={<SmoothScroll />} />
        <Route path="/ThreeFiber" element={<ThreeFiber />} />
        <Route path="/HoverProjectGallery" element={<HoverProjectGallery />} />
        <Route path="/PreventMouseScroll" element={<PreventMouseScroll />} />
      </Routes>
    </Router>
  );
}

export default App;
