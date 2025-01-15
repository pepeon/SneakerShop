import style from './Card.module.scss'
import React from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App';

function Card({id, name, price, src, favorited = false, added = false, isLoading = true, isOrderItem = false}) {
    const [isAdded, setIsAdded] = React.useState(added)
    const [isFavorite, setIsFavorite] = React.useState(favorited)
    const {addCartItems, addToFavorites} = React.useContext(AppContext)
    
    React.useEffect(() => {
        setIsAdded(added)
        setIsFavorite(favorited)
    }, [added, favorited])
    
    
    const onClickPlus = () => {
        setIsAdded(!isAdded)
        addCartItems({id, name, price, src})
    }
    const onChangeFavorite = () => {
        setIsFavorite(!isFavorite)
        addToFavorites({id, name, price, src})
    }

    return (isLoading ? 
    <ContentLoader
        speed={2}
        width={220}
        height={250}
        viewBox="0 0 155 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
        <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
      </ContentLoader> :
        
        <div className={style.content__card} >
        <img src={isFavorite ? "./img/heart-like.svg" : "./img/heart-unlike.svg"} alt="fav" onClick={onChangeFavorite} className={style.card__favorite} width={32} height={32} />
        <img src={src} alt="card__image" width={133} height={112} className="card__image" />
        <p className="card__name">{name}</p>
        <div className={style.card__info}>
        <div className="card__price">
        <span className="price">Цена </span>
        <b>{price} руб.</b>
        
        </div>
        {!isOrderItem && <button className="card__button">
        <img src={isAdded ? "img/btn-checked.svg" : "img/btn-unchecked.svg"} alt="card-button" onClick={onClickPlus} width={32} height={32}/>
        </button>}
        </div>
     </div>

        
    )
}

export default Card;