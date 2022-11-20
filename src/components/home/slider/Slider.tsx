import "./slider.scss"

export const Slider = () => {
  const principalClass = 'sliders_container'
  const asdsd = Array(6)
  console.log(asdsd)
  
  return (
    <section className={principalClass}>
      <div className={principalClass+"-primari"}>
        <i className={`${principalClass}-primari-icon ${principalClass}-primari-continue fa-solid fa-caret-right`}></i>
        <i className={`${principalClass}-primari-icon ${principalClass}-primari-pause fa-solid fa-pause`}></i>
        <i className={`${principalClass}-primari-icon ${principalClass}-primari-icon fa-solid fa-angle-left`}></i>
        <i className={`${principalClass}-primari-icon ${principalClass}-primari-icon fa-solid fa-angle-right`}></i>
        <div className={principalClass+"-selectors"}>
          {Array(6).map((m, i)=> <div key={'point-'+i} className={principalClass+`-selectors-point`} >jaja</div>)}
        </div>

      </div>
      <div className={principalClass+"-secondari"}>
        
      </div>
    </section>
  )
}