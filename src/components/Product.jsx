import React from 'react'
// import { items } from './Data'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ items, cart, setCart }) {

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
            <div className="container my-5">
                <div className="row">
                    {
                        items.map((product) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 my-3 text-centre">
                                        <div className='card' style={{ width: '18rem' }}>
                                            <Link
                                                key={product.id}
                                                to={`/product/ ${product.id}`}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                <img src={product.imgSrc} className='card-img-top' alt="..."></img>
                                            </Link>
                                            <div className='card-body'>
                                                <h5 className='card-title'>{product.title}</h5>
                                                <p className='card-text'>{product.description}</p>
                                                <button className='btn btn-primary mx-3'>₹{product.price}</button>
                                                <button
                                                    onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                                    className='btn btn-warning'>Add TO Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }
                </div></div>
        </>
    )
}

export default Product