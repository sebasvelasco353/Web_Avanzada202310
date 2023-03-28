import { products } from '../assets/Products';
import ProductList from '../productList/ProductList';
import './Home.css'

function Home (){

    const openShopping =()=>{
      
    }

    return(
        <div className='container_home'>
          <div className='cotainer_home__bar'>
            <button className='container_home__bar__shopping_button' onClick={openShopping}></button>
          </div>
            <ProductList products={products}></ProductList>
        </div>
    );
} 

export default Home