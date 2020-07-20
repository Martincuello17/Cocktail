import './SearchBar.css'
import React from 'react';


export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }  

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);       
    }; //para que el navegador no envie automaticamente el formulario

    render() {
        return (
            <div className='navbar bg-dark'>
                <form className='form-inline' onSubmit={this.onFormSubmit}>
                        
                            <input className='form-control'
                                type="text" 
                                value={this.state.term}
                                onChange={e => this.setState({ term:e.target.value })} 
                            />
                            <button onClick={this.props.onBack} className='btn btn-primary' >Buscar</button>
                        
                </form>
            </div>
        );
    } 
}