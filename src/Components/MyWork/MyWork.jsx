import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>Certificates</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return (
            <div key={index} className='work-item'>
            <img key={index} src={work.w_img} alt="" />
            <h3>{work.w_name}</h3>
            </div>
            );
        })}
      </div>
      <div className="showmorebutton">
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
    </div>
  )
}

export default MyWork
