import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import '../App.css';

function Page(props) {
  const styleObj = {
   
    marginTop: "10px",
}
const navigate = useNavigate()

  return (

    <div className="App">
    
 <Button variant="contained" className="back" style={styleObj} onClick={() =>navigate (-1)}>Back to Home</Button>
    <div className="body-img">  <img src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="" />    
    </div>
 
    </div>
  );  
}

export default Page;
