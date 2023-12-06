import React, { useEffect, useState } from 'react'
import { formatPrice } from '../../helpers/helper'
import { Link } from 'react-router-dom'

const Cart = ({sum, data, imgDataForCart}) => {
   const [imgArr, setImgArr] = useState([])
   
   useEffect(() => {
      const arrOfKeys = Object.keys(data).filter(key => key !== 'summary')
      setImgArr(arrOfKeys.map(key => imgDataForCart[key]))
   }, [data])

   const setImgs = () => {
      return imgArr.map((el, index) => (
         <div className='cart__img-item'>
            <img src={el.src} alt='Img' key={index}/>
         </div>
      ))
   }
   
  return (
   <div className='cart'>
      <div className='cart__img-block'>
         {
            setImgs()
         }
      </div>

      <hr />

      <div className='cart__summary'>
         <p>
            <span>{imgArr.length} услуг</span>
            <span>{formatPrice(sum)}</span>
         </p>
         <Link to={'/cart'}>
            Перейти к оформлению
         </Link>
      </div>
   </div>
  )
}

export default Cart