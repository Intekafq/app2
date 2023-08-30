import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Record from './pages/Record';
import Oneform from './pages/Oneform';
import Post from './pages/Post';
function App() {

  
  return (
    <div className="App">
      {/*<Record />
  <Oneform />*/}
  <Post />
    </div>
  );
}

export default App;
