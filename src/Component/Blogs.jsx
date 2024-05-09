import React from "react";
import style from './Blogs.module.css';

function Blogs(){
    return (
        <div className={style['blogs']}>
            <div className={style['left']}>
                <p>[Our Blogs]</p>
                <h3>Read Our Latest news</h3>
                <p>.........</p>
            </div>
            <div className={style['right']}>
                <button className={style['btn']}>View All</button>
            </div>
        </div>
    )
}


export default Blogs