import axios from 'axios'
import Drawer from './components/Drawer'
import Header from './components/Header'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Favorites from './components/Pages/Favorites'
import OrderList from './components/Pages/OrderList'

export const AppContext = React.createContext({})

function App() {

  const [isCartOpenned, setIsCartOpenned] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [items, setItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [totalPrice, setTotalPrice] = React.useState(0)



  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, cartItemsResponse, favoritesResponse] = await Promise.all([
          axios.get('https://677ffa730476123f76a90558.mockapi.io/items'),
          axios.get('https://677ffa730476123f76a90558.mockapi.io/cart'),
          axios.get('https://67816a5585151f714b0aafcd.mockapi.io/favorites')])
  
        
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
        setCartItems(cartItemsResponse.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
      
      
    }

    fetchData()


    
  }, [])

  React.useEffect(() => {
    setTotalPrice(cartItems.reduce((sum, item) => 
      sum + item.price, 0))
  }, [cartItems])



  const addCartItems = async (item) => {
    try {
      if (cartItems.find(cartObj => cartObj.id === item.id)) {
        const {data} = await axios.get('https://677ffa730476123f76a90558.mockapi.io/cart')
        const id = data.find(cartItem => cartItem.id === item.id).index
        axios.delete(`https://677ffa730476123f76a90558.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(cartObj => cartObj.id !== item.id))

      } else {
        const {data} = await axios.post('https://677ffa730476123f76a90558.mockapi.io/cart', item)
        setCartItems(prev => [...prev, data])

      }
    } catch (error) {
      alert('Ошибка с корзиной');
    }
  
  }

  const addToFavorites = async (item) => {
    try {
      if (favorites.find(favObj => favObj.id === item.id)) {
        const {data} = await axios.get('https://67816a5585151f714b0aafcd.mockapi.io/favorites')
        const id = data.find(favItem => favItem.id === item.id).index
        axios.delete(`https://67816a5585151f714b0aafcd.mockapi.io/favorites/${id}`)
        setFavorites(prev => prev.filter(favObj => favObj.id !== item.id))
      } else {
        const {data} = await axios.post('https://67816a5585151f714b0aafcd.mockapi.io/favorites', item)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  
  }

  return (
<AppContext.Provider value={{items, 
  cartItems, 
  favorites, 
  addToFavorites, 
  addCartItems, 
  setIsCartOpenned,
  setCartItems}}>
   <div className="container">

      {<Drawer 
      onClose={() => setIsCartOpenned(false)} 
      cartItems={cartItems} 
      removeItem={(item) => addCartItems(item)}
      totalPrice={totalPrice}
      opened={isCartOpenned}
      />}

    <main>




      <Header onClickCart={() => setIsCartOpenned(true)}
              totalPrice={totalPrice}/>
  <Routes>

  <Route path="" exact element={
    <Home
     title={"Все кроссовки"}
     items={items}
     isLoading={isLoading}
     cartItems={cartItems}
     favorites={favorites}
     />}/>
  
  <Route path="favorites" exact element={
    <Favorites 
      title={"Закладки"}
      items={favorites}
      cartItems={cartItems}
      favorites={favorites}
      isLoading={isLoading}
      />
  }/>

<Route path="orderlist" exact element={
    <OrderList
      title={"Заказы"}
    />}/>
</Routes>
      

    </main>
   </div>
   </AppContext.Provider>
  );
}

export default App;