import './CocktailDetail.css';
import React from 'react';
import {strIngredient} from './Cocktail';


export const CocktailDetail = ({item, onBack=()=>{}}) => {
    if(!item){
        return <div>Loading...</div>;
    }
    return( 
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <a href='#' onClick={onBack} >Back</a>
                </div>
            </div>    
            <div className="row">
                <div className="col-md-3">
                        <h3>{item.strDrink}</h3>
                </div>
            </div>
            <div className="row">    
                <div className="col-md-2">
                    <img alt="Imagen Cocktail" src={item.strDrinkThumb} />
                </div>
                <div className="col-md-9">
                    <p><b>Ingredients: </b>
                    {strIngredient(item)}.</p>
                    <p><b>Glass: </b>
                    {item.strGlass}</p>
                    <p><b>Category: </b>
                    {item.strCategory}</p>
                    <p><b>Alcohol: </b> 
                    {(item.strAlcoholic === 'Alcoholic') ||
                    (item.strAlcoholic === 'Optional alcohol') ?
                    'Yes.' : 'No.'} </p>
                </div> 
            </div>
            <div className="row">
                <div className="col-md-7">
                    <p><b>Instructions: </b>{item.strInstructions}</p>
                </div>
            </div>
        </div>       
    );
}