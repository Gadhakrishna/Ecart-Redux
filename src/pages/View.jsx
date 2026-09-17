import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function View() {
  const {id} = useParams()
  const {allProducts} = useSelector(state=>state.productReducer)
  const [product,setProduct] = useState({})
  console.log(product);
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)

  useEffect(()=>{
    setProduct(allProducts?.find(item=>item?.id==id))
  },{})

  const handleWishList=()=>{
    console.log("Inside handle wishlist");
    const existingProduct = userWishlist?.find(item=>item.id==product?.id)
    if (existingProduct) {
      Swal.fire({
      title: "Sorry!!!",
      text: "Product Already in Wishlist!!!",
      icon: "error",
      confirmButtonText:"OK"
    });
    }
    else{
      dispatch(addToWishlist(product))
      Swal.fire({
      title: "Success",
      text: "Product Added to Wishlist!!!",
      icon: "success",
      confirmButtonText:"OK"
    });
    }
  }

  const handleCart=()=>{
    const existingProduct = userCart?.find(item=>item.id==product?.id)
    dispatch(addToCart(product))
    Swal.fire({
      title: "Success",
      text: existingProduct? `Product ${existingProduct.title} Quantity Incremented` : "Product Added to Cart",
      icon: "success",
      confirmButtonText:"OK"
    });
  }

  return (
    <>
      <Header/>
      <div className='container my-5'  style={{ paddingTop: '80px' }}>
        <div className='row align-items-start g-5'>
          <div className='col-12 col-lg-6 text-center'>
            <img className='img-fluid' style={{maxHeight: '350px', objectFit: 'contain'}} variant="top" src={product?.thumbnail} alt={product?.title} />
            <div className='d-flex flex-column flex-sm-row justify-content-center gap-4 mt-5'>
              <button onClick={handleWishList} className='btn btn-info rounded'>ADD TO WISHLIST</button>
              <button onClick={handleCart} className='btn btn-success rounded'>ADD TO CART</button>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <h1 className='fw-bold'>{product?.title}</h1>
            <h2 className='text-danger'>{product?.price}</h2>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category: {product?.category}</h4>
            <h4 className='fs-5'>{product?.description}</h4>
            <h5 className='mt-4'>Client Reviews: </h5>
            { product?.reviews?.map((item,index)=>(
              <div key={index} className='border rounded p-2 shadow-sm my-2'>
                <p className='mb-2'> <span className='fw-bolder'>{item?.reviewerName}</span> <span className='ms-2'>{item?.comment}</span></p>
                <p  className='mb-0'>Rating:{item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning ms-1' /></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default View
