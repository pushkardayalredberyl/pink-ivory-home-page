import React from "react";
import style from "./Projects.module.css"

function Projects(){
    return (
        <div className={style['container']}>
            <div className={style['left']}>
                <img className={style['image']} src = "https://pinkivory.com/wp-content/uploads/2020/05/cate1-4.jpg"/>
                <p className={style['tag']}>Villa</p>
                <p className={style['number']}> 01</p>

            </div>

            <div className={style['middle']}>
            <img className={style['image']} src = "https://pinkivory.com/wp-content/uploads/2020/05/cate2-4.jpg"/>
            <p className={style['tag']}>Apartments</p>
            <p className={style['number']}> 02</p>
            </div>
            <div className={style['right']}>
            <img className={style['image']} src = "https://pinkivory.com/wp-content/uploads/2020/05/cate3-3.jpg"/>
            <p className={style['tag']}>Amenities</p>
            <p className={style['number']}> 03</p>
            </div>
        </div>
    )
}

export default Projects;