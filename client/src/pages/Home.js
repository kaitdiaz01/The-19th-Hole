import React from "react";
import './home.css';
import Welcome from '../components/Welcome';
import Login from "../components/Login";



const Home = () => {
  return (
    <div className="container" id="Home" >
     <Welcome />
    </div>
  );
};

export default Home;
