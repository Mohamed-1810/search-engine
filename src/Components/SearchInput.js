import React from 'react';


class SearchInput extends React.Component{



    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
    // onclick(event){
    //     alert('hello');
    // }
    constructor(props){
        super(props)
        this.state ={entry:  ''}
        // console.log(this.state.entry)
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
        
    }

    render(){
        return(

            <div className='ui segment'>
                <form action='' className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <div className='ui massive icon input'>
                        <input type="text" placeholder='Search Here...' 
                        onChange= {(event) => this.setState({entry:event.target.value})}
                        value={this.state.entry}
                        />
                        <i className='search icon'></i>
                    
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;