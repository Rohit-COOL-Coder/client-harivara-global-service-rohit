import Home from "./pages/home/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Edit from "./pages/edit/Edit";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
