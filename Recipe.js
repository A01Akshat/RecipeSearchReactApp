import React from "react";
import './App.css';
const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>
                        {ingredient.text }
                    </li>
                 ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" style={{width: "200px",height:"200px",borderRadius:"30%"}}/>
        </div>
    );
}

export default Recipe;
