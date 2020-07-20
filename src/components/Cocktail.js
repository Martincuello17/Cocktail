import React from 'react';
import './Cocktail.css';
import { strIngredient } from '../utils';

export const Cocktail = ({ item, onCocktailSelect }) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-2">
                    <img alt="Imagen Cocktail" src={item.strDrinkThumb} />
                </div>
                <div className="col-md-8">
                    <h4>{item.strDrink}</h4>
                    <p><b>Ingredients: </b>{strIngredient(item)}.</p>
                </div>
                <div className="col-md-2 align-self-end">
                    <a href="#" onClick={() => onCocktailSelect(item)} >View more...</a>
                </div>
            </div>
        </div>
    );
};