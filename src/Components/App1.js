import axios from "axios";
import React from "react";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList" 
import Navbar from './Navbar'
import {BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from './home'
import About from './about'



class App1 extends React.Component {


constructor(props){
    super(props)

    this.state={images:[]}
    this.onSearchSubmit=this.onSearchSubmit.bind(this)
}

async onSearchSubmit(entry){
    const response = await axios.get(`https://pixabay.com/api/?key=29118894-030cd83da200ff5da1ca8c361&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits)
    this.setState({images:response.data.hits})

}

render()  {
    return (
        <div>
        <BrowserRouter>
        <div className="App">
        <Navbar /> 
        <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
        </div>
        </BrowserRouter>
        <div className="ui conatiner" style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
            we currently having {this.state.images.length} images
            </div>1
        </div>
            
    )
}


}

export default App1;