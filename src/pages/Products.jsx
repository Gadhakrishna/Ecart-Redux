import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

function Products() {

  const {loading, allProducts,error} = useSelector(state=>state.productReducer)

  // pagination
  const [currentPage,setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageLastIndex = currentPage * productsPerPage
  const currentPageFirstIndex = currentPageLastIndex - productsPerPage
  const visibleProductsArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

   const navigateNextPage =()=>{
    currentPage != totalPages && setCurrentPage(currentPage+1)
   }

  const navigatePrevPage = ()=>{
    currentPage !=1 && setCurrentPage(currentPage-1)
  }

  return (
    <>
      <Header insideHeader/>
      <div className='m-2 m-md-5'>
        {
          loading ?
          <div className='text-center py-5 fw-bolder'>Loading...</div>
          :
          <div className='row pt-5'>
          {/* Duplicate column Accordingly */}
            {
              allProducts.length>0 ?
                visibleProductsArray?.map(product=>(
                  <div key={product?.id} className='col-12 col-sm-6 col-lg-3 mb-4'>
                    {/* Card */}
                    <Card className="w-100">
                      <Card.Img style={{ height: '250px', objectFit: 'contain' }} variant="top" src={product?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product?.title}</Card.Title>
                        <Link to={`/product/${product?.id}`} className='btn btn-primary'>View More...</Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              :
              <div className='text-center py-5 fw-bolder'>Products not Found!!!</div>
            }
          </div>
        }
        <div className='text-center my-3 fs-5 fw-bolder'>
          <button onClick={navigatePrevPage} className='btn'><FontAwesomeIcon icon={faBackward} /></button>
          {currentPage} of {totalPages}
          <button onClick={navigateNextPage} className='btn'><FontAwesomeIcon icon={faForward} /></button>
        </div>
      </div>
    </>
  )
}

export default Products
