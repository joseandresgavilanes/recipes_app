import React from 'react'
import "./ingredients.scss"
const Ingredients = () => {
  return (
    <div className="recipeDetails__ingredients">
        <div className="recipeDetails__ingredients-description">
            <p className="recipeDetails__ingredients-description-text">
            Este pastel frío de piña con gelatina es el postre perfecto para disfrutar en familia, ya que no necesitas de un horno, es económico y también muy fácil de preparar. Anímate a probar algo diferente y prepara este postre con un sabor muy tropical, ¡te fascinará!
            </p>
            <div className="recipeDetails__ingredients-description-details">
                <p>Lorem, ipsum dolor.</p>
                    <div className="recipeDetails__ingredients-description-details__social">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-solid fa-envelope"></i>
                
                </div>
            </div>
        </div>
        <div className="recipeDetails__ingredients-ingredients">
            <div className="recipeDetails__ingredients-ingredients__main">
                <h2>INGREDIENTS</h2>
                <p>8 slices</p>
            </div>
            <div className="recipeDetails__ingredients-ingredients__content">
                <div className="recipeDetails__ingredients-ingredients__content-ingredient">
                    <input className='recipeDetails__ingredients-ingredients__content-ingredient__check' type = "checkbox"/>
                    <label>1 litro de agua, caliente, para la gelatina de piña</label>
                </div>
                <div className="recipeDetails__ingredients-ingredients__content-ingredient">
                    <input  className='recipeDetails__ingredients-ingredients__content-ingredient__check' type = "checkbox"/>
                    <label>1/2 tazas de Conserva de piña con linaza McCormick® Balance , para el relleno</label>
                </div>
                <div className="recipeDetails__ingredients-ingredients__content-ingredient">
                    <input className='recipeDetails__ingredients-ingredients__content-ingredient__check'  type = "checkbox"/>
                    <label>1/2 tazas de Conserva de piña con linaza McCormick® Balance , para el relleno</label>
                </div>
                <div className="recipeDetails__ingredients-ingredients__content-ingredient">
                    <input className='recipeDetails__ingredients-ingredients__content-ingredient__check'  type = "checkbox"/>
                    <label>1/2 tazas de Conserva de piña con linaza McCormick® Balance , para el relleno</label>
                </div>
                <div className="recipeDetails__ingredients-ingredients__content-ingredient">
                    <input className='recipeDetails__ingredients-ingredients__content-ingredient__check' type = "checkbox"/>
                    <label>1 litro de agua, caliente, para la gelatina de piña</label>
                </div>
                <div className="recipeDetails__ingredients-ingredients__content-ingredient">
                    <input className='recipeDetails__ingredients-ingredients__content-ingredient__check' type = "checkbox"/>
                    <label>1/2 tazas de Conserva de piña con linaza McCormick® Balance , para el relleno</label>
                </div>
               
            </div>
        </div>
        <div className="recipeDetails__ingredients-preparation">
            <h2>PREPARATION</h2>
            <div className="recipeDetails__ingredients-preparation__content">
                <div className="recipeDetails__ingredients-preparation__content-step">
                    <input className='recipeDetails__ingredients-preparation__content-step__check' type = "checkbox"/>
                    <label>Vierte el agua caliente en un bowl y disuelve la gelatina de piña. Posteriormente, vierte la preparación sobre una charola extendida, refrigera por 1 hora o hasta que cuaje. Corta en cubos medianos y reserva.</label>
                </div>
                <div className="recipeDetails__ingredients-preparation__content-step">
                    <input className='recipeDetails__ingredients-preparation__content-step__check' type = "checkbox"/>
                    <label>Para el relleno: Licúa la leche evaporada, la leche condensada, el queso crema y la Conserva de piña con linaza McCormick® Balance por 3 minutos y sin dejar de moler, agrega la grenetina previamente hidratada y fundida. Reserva el relleno del pastel frío de piña.</label>
                </div>
                <div className="recipeDetails__ingredients-preparation__content-step">
                    <input className='recipeDetails__ingredients-preparation__content-step__check' type = "checkbox"/>
                    <label>Coloca una capa de soletas en un molde rectangular previamente engrasado, vierte un poco del relleno, coloca las rodajas de piña alrededor y agrega los cubos de gelatina de piña. Vierte el resto del relleno y agrega otra capa de soletas.</label>
                </div>
                <div className="recipeDetails__ingredients-preparation__content-stept">
                    <input className='recipeDetails__ingredients-preparation__content-step__check' type = "checkbox"/>
                    <label>Refrigera el pastel frío de piña con gelatina por 1 hora o hasta que cuaje y esté completamente compacto.</label>
                </div>
                <div className="recipeDetails__ingredients-preparation__content-step">
                    <input className='recipeDetails__ingredients-preparation__content-step__check' type = "checkbox"/>
                    <label>1 litro de agua, caliente, para la gelatina de piña</label>
                </div>
                <div className="recipeDetails__ingredients-preparation__content-step">
                    <input className='recipeDetails__ingredients-preparation__content-step__check' type = "checkbox"/>
                    <label>Desmolda el pastel frío de piña con gelatina y decora con cubos de piña y flores comestibles.</label>
                </div>
               
            </div>
        </div>
        <div className="recipeDetails__ingredients-extras">
            <div className="recipeDetails__ingredients-extras__content">
                <h2>PRESENTATIONS</h2>
                <p>Desmolda el pastel frío de piña con gelatina y decora con cubos de piña y flores comestibles.</p>
            </div>
            
            <div className="recipeDetails__ingredients-extras__content">
                <h2>TIPS</h2>
                <p>La mezcla del relleno debe quedar semiespesa, pero si no tienes esa consistencia, puedes agregar más queso crema y otro sobre de grenetina para lograr el pastel frío perfecto.</p>
            </div>
            

        </div>
    </div>
  )
}

export default Ingredients