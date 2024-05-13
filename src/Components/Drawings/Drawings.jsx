import React from 'react'
import './Drawings.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import drawing_data from '../../assets/drawing_data'



const Drawings = () => {
  return (
    <div id='drawings' className='drawings'>
      <div className="drawings-title">
        <h1>Art and Crafts</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="drawings-container">
        {drawing_data.map((drawing,index)=>{
            return (
            <div key={index} className='drawings-item'>
              <hr className="hr-colorr" />
              <div class = "vertical"></div>
            <img key={index} src={drawing.w_img} alt="" />
           
            <hr className="hr-color" />
            </div>
            
            );
        })}
        
      </div>
     
    </div>
  )
}
export default Drawings
