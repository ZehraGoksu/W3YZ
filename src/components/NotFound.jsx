import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div className='d-flex align-items-center justify-content-center pt-5 mt-5'>
       <div>
         <h2 className='mt-5 pt-5'>404 | Not Found Page</h2>
         <Link to='/' className='text-center text-dark'> <pre>Go to home</pre></Link> 
       </div>
    </div>
  )
}

export default NotFound
