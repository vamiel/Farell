import {BrowserRouter, Routes, Route} from "react-router-dom";
import EditFish from "./components/EditFish";
import AddFish from "./components/AddFish";
import FishList from "./components/FistList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FishList/>}/>
        <Route path="add" element={<AddFish/>}/>
        <Route path="edit/:id" element={<EditFish/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
