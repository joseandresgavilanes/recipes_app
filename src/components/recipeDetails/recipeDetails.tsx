import React from 'react'

import "./recipeDetails.scss"

const recipeDetails = () => {
  return (
    <div className="recipeDetails__recipe">
      <div className="recipeDetails__recipe__img">
          <img src="https://cdn7.kiwilimon.com/brightcove/9794/9794.jpg" alt="" />
      </div>
      <div className="recipeDetails__recipe__content">
          <h1 className="recipeDetails__recipe__content-title">
            COLD CAKE WITH PINEAPPLE
          </h1>
          <div className="recipeDetails__recipe__content-stats">
              <div className="recipeDetails__recipe__content-stats__content">
                <div className="recipeDetails__recipe__content-stats__content-time">
                  <i></i>
                  <p>2h 30 mins</p>
                </div>
                <div className="recipeDetails__recipe__content-stats__content-rank">
                  <i></i>
                  <p>Low</p>
                </div>
              </div>
              <div className="recipeDetails__recipe__content-stats__score">
                <p>5</p>
                <div className="recipeDetails__recipe__content-stats__score-stars">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
          </div>
          <div className="recipeDetails__recipe__content-extras">
            <div className="recipeDetails__recipe__content-extras__favorite">
              <i></i>   
              <p>Favorite</p>       
            </div>
            <div className="recipeDetails__recipe__content-extras__collection">
              <i></i>
              <p>Collection</p>       

            </div>
            <div className="recipeDetails__recipe__content-extras__planner">
              <i></i>
              <p>Planner</p>       

            </div>
            <div className="recipeDetails__recipe__content-extras__supermarketList">
              <i></i>
              <p>Super Market List</p>       
            </div>
            <div className="recipeDetails__recipe__content-extras__photo">
              <i></i>
              <p>Upload yours</p>       

            </div>
            <div className="recipeDetails__recipe__content-extras__print">
              <i></i>
              <p>Print</p>       

            </div>
          </div>
      </div>
    </div>
  )
}

export default recipeDetails