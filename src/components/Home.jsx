import { useAuth } from "../context/authContext";

import "../styles.css";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export function Home() {
  // const authContext = useContext(context)
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user.uid);

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
