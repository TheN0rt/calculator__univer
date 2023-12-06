import { useState } from "react"
import ListItem from "../ListItem/ListItem"

const List = ({data, name, setInData, calcObj}) => {
   const [dataRadio, setDataRadio] = useState({})

   const onChange = (nameOfRadio, name, price) => {
      const copyObj = {...dataRadio}
      copyObj.name = name
      if(price){
         copyObj.price = price
      }
      setDataRadio((prev) => prev = copyObj)

      setInData(nameOfRadio, copyObj)
   }

   return (
      <ul>
         {data.map(listItem => (
            <ListItem key={listItem.name} 
            data={listItem}
            name={name} 
            setInData={setInData}
            onChange={onChange}
            calcObj={calcObj}/>
         ))}
      </ul>
   )
}

export default List