import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../login/Login';
import ProductList from '../productList/ProductList';
import Shopping from '../shopping/Shopping'
import './Home.css'
import Sign from '../sign/Sign';
import AddProduct from '../sales/AddProduct';
import { useEffect } from 'react';
import {auth} from "../../config/firebase"
import { CircularProgress } from '@mui/material';

function Home (){
    const [component, setActiveComponent] = useState('Login');
    const [showSales, setShowSales] = useState(false);
    const [loading, setLoading] = useState(true);
    const isLogin = useSelector(state => state.login);
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
        return <ProductList></ProductList>
      }
    }

    const handleSign=()=>{
      setActiveComponent('Sign')
    }
    const handleLogin =()=>{
      if(isLogin){
        auth.signOut()
        .then(() => {
          dispatch({type: 'Logout'})
        })
        .catch((error) => {

        });
      } else {
        setActiveComponent('Login')
      }
    }

    const openSale = () =>{
      if(showSales){
        setShowSales(false)
        setActiveComponent('')
      } else {
        setShowSales(true)
        setActiveComponent('AddProduct')
      }
    }

    useEffect(()=>{
      
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch({type: 'Login'})
        } else {

        }
      });

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    return(
      <div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </div>
        ) : (
          <div className='container_home'>
            <div className='container_home__bar'>
              {isLogin && <button className='container_home__bar__shopping_button' onClick={openShopping}></button>}
              {!isLogin && <button className='container_home__bar__sing_button' onClick={handleSign}>Sign</button>}
              {isLogin && <button className='container_home__bar__sale_nutton' onClick={openSale}>Sale</button>}
              <button className='container_home__bar__login_button' onClick={handleLogin}>{!isLogin?"Login":"Logout"}</button> 
            </div>
            {component === 'Sign' && <Sign/>}
            {component === 'Login' && !isLogin && <Login/>}
            {component === 'AddProduct' && <AddProduct isVisible={showSales} changeVisible={setShowSales}/>}
            {displayShopping()}
            {displayProductList()}
          </div>
        )}
      </div>
    );
} 

export default Home