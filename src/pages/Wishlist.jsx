import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Wishlist() {
  return (
    <>
      <Header/>
      <div className='container my-5'>
        <h1 className='pt-5 text-primary'>User Wishlist</h1>
        <div className='row pt-5'>
          {/* Duplicate column Accordingly */}
            <div className='col-md-3 mb-2'>
              {/* Card */}
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{height:'250px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgj7yYgINDLVL4tvQPlcM4CowQB9-fmdJNX0hTqyuWeWO6MWNbfUduj52A&s=10" />
                <Card.Body className='text-center'>
                  <Card.Title>Card Title</Card.Title>
                  <div className='d-flex justify-content-evenly'>
                    <button className='btn text-danger fs-4'> <FontAwesomeIcon icon={faHeartCircleXmark} /> </button>
                    <button className='btn text-success fs-4'> <FontAwesomeIcon icon={faCartPlus} /> </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
