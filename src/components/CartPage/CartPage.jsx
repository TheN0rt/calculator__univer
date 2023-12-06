import React, { useEffect, useState } from 'react'
import { formatPrice } from '../../helpers/helper'
import { useNavigate } from 'react-router-dom'
import backImg from '../../img/icons/navigation/back.png'

const CartPage = ({summaryData, addDataToFirebase, removeItemFromSummaryData}) => {
   const [resData, setResData] = useState({})
   const navigate = useNavigate()
   useEffect(() => {
      setResData(summaryData)
   }, [summaryData])
  return (
    <div className='cartpage'>
      <div className='back' onClick={() => navigate(-1)}>
         <img src={backImg} alt="Вернуться" />
      </div>
      <div className="cartpage-block">
         {
            Object.keys(resData).map((el) => (
               <div className='cartpage__item'>
                  <div className="cartpage__additional">
                     <button className='delete' onClick={() => removeItemFromSummaryData(el)}>
                        Удалить из списка
                     </button>
                  </div>
                  <ul>
                     {
                        Object.keys(resData[el]).map((key, index) => {
                           if(key === 'summary'){
                              return ''
                           }
                           return(
                           <li key={key+index}>
                              <h2>{key}</h2>
                              <p>
                                 <span>{resData[el][key]?.name}</span>
                                 <span>{formatPrice(resData[el][key]?.price)}</span>
                              </p>
                           </li>
                        )})
                     }
                  </ul>
               </div>
            ))
         }
      </div>
      <div className="cartpage__summary">
         <h2>Итого:</h2>
         <p>
            <span>
               {
                  Object.keys(resData).reduce((acc, el) => {
                     return acc += +Object.keys(el).length
                  }, 0)
               } услуг
            </span>

            <span>
               {
                  formatPrice(
                     Object.keys(resData).reduce((acc, el) => {
                        return acc += resData[el]['summary']
                     }, 0)
                  )
               }
            </span>
         </p>
         <button onClick={() => {
            addDataToFirebase(summaryData)
            navigate('/success')
         }}>
            Оплатить
         </button>
      </div>
    </div>
  )
}

export default CartPage