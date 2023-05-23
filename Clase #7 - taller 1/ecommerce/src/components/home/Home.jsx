import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { products } from '../assets/Products';
import Login from '../login/Login';
import ProductList from '../productList/ProductList';
import Shopping from '../shopping/Shopping'
import './Home.css'
import Sign from '../sign/Sign';
import { getAuth} from 'firebase/auth';

function Home (){
    const [showLogin, setShowLogin] = useState(true);
    const [showSign, setShowSign] = useState(false);
    const [component, setActiveComponent] = useState('Login');

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

    const handleSign=()=>{
      setActiveComponent('Sign')
    }
    const handleLogin =()=>{
      if(isLogin){
        dispatch({type: 'Logout'})
        alert("Has salido de la sesión.")
      } else {
        setActiveComponent('Login')
      }
    }

    return(
        <div className='container_home'>
          <div className='container_home__bar'>
            {isLogin && <button className='container_home__bar__shopping_button' onClick={openShopping}></button>}
            {!isLogin && <button className='container_home__bar__sing_button' onClick={handleSign}>Sign</button>}
            <button className='container_home__bar__login_button' onClick={handleLogin}>{!isLogin?"Login":"Logout"}</button> 
          </div>
          {component === 'Sign' && <Sign/>}
          {component === 'Login' && !isLogin && <Login/>}
          {displayShopping()}
          {displayProductList()}
        </div>
    );
} 

export default Home