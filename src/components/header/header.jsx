import { Link } from "react-router-dom";
import "../header/header.css";
import { FaBars } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import { useState } from "react";

const header = () => {
  const [isopen, setIsOpen] = useState(false);
  return (
      <div className="nav-bar">
        <p className="logo">seagsang</p>
        <button className="nav-toggle" onClick={()=> setIsOpen(!isopen)}>
        {isopen? <LuX size={30}/> : <FaBars size={30}/>}
        </button>
        <ul className={isopen ? "nav-list active":"nav-list"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">ContactUs</Link></li>
        </ul>
      </div>
  );
};

export default header;
