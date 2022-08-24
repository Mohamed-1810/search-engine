import React from "react"
import Searchinput from "./SearchInput"
import {BrowserRouter, Router} from 'react'


function onSearchSubmit(entry){
    console.log(entry);
    // console.log('tharik')

}

const app = () => {
    return (
        <div>
        <Navbar />
        <div className="ui conatiner" style={{marginTop:'30px'}}><Searchinput onSearchSubmit={onSearchSubmit}/></div>
        </div>
    )
}


export default app;