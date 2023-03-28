import { useSelector, useDispatch } from 'react-redux';
import { products } from '../assets/Products';
import ProductList from '../productList/ProductList';
import Shopping from '../shopping/Shopping'
import './Home.css'

function Home (){

    const showShopping = useSelector(state => state.showShopping);
    const dispatch = useDispatch();

    const openShopping =()=>{
      if(showShopping){
        dispatch({type: 'HideShooping'})
      } else {
        dispatch({type: 'ShowShooping'})
      }
    }

    const displayShopping =()=>{
      if(showShopping){
        return <Shopping/>
      }
    }

    return(
        <div className='container_home'>
          <div className='cotainer_home__bar'>
            <button className='container_home__bar__shopping_button' onClick={openShopping}></button>
          </div>
          {displayShopping()}
          <ProductList products={products}></ProductList>
        </div>
    );
} 

export default Home