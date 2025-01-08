
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  return (
   <div className="container">
      <Drawer/>
    <main>
      <Header/>
      <div className="content">
        <div className="content__header">
          <h1 className="content__tilte">Все кроссовки</h1>
          <div className="content__search">
            <img src="../img/search.svg" width={15} height={15} alt="search"/>
            <input type="text" className="content__input" 
            placeholder="Поиск..."/>
          </div>
          
        </div>
       
        <div className="content__cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        
        </div>
        
      </div>
    </main>
   </div>
  );
}

export default App;
