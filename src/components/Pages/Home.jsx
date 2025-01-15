import React from "react";
import Card from "../Card";

function Home ({
    isLoading,
    items,
    cartItems,
    title,
    favorites
}) 
{ 
  const [searchValue, setSearchValue] = React.useState('')

  const findValue = (arr, id) => {
    return arr.some(el => el.id == id)
  }

  const inputValue = (event) => {
      setSearchValue(event.target.value)
    }
  
  const renderCards = () => {
    const filtredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (isLoading ? [...Array(10)] : filtredItems)
      .map((card,  index) => (
          <Card 
            key={index}
            {...card}
            cartItems={cartItems}
            added={!isLoading && findValue(cartItems, card.id)}
            isLoading={isLoading}
            favorited={!isLoading && findValue(favorites, card.id)}
          />   
      ))
  }

    return (

<div className="content">
<img  className="content__banner" src="img/banner.jpg" alt="banner"/>
        <div className="content__header">
          <h1 className="content__tilte">{ searchValue ? `Поиск по запросу: ${searchValue}`: `${title}`}</h1>
          <div className="content__search">
            <img className="content__searchLogo" src="img/search.svg" width={15} height={15} alt="search"/>
            <input onChange={inputValue} type="text" value={searchValue} className="content__input" 
            placeholder="Поиск..."/>
            <button className="content__btnClose">
                  <img src="img/btn-close.svg" alt="btn-close"  onClick={() => setSearchValue('')} width={26} height={26}/>
              </button>
          </div>
          
        </div>
       
        <div className="content__cards">{renderCards()}</div>
        
      </div>
    )
    
}

export default Home;