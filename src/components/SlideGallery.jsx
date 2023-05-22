import React from 'react'
import '../styles/SlideGalery.scss';
import {AiFillRightCircle, AiFillLeftCircle} from 'react-icons/ai'; 
import {RxDotFilled} from 'react-icons/rx';

const SlideGallery = () => {
  return (
    <div className='slide mx-0 px-0 d-flex flex-column justify-content-around mt-5'>
      <div className='d-flex justify-content-center align-items-center'>
       <h1 className='text-white'>Yeni Gelen Sanat <br></br>Eserlerini Inceleyin</h1>
      </div>
      <div className='d-flex justify-content-between text-white px-3 mx-5'>
        <p>Özel Galerimiz</p>
        <div className='icon'>
            <AiFillLeftCircle/>
            <RxDotFilled className='firstDot'/> 
            <RxDotFilled className='dots'/> 
            <RxDotFilled className='dots'/> 
            <RxDotFilled className='dots'/> 
            <RxDotFilled className='dots'/> 
            <RxDotFilled className='dots'/> 
            <RxDotFilled className='dots'/>             
            <AiFillRightCircle className='ms-3'/>
        </div>
      </div>
    </div>
  )
}

export default SlideGallery
