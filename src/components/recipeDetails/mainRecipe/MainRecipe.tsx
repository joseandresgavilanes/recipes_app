import React from 'react'
import "./mainRecipe.scss"

const MainRecipe = () => {
  return (
    <div className="recipeDetails__recipe">
        <div className="recipeDetails__recipe__img">
            <img className='recipeDetails__recipe__img-img' src="https://cdn7.kiwilimon.com/brightcove/9794/9794.jpg" alt="" />
        </div>
        <div className="recipeDetails__recipe__content">
            <h2 className="recipeDetails__recipe__content-title">
              COLD CAKE WITH PINEAPPLE
            </h2>
            <div className="recipeDetails__recipe__content-stats">
                <div className="recipeDetails__recipe__content-stats__content">
                  <div className="recipeDetails__recipe__content-stats__content-time">
                    <i className="fa-solid fa-hourglass-end"></i>
                    <p>2h 30 mins</p>
                  </div>
                  <div className="recipeDetails__recipe__content-stats__content-rank">
                  <i className="fa-solid fa-signal"></i>
                    <p>Low</p>
                  </div>
                </div>
                <div className="recipeDetails__recipe__content-stats__score">
                  <p>5</p>
                  <div className="recipeDetails__recipe__content-stats__score-stars">
                    <i className="recipeDetails__recipe__content-stats__score-stars__star fa-solid fa-star"></i>
                    <i className="recipeDetails__recipe__content-stats__score-stars__star fa-solid fa-star"></i>
                    <i className="recipeDetails__recipe__content-stats__score-stars__star fa-solid fa-star"></i>
                    <i className="recipeDetails__recipe__content-stats__score-stars__star fa-solid fa-star"></i>
                    <i className="recipeDetails__recipe__content-stats__score-stars__star fa-solid fa-star"></i>
                  </div>
                </div>
            </div>
            <div className="recipeDetails__recipe__content-extras">
              <div className="recipeDetails__recipe__content-extras__item">
              <i className="fa-solid fa-heart"></i> 
                <p>Favorite</p>       
              </div>
              <div className="recipeDetails__recipe__content-extras__item">
              <i className="fa-solid fa-table-cells-large"></i>
                <p>Collection</p>       

              </div>
              <div className="recipeDetails__recipe__content-extras__item">
              <i className="fa-solid fa-book"></i>
                <p>Planner</p>       

              </div>
              <div className="recipeDetails__recipe__content-extras__item">
              <i className="fa-solid fa-basket-shopping"></i>
                <p>List</p>       
              </div>
              <div className="recipeDetails__recipe__content-extras__item">
              <i className="fa-solid fa-camera"></i>
                <p>Post</p>       

              </div>
              <div className="recipeDetails__recipe__content-extras__item">
              <i className="fa-solid fa-print"></i>
                <p>Print</p>       

              </div>
            </div>
        </div>
      </div>

  )
}

export default MainRecipe