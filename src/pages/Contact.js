import React from 'react'
import Typed from 'react-typed';
import {Link, Outlet} from 'react-router-dom'
const Contact = () => {
  return (
    <div>

    <div className='container'>
    <Typed className='heading' strings={['Contact']} typeSpeed={120} backSpeed={140} loop  />
          <div className="body">
              <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam ullam quae excepturi reprehenderit ipsum laborum sapiente ducimus, at porro inventore odit tempore corporis a sunt, officiis quod ab beatae itaque numquam iure hic laboriosam similique facere. Assumenda ullam nostrum non incidunt corporis ipsa! Unde eius quasi explicabo aut ipsam.
              </h2>
            <Link to="insta"><h3>Instgram</h3></Link>  
            <Link to="twitt" ><h3>Twitter</h3></Link>
            <Outlet />
          </div>
    </div>

    </div>
  )
}

export default Contact