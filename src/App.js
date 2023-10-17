import axios from "axios";
import { Route , Routes } from "react-router-dom";
import "./App.css";
import Users from "./Pages/Users";
import { useEffect, useState } from "react";
import UserDetail from "./Pages/UserDetail";

function App() {
  const [users , setUsers]= useState([]);
  const [usersLoad , setUsersLoad] = useState(true)
  const getUsersData = async()=>{
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
      setUsersLoad(false)
    } catch (error) {
      console.log(error)
    }
  }
// getUsersData()
useEffect(()=>{
  getUsersData()
},[usersLoad])
  return (
    <div>
      <h1>Hello world!!!</h1>
      <Routes>
      
      <Route path="/" element={<Users users={users} usersLoad={usersLoad} />} />
      <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
