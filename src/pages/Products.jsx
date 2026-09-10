import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <>
      <Header/>
      <div className='m-5'>
        <div className='row pt-5'>
          {/* Duplicate column Accordingly */}
            <div className='col-md-3 mb-2'>
              {/* Card */}
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{height:'250px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgj7yYgINDLVL4tvQPlcM4CowQB9-fmdJNX0hTqyuWeWO6MWNbfUduj52A&s=10" />
                <Card.Body className='text-center'>
                  <Card.Title>Card Title</Card.Title>
                  <Link to={'/product/id'} className='btn btn-primary'>View More...</Link>
                </Card.Body>
              </Card>
            </div>
        </div>
      </div>
    </>
  )
}

export default Products
