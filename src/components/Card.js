function Card() {
    return (
        <div className="content__card">
            <img src="img/sneakers/1.jpg" alt="card__image" width={133} height={112} className="card__image" />
            <p className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info">
            <div className="card__price">
            <span className="price">Цена </span>
            <b>12 999 руб.</b>
            
            </div>
            <button className="card__button">
            <img src="img/card-button.svg" alt="card-button" width={18} height={18}/>
            </button>
            </div>
            
        
      </div>
    )
}

export default Card;