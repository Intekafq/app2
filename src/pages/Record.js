import React from "react";
import Header from "../pages/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import Datatable from "../pages/Datatable";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Record() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
const removeItem = (index)=> 
{
  let arr = data;
  arr.splice(index, 1);
  setData([...arr]);
  
}
  return (
    <div>
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button variant="contained" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Action</h3>
        </div>
        {
            data.map((element,index) => {
                return(
                  <div className="data">
                  <div className="data_val" key={index}>
                    
                    <h3>{element.name}</h3>
                    <h3>{element.email}</h3>
                   <Button variant="contained" color="error" onClick={() => removeItem(index)}><DeleteForeverIcon /></Button>
                  </div>
                </div>
                )
            })
        }
      </div>
    </div>
  );
}
export default Record;
