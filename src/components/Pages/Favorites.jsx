import Card from "../Card";
import React from "react";
import Info from "./Info";

function Favorites ({
    items,
    cartItems,
    title,
    isLoading,
    favorites
}) {

  const findValue = (arr, id) => {
    return arr.some(el => el.id == id)
  }

    const renderCards = () => {
    
        
          return  items.length > 0 ? items.map((card, index) => {
            return (<Card
                key={index}
                {...card}
                cartItems={cartItems}
                isLoading={false}
                added={!isLoading && findValue(cartItems, card.id)}
                favorited={!isLoading && findValue(favorites, card.id)}
              />)
          }) : <Info 
          sizeImg={70}
          src={"img/no-orders.jpg"}
          title={"У вас нет закладок"}
          desc={"Добавьте что-нибудь в закладки."}
          isNewPage={true}
  />
        
    }

    return (

      <div className="content">
        <div className="content__header">
          <h1 className="content__tilte">
            {items.length > 0 && title}
          </h1>          
        </div>
       
        <div className="content__cards">{!isLoading && renderCards()}</div>
        
      </div>

      
       
    )
}

export default Favorites;