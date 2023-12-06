/* eslint-disable array-callback-return */
import { useEffect, useState } from "react"
import Calculator from "../Calculator/Calculator"
import Cart from "../Cart/Cart"
import backImg from '../../img/icons/navigation/back.png'
import { useNavigate } from "react-router-dom"

const Landing = ({
   onChange, 
   nameOfproperty, 
   imgDataForCart, 
   data, 
   imgDataForList}) => {
   let [arrayOfData, setData] = useState([])
   const [calcObj, setCalcObj] = useState( sessionStorage.getItem(`${nameOfproperty}`) ?
   JSON.parse(sessionStorage.getItem(nameOfproperty))  
   : { 
      "Тип бизнеса": {
         name: nameOfproperty,
         price: data["Тип бизнеса"].find(el => el.name === nameOfproperty)?.price
      } 
   } )
   const navigate = useNavigate();
   
   useEffect(() => {
      setData(data)
   }, [])

   const setInData = (propertyName, obj) => {
      let data = {...calcObj}
      data[propertyName] = obj
      data.summary = setSum(data)
      setCalcObj((prev) => prev = data)
      setInLocalStorage(data)
      onChange(nameOfproperty, data)
   }

   const setInLocalStorage = (data) => {
      sessionStorage.setItem(`${nameOfproperty}`, JSON.stringify(data))
   }

   const setSum = (obj) => {
      return Object.keys(obj).reduce((acc, key) => {
         if(obj[key]?.price){
            return acc += +obj[key].price
         }

         return acc
      }, 0)
   }

   return(
      <div className="wrapper">
         <div className="back" onClick={() => navigate(-1)}>
            <img src={backImg} alt="Вернуться назад" />
         </div>
         <h1>
            Заполните анкету и получите полный расчет стоимости вашего проекта
         </h1>
         <div className="pageForCalculator">
            <Calculator 
            data={arrayOfData}
            onChange={onChange} 
            nameOfproperty={nameOfproperty}
            setInData={setInData}
            calcObj={calcObj}
            imgDataForList={imgDataForList}/>
            <Cart sum={setSum(calcObj)} data={calcObj} imgDataForCart={imgDataForCart}/>
         </div>
      </div>
   )
}

export default Landing