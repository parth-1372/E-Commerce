import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

useParams
function ProductDetail({ cart, setCart }) {
  const { id } = useParams()
  const [product, setproduct] = useState({})
  const [relatedProducts, setrelatedProducts] = useState([])
  useEffect(() => {
    const filterProduct = items.find((product) => product.id == id)
    // console.log(filterProduct)
    const relatedProducts = items.filter((p) => p.category === product.category)
    // console.log("Related Products==",relatedProducts)
    setproduct(filterProduct)
    setrelatedProducts(relatedProducts)
  }, [id, product.category])

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
        id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    // console.log("Cart Element = ",cart)
    toast.success('Product Added to Cart Succesfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

  return (
    <>
     <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className='tect-centre '>
          <h1 className='card-title'>{product.title}</h1>
          <p className='card-text'>{product.description}</p>
          <div className="con-btn">
            <button className='btn btn-primary mx-3'>₹{product.price}</button>
            <button
            onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
            className='btn btn-warning'>Add TO Cart</button>
          </div>
        </div>
      </div>
      <div className='relatedProductHeading'>

        <h2>Related Products</h2>
        <Product cart={cart} setCart={setCart} items={relatedProducts} />
      </div>
    </>
  )
}

export default ProductDetail