import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


function PageNotFound() {
  return (
    <>
      <Header/>
      <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img className='w-25' src="https://assets-v2.lottiefiles.com/a/3455ed68-1151-11ee-9772-5b4c76d6674b/xn6epX0wkV.gif" alt="404 Image"/>
        <h1 className='mt-5 text-primary'>WE ARE SORRY....</h1>
        <Link to={'/'}>Back To Home</Link>
      </div>
    </>
  )
}

export default PageNotFound
