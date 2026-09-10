import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faRightLong, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'220px'}} className='text-light bg-primary d-flex justify-content-center align-items-center flex-column'>
      <div className='d-flex justify-content-evenly mb-2 w-100 p-4'>
        <div style={{width:'480px'}}>
          <h3><FontAwesomeIcon icon={faTruckFast} /> ECART</h3>
          <p>Designed and built with all the love in the world by me. <br/>
          Code licenced Gadha, docs CC BY 3.0. <br/>
          Currently v5.3.2</p>
        </div>
        <div className='d-flex flex-column'>
          <h3>Links</h3>
          <Link to={'/'} className='text-light text-decoration-none'>Home</Link>
          <Link to={'/wishlist'} className='text-light text-decoration-none'>Wishlist</Link>
          <Link to={'/cart'} className='text-light text-decoration-none'>Cart</Link>
        </div>
        <div className='d-flex flex-column'>
          <h3>Guides</h3>
          <Link to={'/'} className='text-light text-decoration-none'>Bootstrap</Link>
          <Link to={'/wishlist'} className='text-light text-decoration-none'>Redux</Link>
          <Link to={'/cart'} className='text-light text-decoration-none'>React</Link>
        </div>
        <div className='d-flex flex-column'>
          <h3>Contact US</h3>
          <div className='d-flex md-2'>
            <input type="text" placeholder='Email Here!!!' className='form-control'/>
            <button className='btn text-light'><FontAwesomeIcon icon={faRightLong} /></button>
          </div>
          <div className='d-flex jsutify-content-between align-items-center mt-3'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} className='p-2' />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} className='p-2' />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} className='p-2' />
          </div>
        </div>
      </div>     
    </div>
  )
}

export default Footer
