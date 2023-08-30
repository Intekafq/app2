import React from "react";
import Header from "../pages/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Logo from "../assets/logo512.png";

import { useState } from "react";
// import Datatable from "../pages/Datatable";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Post() {
    const [form, setForm] = useState("");
    const [data, setData] = useState([]);
    const addData = (e) => {
        setData([...data, form]);
        setForm(form)
      };
  return (
    <div>
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.title}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={(e)=> setForm({...form , title:e.target.value})}
          />
          <TextField
            value={form.desc}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e)=> setForm({...form, desc:e.target.value })}
          />
          <Button variant="contained" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="container">
      {
        data.map((element, index)=> {
            return(
            
                <div className="card-item">
                  
                    <h1>{element.title}</h1>
                    <p>{element.desc}</p>
                </div>
               
               
           
            )
        })
      }
      </div>
    </div>
  );
}
export default Post;
