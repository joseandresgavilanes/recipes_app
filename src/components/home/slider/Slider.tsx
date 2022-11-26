import { MouseEvent, useRef, useState, useEffect } from "react"
import axios from "axios"
import { endpointUrl } from "../../../config"
import { Category } from "../../../vite-env"
import { RecipesCategory } from "./recipeCategory/RecipesCategory"

import "./slider.scss"

export const Slider = () => {
  const [imagen, setImagen] = useState(0)
  const [categories, setCategories] = useState(0)
  const [recipesCategoris, setRecipesCategoris] = useState<Category[] | undefined>(undefined)
  const refIconStatus = useRef<HTMLElement>(null)
  const refFirstSlider = useRef<HTMLUListElement>(null)
  const refLastSlider = useRef<HTMLUListElement>(null)
  const refArrowLeft = useRef<HTMLElement>(null)
  const refArrowRigth = useRef<HTMLElement>(null)
  const porcentImg = 16.66

  useEffect(()=> {
    axios.get(endpointUrl+'categories').then(({data})=> setRecipesCategoris(data))
  }, [])

  const selectImg = ({currentTarget}: MouseEvent<HTMLDivElement>) => {
    const position = parseInt(currentTarget.dataset.id || '1')-1
    setImagen(position)
    document.querySelectorAll('.'+principalClass+'-points-point').forEach(d=> d.classList.remove('active'))
    currentTarget.classList.add('active')
    refFirstSlider.current?.setAttribute("style", `transform: translateX(${-(porcentImg*position)}%)`)
    
    if(position > 0){
      if(refArrowLeft.current?.classList.contains('inactive')){
        refArrowLeft.current?.classList.remove('inactive')
      }
    }

    if(position == 5){
      if(!refArrowRigth.current?.classList.contains('inactive')){
        refArrowRigth.current?.classList.add('inactive')
      }
    }

    if(position < 5) {
      if(refArrowRigth.current?.classList.contains('inactive')){
        refArrowRigth.current?.classList.remove('inactive')
      }
    }

    if(position == 0){
      if(!refArrowLeft.current?.classList.contains('inactive')){
        refArrowLeft.current?.classList.add('inactive')
      }
    }
  }

  const principalClass = 'sliders_container', points: any[] = []
  for(let i=0; i<6; i++){
    if(i==0){
      points.push(<div key={'point-'+i+1} onClick={selectImg} className={principalClass+`-points-point active`} data-id={i+1}><div /></div>)
    }else{
      points.push(<div key={'point-'+i+1} onClick={selectImg} className={principalClass+`-points-point`} data-id={i+1}><div /></div>)
    }
  }

  const modifyStatus = () => {
    const iconStatus = refIconStatus.current
    if(iconStatus?.classList.contains('fa-caret-right')){
      iconStatus.classList.remove('fa-caret-right')
      iconStatus.classList.add('fa-pause')
    }else{
      iconStatus?.classList.add('fa-caret-right')
      iconStatus?.classList.remove('fa-pause')
    }
  }

  const previusImg = () => {
    const newValue = imagen-1
    if(newValue < 0) return

    setImagen(newValue)
    if(newValue == 0){
      refArrowLeft.current?.classList.add('inactive')
    }else if(newValue == 4) {
      refArrowRigth.current?.classList.remove('inactive')
    }
    refFirstSlider.current?.setAttribute("style", `transform: translateX(${-(porcentImg*newValue)}%)`)
    document.querySelectorAll('.'+principalClass+'-points-point').forEach((d, i)=> {
      if(i == newValue) d.classList.add('active')
      else d.classList.remove('active')
    })
  }

  const nextImg = () => {
    const newValue = imagen+1
    if(newValue>5) return
    setImagen(newValue)
    if(newValue == 5){
      refArrowRigth.current?.classList.add('inactive')
    }else if(newValue == 1){
      refArrowLeft.current?.classList.remove('inactive')
    }
    refFirstSlider.current?.setAttribute("style", `transform: translateX(${-(porcentImg*newValue)}%)`)
    document.querySelectorAll('.'+principalClass+'-points-point').forEach((d, i)=> {
      if(i == newValue) d.classList.add('active')
      else d.classList.remove('active')
    })
  }

  const previusCategories = () => {
    const newValue = categories-1
    if(newValue < 0) return
    setCategories(newValue)
    console.log(newValue)
    refLastSlider.current?.setAttribute("style", `transform: translateX(${-(33.33*newValue)}%)`)
  }

  const nextCategories = () => {
    const newValue = categories+1
    if(newValue>2) return
    setCategories(newValue)
    console.log(newValue)
    refLastSlider.current?.setAttribute("style", `transform: translateX(${-(33.33*newValue)}%)`)
  }

  return (
    <section className={principalClass}>
      <div className={principalClass+"-primari"}>
        <i ref={refIconStatus} onClick={modifyStatus} className={`${principalClass}-primari-icon ${principalClass}-primari-continue ${principalClass}-primari-status fa-solid fa-caret-right`}></i>
        <i ref={refArrowLeft} onClick={previusImg} className={`${principalClass}-primari-icon ${principalClass}-primari-left inactive fa-solid fa-angle-left`}></i>
        <i ref={refArrowRigth} onClick={nextImg} className={`${principalClass}-primari-icon ${principalClass}-primari-rigth fa-solid fa-angle-right`}></i>

        <ul ref={refFirstSlider} className={principalClass+"-primari-slider"}>
          <li className={principalClass+"-primari-slider-link"}>
            <img src="https://cdn7.kiwilimon.com/galeriahome/1466/1280x400/1466.jpg.webp" alt="img" />
          </li>
          <li className={principalClass+"-primari-slider-link"}>
            <img src="https://cdn7.kiwilimon.com/galeriahome/1465/1280x400/1465.png.webp" alt="img" />
          </li>
          <li className={principalClass+"-primari-slider-link"}>
            <img src="https://cdn7.kiwilimon.com/galeriahome/1470/1280x400/1470.jpg.webp" alt="img" />
          </li>
          <li className={principalClass+"-primari-slider-link"}>
            <img src="https://cdn7.kiwilimon.com/galeriahome/1467/1280x400/1467.jpg.webp" alt="img" />
          </li>
          <li className={principalClass+"-primari-slider-link"}>
            <img src="https://cdn7.kiwilimon.com/galeriahome/1468/1280x400/1468.jpg.webp" alt="img" />
          </li>
          <li className={principalClass+"-primari-slider-link"}>
            <img src="https://cdn7.kiwilimon.com/galeriahome/1469/1280x400/1469.jpg.webp" alt="img" />
          </li>
        </ul>
      </div>

      <div className={principalClass+"-points"}>
        {points}
      </div>

      <div className={principalClass+"-secondary"}>
        <h3 className={principalClass+'-secondary-title'}>
          ¿What do you want to cook?
        </h3>
        <div className={principalClass+'-secondary-slider'}>
          <i onClick={previusCategories} className={`${principalClass}-secondary-slider-icon ${principalClass}-secondary-slider-left inactive fa-solid fa-angle-left`}></i>
          <i onClick={nextCategories} className={`${principalClass}-secondary-slider-icon ${principalClass}-secondary-slider-rigth fa-solid fa-angle-right`}></i>

          <ul ref={refLastSlider} className={principalClass+'-secondary-slider-categories'}>
            {recipesCategoris?.map(category=> <RecipesCategory key={category.name} category={category} />)}
          </ul>
        </div>
      </div>
    </section>
  )
}