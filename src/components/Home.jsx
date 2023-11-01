import { useAuth } from "../context/authContext";
import {  signOut } from "firebase/auth";
import "../styles.css";
import { auth } from "../firebase";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";


export function Home() {
  // const authContext = useContext(context)
  const { user, logout } = useAuth();
  
  console.log(user.email);

  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
return(
  <div>
    <Navbar>
    
    </Navbar>
    
  </div>
  
  
)
}

