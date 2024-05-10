import React from "react";
import style from './Tagline.module.css'
function Tagline() {

    return (
        <>
        <div className={style['tagline']}>
            <div className={style['left']}>
                <h2>“Even if you don’t have a ready sketch of what you want – we will help you get the result you dreamed of.”</h2>
            </div>
            <div className="middle">
                <img className="profile-img" src="https://pinkivory.com/wp-content/uploads/2023/05/828f7130-5690-4288-b072-038fd4192f2f-e1684600606849-150x150.jpg"/>
            </div>
            <div className={style['right']}>
                <h3 className={style['font-tag']}>Suhasini Maheshwari</h3>
                <p className={style['font-tag']}>FOUNDER</p>
                <p className={style['font-tag']}>PINK IVORY DESIGN STUDIOS</p>
            </div>
        </div>
        </>
    )
}

export default Tagline;