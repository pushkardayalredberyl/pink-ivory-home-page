import React from "react";
import style from './Box.module.css'

function Box(){
    return (
        <div className={style['box-container']}>
            <div className={style['container']}>
                <div className={style['image-container']}>
                    
                </div>
                <div className={style['details']}>
                Here is how Pink Ivory, the Top Interior designer in Bangalore, is redefining your interior aesthetics
                </div>
            </div>
            <div className={style['container']}>
                <div className={style['image-container']}>
                    
                </div>
                <div className={style['details']}>
                Here is how Pink Ivory, the Top Interior designer in Bangalore, is redefining your interior aesthetics
                </div>
            </div>
            <div className={style['container']}>
                <div className={style['image-container']}>
                    
                </div>
                <div className={style['details']}>
                Here is how Pink Ivory, the Top Interior designer in Bangalore, is redefining your interior aesthetics
                </div>
            </div>
        </div>
    )
}

export default Box