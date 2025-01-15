import axios from "axios";
import { AppContext } from "../../App";
import Info from "../Pages/Info"
import React from "react";
import style from "./Drawer.module.scss"

function Drawer({onClose, cartItems, removeItem, totalPrice, opened}) {

  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)


  const {setCartItems} = React.useContext(AppContext)

  const onCloseOverlay = (e) => {
    e.target.classList[0] === style.overlay && onClose()
  }
  
  React.useEffect(() => {
    opened ? document.body.classList.add('overflow-hidden') :
    document.body.classList.remove('overflow-hidden')
  }, [opened])
  
  const onComplete = () => {
    setIsLoading(true)
    onCompleteToServer()
    setIsOrderComplete(true)
    setCartItems([])
  }

  const onCompleteToServer = async () => {
    try {
      const {data} = await axios.post('https://67816a5585151f714b0aafcd.mockapi.io/orders', {
        items: cartItems
      })
      setOrderId(data.index)
    } 
    catch (error) {
      alert("Ошибка при совершении заказа")
      console.error(error)
    }
    
  }
    return (
        <div className={`${style.overlay} ${opened ? style.opened : ''}`} onClick={onCloseOverlay}>
           <div className={style.drawer}>
            <div className="cart__top">
              <h2>Корзина</h2>
              <button className="removeBtn">
                  <img src="img/btn-close.svg" alt="btn-close"  onClick={onClose} width={32} height={32}/>
              </button>
            </div>

            {cartItems.length > 0 ? 
            
            <div className="cart__wrapper">
              <div className="cart__items">
              {
                cartItems.map(item => {
                  return <div className="cartItem" key={item.id}>
                    <img src={item.src} alt="sneaker" width={70} height={70}/>
                      <div className="cartItem__desk">
                        <h3 className="title">{item.name}</h3>
                        <span className="cartItem__price">{item.price}</span>
                      </div>
                      <button className="removeBtn" onClick={() => removeItem(item)}>
                        <img src="img/btn-close.svg" alt="btn-close" width={32} height={32}/>
                      </button>
                  </div>
                })
              }
               </div>

              <div className="cart__total">
                <ul className="cartTotal">
                  <li>
                    <span>Итого</span>
                    <div></div>
                    <b>{`${totalPrice} руб.`}</b>
                  </li>
                  <li>
                    <span>Налог: 5%</span>
                    <div></div>
                    <b>{`${Math.round(totalPrice * 0.05)} руб`}.</b>
                  </li>
                </ul>
                <button disabled={isLoading} className="cart__totalBtn" onClick={() => onComplete()}>
                  <span>Оформить заказ</span>
                  <img src="img/arrow-right.svg" alt="arrow-right" className="arrow-right" width={13} height={12}/>
                </button>
              </div>
              </div>  
             : 
             isOrderComplete ? 

              <Info 
              src={'img/order-complete.jpg'}
              title={'Заказ оформлен!'}
              desc={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
            /> 
              : 
              <Info 
                src={'img/cart-empty.jpg'}
                title={'Корзина пустая'}
                desc={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
              />
           
            }

          </div>
      </div>
       
    )
}

export default Drawer;