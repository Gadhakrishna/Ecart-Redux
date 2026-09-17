import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()

  const handleCart=(product)=>{
      const existingProduct = userCart?.find(item=>item.id==product.id)
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
      <div className='container my-5'>
        {
          userWishlist?.length>0 ?
          <>
            <h1 className='pt-5 text-primary'>User Wishlist</h1>
            <div className='row pt-5'>
              {/* Duplicate column Accordingly */}
                {
                  userWishlist?.map(item=>(
                    <div key={item?.id} className='col-md-3 mb-2'>
                      {/* Card */}
                      <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height:'250px'}} variant="top" src={item?.thumbnail} />
                        <Card.Body className='text-center'>
                          <Card.Title>{item?.title}</Card.Title>
                          <div className='d-flex justify-content-evenly'>
                            <button onClick={()=>dispatch(removeFromWishlist(item?.id))} className='btn text-danger fs-4'> <FontAwesomeIcon icon={faHeartCircleXmark} /> </button>
                            <button onClick={()=>handleCart(item)} className='btn text-success fs-4'> <FontAwesomeIcon icon={faCartPlus} /> </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                }
            </div>
          </>
          :
          <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
            <img className='w-25' src="https://bexcart.com/assets/images/empty-cart.gif" alt="wishlist"/>
            <h1>Your Wishlist is Empty!!!</h1>
            <Link to={'/'} className='btn btn-primary'>Add more...</Link>
          </div>
        }
      </div>
    </>
  )
}

export default Wishlist
