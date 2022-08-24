// import { render } from '@testing-library/react'
import React from 'react'


const Navbar =() => {
    return(
        <nav className='ui raised very padded segment'>
            <h1 style={{width:"900px"}}>
            <a className='ui ' href="/">Image Search Engine</a></h1>
            {/* <h2 className='ui center aligned container'>Navbar</h2> */}
            <div className='ui right floated header'>
                 <button className='ui button'><a href="/home">Home </a></button>
                 <button className='ui button'><a href="/about">About</a></button>
                 
            </div>
        </nav>
        
    )
}


export default Navbar