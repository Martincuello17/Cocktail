import './Cocktail.css';
import React from 'react';

export const strIngredient = (item) => {
    var ingredients = ``;
    var cont1 = 1;
    var cont2 = 1;
    for (var i in item) {
        if ( (`${i}` === `strIngredient${cont1}`) && (`${item[i]}` !== `null`)) {
            cont1 += 1;
            ingredients += `${item[i]} `;    
            for(var j in item) {    
                if ( (`${j}` === `strMeasure${cont2}`) && (`${item[j]}` !== `null`)) {
                    cont2 += 1;
                    ingredients += `${item[j]}, `;
                    break;
                };
            };
        };
    };
    cont1 = 0;
    cont2 = 0;
    return ingredients;
}  


export const Cocktail = ({ item, onCocktailSelect }) => {
    return( 
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
                    <a href="#" onClick= {() => onCocktailSelect(item)} >View more...</a>    
                </div>
            </div>
        </div>
        );
};