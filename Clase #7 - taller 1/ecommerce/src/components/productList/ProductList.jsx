import './ProductList.css'
import Product from '../product/Product';
import { products } from '../assets/Products';
import { v4 } from 'uuid';
import { collection, doc, getDocs } from '@firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';

function ProductList(){

  const [productList, setProductList] = useState([]);
  const productsCollection = collection(db, 'product');
  
  const getProducts= async()=>{
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

  const handleDelete=async()=>{
    const productDoc = doc(db, 'product', )
  }

  useEffect(()=>{
    getProducts();
  })

  return (
    <div className="product-list">
        
        {productList.length != 0 && <div className='container'>
          <div className='container_tittle1'> 
            <h1 className='label_product'>Mis productos a la venta:</h1>
          </div>
          {productList.map(product => (
            <Product
              id={v4()}
              name={product.name}
              price={product.price}
              description={product.description}
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
            />
        ))}
    </div>
  );
};

export default ProductList;