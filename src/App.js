import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Record from './pages/Record';
import Oneform from './pages/Oneform';
import Post from './pages/Post';
import Header from './pages/Header';
function App() {
const [state,setState] = useState(2);
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

   
  },[state])

  return (
    <div className="App">
      {/*<Record />
  <Oneform />*/}
  {/*<Post />*/}

  <Header />

  <button onClick={()=> setState(state+2)}>click {state}</button>
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
     }
    </div>
  );
}

export default App;
