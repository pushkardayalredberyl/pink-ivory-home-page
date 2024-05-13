import React from "react";
import style from './Percentage.module.css'


function Percentage(){
    return(
       <div className={style['box']}>
        <div className={style['left']}></div>
        <div className={style['right']}>
            <img className={style['image']} src = "https://pinkivory.com/wp-content/uploads/2020/05/image3-home1-4.png"/>
        </div>
       </div>
    )
}


export default Percentage