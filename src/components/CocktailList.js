import './CocktailList.css'
import React from 'react';
import {Cocktail} from './Cocktail';

export const CocktailList = ({ items, onCocktailSelect }) => {
    const renderedList = items.map((item) => {
        return (<Cocktail 
                    key={item.idDrink}
                    onCocktailSelect={onCocktailSelect} 
                    item={item} />
        );
    });
    return(
        <div className="col-md-7 col-center">
            <b><h4>Total Results: {items.length}</h4></b>
            {renderedList}
        </div>
    );
};