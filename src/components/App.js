import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {SearchBar} from './SearchBar';
import {CocktailList} from './CocktailList';
import {CocktailDetail} from './CocktailDetail';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], selectedItem: null };
    }    
    onSearchSubmit = async (term) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then( result => { 
            this.setState({ items: result.drinks || [] })});
    }
     
    onCocktailSelect = item => {
        this.setState ({ selectedItem: item});
    }

    onBack = () => {
        this.setState({selectedItem: null});
    }

    render() {        
        return (
        <div>
            <SearchBar onBack={this.onBack} onSubmit={this.onSearchSubmit} />
            {this.state.selectedItem ? <CocktailDetail onBack={this.onBack} item={this.state.selectedItem} /> :
            <CocktailList onCocktailSelect={this.onCocktailSelect} items={this.state.items}/>}
        </div>
        );
    }
}
