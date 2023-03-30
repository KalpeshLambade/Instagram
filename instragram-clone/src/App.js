// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Homepage from "./Component/Homepage";
import Signup from "./Component/SignUp";
import AddPost from "./Component/AddPost";
import Profile from "./Component/Profile";
import Searchbar from "./Component/Searchbar";
import EditProfile from "./Component/EditProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/post" element={<AddPost/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route  exact path="/search" element={<Searchbar/>}  />
        <Route exact path="/edit" element={<EditProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
