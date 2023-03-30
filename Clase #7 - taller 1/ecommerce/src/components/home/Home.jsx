import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { products } from '../assets/Products';
import Login from '../login/Login';
import ProductList from '../productList/ProductList';
import Shopping from '../shopping/Shopping'
import './Home.css'

function Home (){
    const [showLogin, setShowLogin] = useState(false);
    const [txtLoginButton, setTxtButton] = useState("Login");

    const isLogin = useSelector(state => state.login)
    const showShopping = useSelector(state => state.showShopping);
    const dispatch = useDispatch();

    const openShopping =()=>{
      if(showShopping){
        dispatch({type: 'HideShopping'})
      } else {
        dispatch({type: 'ShowShopping'})
      }
    }

    const displayShopping =()=>{
      if(showShopping){
        return <Shopping/>
      }
    }

    const displayProductList=()=>{
      if(isLogin){
        return <ProductList products={products}></ProductList>
      }
    }
    
    const displayLogin=()=>{
      if(showLogin && !isLogin){
        return <Login/>
      }
    }

    const handleLogin =()=>{
      if(showLogin){
        setShowLogin(false);
        dispatch({type: 'Logout'})
      } else {
        setShowLogin(true);
      }
    }

    return(
        <div className='container_home'>
          <div className='container_home__bar'>
            <button className='container_home__bar__shopping_button' onClick={openShopping}></button>
            <button className='container_home__bar__login_button' onClick={handleLogin}>{!isLogin?"Login":"Logout"}</button> 
          </div>
          {displayLogin()}
          {displayShopping()}
          {displayProductList()}
        </div>
    );
} 

export default Home