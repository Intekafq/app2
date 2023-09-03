import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Record from './pages/Record';
import Oneform from './pages/Oneform';
import Post from './pages/Post';
import Header from './pages/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import Page404 from './pages/Page404';
import Insta from './pages/Insta';
import Twitt from './pages/Twitt';
function App() {
{/*const [state,setState] = useState(2);
const [data ,setData]= useState([]);
  useEffect(()=>{
      async function getData()
      {
const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

        const res = await get.json();

        setData(res);
        console.log(res);
      }
    getData();

   
  },[state])*/}

  return (
   
    <div className="App">
    <Header />
     <Routes>
        <Route  path="/" element={ <Record /> } title="Home"/>
        
        <Route path="/*" element={<Page404/>} title="404" />
        <Route path="/about" element={  <About />} title="about us" />
         
        <Route path="/contact" element={ <Contact />} title="contact us" >
        <Route path="insta" element={<Insta />}/>
        <Route path="twitt" element={<Twitt />}/>
        </Route>
       
   
  
                                  {/*<Oneform />*/}
                                  {/*<Post />*/}



                                { /* <button onClick={()=> setState(state+2)}>click {state}</button>
                                    {
                                      data.map((element,index)=> {
                                        document.title = `${element.firstName} Employee Online`;
                                        return(
                                          <div className='table'>
                                          <h1 className='a'>{element.firstName}</h1>
                                          <h1 className='a'>{element.lastName}</h1>
                                          <h1 className='a'>{element.email}</h1>
                                          </div>
                                        )
                                      })
                                    }*/}


    </Routes>

    </div> 
    
  );
}

export default App;
