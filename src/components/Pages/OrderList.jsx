import React from "react"
import axios from "axios"
import Card from "../Card"
import Info from "./Info"

function OrderList ({title}) {

    const [isOrderList, setOrderList] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)



    React.useEffect(() => {
      try {
        async function fetchData() {
          const orderList = await axios.get('https://67816a5585151f714b0aafcd.mockapi.io/orders')
          
          setIsLoading(false)
          setOrderList(orderList.data)

        }

        fetchData()
      }
      catch (error) {
        console.log('Ошибка в запросе к заказам')

      }
    }, [])

    const renderOrders = () => {
        return (isOrderList.length > 0 ? isOrderList.map((order) => (
            <div className="content__orderList"
                key={order.index}>
                <h2>Заказ № {order.index}</h2>
                <div className="content__orderCards">
                    {(isLoading ? [...Array(4)] : order.items)
                    .map((card, index) => (
                        <Card
                         key={index}
                         {...card}
                         isLoading={isLoading}
                         isOrderItem={true}
                         />
                    ))}
                </div>
            </div>
        )) : <Info 
                sizeImg={70}
                src={"img/no-orders.jpg"}
                title={"У вас нет заказов"}
                desc={"Оформите хотя бы один заказ."}
                isNewPage={true}
        />)
    }
    
    return (

        <div className="content">
        <div className="content__header">
          <h1 className="content__tilte">
            {isOrderList.length > 0 && title}
          </h1>          
        </div>
       
        <div className="content__cards content__orders">{!isLoading && renderOrders() }</div>
      </div>

    );
        
    }

export default OrderList;