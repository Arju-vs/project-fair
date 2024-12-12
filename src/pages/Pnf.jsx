// rafce
import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className=' d-flex justify-content-center align-items-center flex-column my-2'> 
      <img src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" alt="" style={{width:'800px',height:'400px'}} className="img-fluid" />
      <h1>Look Like You're Lost</h1>
      <p>The page your looking for is not available</p>
      <Link to={'/'} className="btn btn-warning">Go To Home</Link>
    </div>
  )
}

export default Pnf