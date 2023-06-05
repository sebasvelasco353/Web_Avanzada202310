import './ProductList.css'
import Product from '../product/Product';
import { products } from '../assets/Products';
import { v4 } from 'uuid';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState } from 'react';

function ProductList(){

  const [productList, setProductList] = useState([]);
  const productsCollection = collection(db, 'product');
  
  const getProducts=async()=>{
    try {
      const data = await getDocs(productsCollection);
      const formatedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setProductList(formatedData);
    }catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getProducts()
  }, [productsCollection])

  return (
    <div className="product-list">
        
        {productList.length !== 0 && <div className='container'>
          <div className='container_tittle1'> 
            <h1 className='label_product'>Mis productos a la venta:</h1>
          </div>
          {productList.map(product => (
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              active={true}
            />
          ))}
        </div>}

        <div className='container_tittle2'> 
          <h1 className='label_product'>Productos a la venta:</h1>
        </div>
        
        {products.map((product) => (
            <Product
                id={v4()}
                name={product.name} 
                price={product.price} 
                description={product.description}
                active = {false}
            />
        ))}
    </div>
  );
};

export default ProductList;