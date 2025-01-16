import React from "react";
import { AppContext } from "../../App";
import { useNavigate  } from "react-router-dom";



function Info ({src, title, desc, sizeImg = false, isNewPage = false}) {

    const navigate = useNavigate();

    const {setIsCartOpenned} = React.useContext(AppContext)

    return (
        <div className="cart__empty">
             <img src={src} alt="cartEmpty" width={sizeImg || 150} height={sizeImg || 120}/>
             <h3>{title}</h3>
             <p>{desc}</p>            
             <button className="cart__closeBtn" onClick={isNewPage ? () => navigate("/") : () => setIsCartOpenned()}>Вернуться назад
               <img src="./img/arrow-right.svg" alt="arrow-right" width={14} height={12}/>
             </button>
           </div>
    )
}

export default Info;