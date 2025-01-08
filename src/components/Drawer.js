function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
           <div className="drawer">
            <div className="cart__top">
              <h2>Корзина</h2>
              <button className="removeBtn">
                  <img src="img/btn-close.svg" alt="btn-close" width={32} height={32}/>
              </button>
            </div>
            
            <div className="cart__items">
              <div className="cartItem">
                <img src="../img/sneakers/1.jpg" alt="sneaker.jpg" width={70} height={70}/>
                <div className="cartItem__desk">
                  <h3 className="title">Мужские Кроссовки Nike Air Max 270</h3>
                  <span className="cartItem__price">12 999 руб.</span>
                </div>
                <button className="removeBtn">
                  <img src="img/btn-close.svg" alt="btn-close" width={32} height={32}/>
                </button>
              </div>

              <div className="cartItem">
                <img src="../img/sneakers/1.jpg" alt="sneaker.jpg" width={70} height={70}/>
                <div className="cartItem__desk">
                  <h3 className="title">Мужские Кроссовки Nike Air Max 270</h3>
                  <span className="cartItem__price">12 999 руб.</span>
                </div>
                <button className="removeBtn">
                  <img src="img/btn-close.svg" alt="btn-close" width={32} height={32}/>
                </button>
              </div>

              <div className="cartItem">
                <img src="../img/sneakers/1.jpg" alt="sneaker.jpg" width={70} height={70}/>
                <div className="cartItem__desk">
                  <h3 className="title">Мужские Кроссовки Nike Air Max 270</h3>
                  <span className="cartItem__price">12 999 руб.</span>
                </div>
                <button className="removeBtn">
                  <img src="img/btn-close.svg" alt="btn-close" width={32} height={32}/>
                </button>
              </div>
              
              
              
            </div>
            <ul className="cartTotal">
                <li>
                  <span>Итого</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог: 5%</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="cart__totalBtn">
                <span>Оформить заказ</span>
                <img src="../img/arrow-right.svg" alt="arrow-right" className="arrow-right" width={13} height={12}/>
              </button>
            
          </div>
      </div>
       
    )
}

export default Drawer