import { Routes, Route } from "react-router-dom";
import Suk from "./assets/Suk";
import Prank from "./assets/Prank";


export default function App() {
  return (
    <Routes>
      <Route path="/result" element={<Suk />} />
      <Route path="/resultt" element={<Prank />} />
      
    </Routes>
  );
}
