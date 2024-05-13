import React from "react";
import style from "./Design.module.css"

function Design(){

    return (
        <>
       <div className={style['container']}>
       <div className={style['left']}>
            <img className={style['imgage']} src='https://pinkivory.com/wp-content/uploads/2020/05/image2-home1-4.png'/>
        </div>
        <div className={style['right']}>
            <p className={style['para']}>
            [ PINK IVORY DESIGN STUDIOS ]
            </p>
           <h2 className={style['heading-line']}>
           From Sketch to Life
           </h2>
           <p className={style['para']}>
           ................
           </p>
           <p className={style['para']}>
           The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles and architecture. Even if you don’t have a ready sketch of what you want – we will help you to get the result you dreamed of!
           </p>
           <button className={style['btn']}>
            View Projects
           </button>
        </div>
       </div>
        </>
    )
}
export default Design