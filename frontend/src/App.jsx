import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
