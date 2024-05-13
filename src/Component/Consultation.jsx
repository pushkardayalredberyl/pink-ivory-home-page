import React from "react";
import style from "./Consultation.module.css"

function Consultation(){
    return(
        <>
        <div className={style['box']}>
            <div className={style['left']}>
                <h3 className={style['heading']}>
                Get Incredible Interior Design Right Now!
                </h3>
                <p className={style['para']}>
                At every stage, we would supervise your project,collaborating with the partners and vendors and controlling all the details
                </p>
            </div>
            <div className={style['right']}>
                <button className={style['btn']}>View All</button>
            </div>
        </div>
        </>
    )
}

export default Consultation