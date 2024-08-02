import { Link, Outlet } from "react-router-dom";
import "../App.css"
import logo from '/Images/logo.png'
import './navbar.css'


export function NavBar() {
  return (
    <>
      <div class = "NavBar">
      <img src={logo} className="NavBarLogo" alt="Logo" />  
        <Link to = "/">
          <button class = "NavButtons"> Home </button>
        </Link>
        <Link to="/members">
          <button class = "NavButtons"> Members </button>
        </Link>
        <Link to="/tasks">
          <button class = "NavButtons"> Tasks </button>
        </Link>
      <Outlet />
    </div> 
    </>
  );
}