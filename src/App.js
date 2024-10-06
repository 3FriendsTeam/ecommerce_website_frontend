import { Routes, Route } from "react-router-dom";
import LayoutClient from "./components/client/LayoutClient/layoutClient";
import LayoutAdmin from "./components/admin/LayoutAdmin/layoutAdmin";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="admin/*" element={<LayoutAdmin />}></Route>

        <Route path="/*" element={<LayoutClient />}></Route>
      </Routes>
    </div>
  );
}

export default App;
