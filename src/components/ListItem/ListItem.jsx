import { formatPrice } from "../../helpers/helper"

const ListItem = ({data, name, onChange, calcObj}) => {
   return(
      <li>
         <label htmlFor={`${name}__${data?.price || data.name}-input`}>
            <input type="radio" 
            name={name} 
            id={`${name}__${data?.price || data.name}-input`} 
            value={data.price}
            checked={ Object.keys(calcObj).some((key) => key === name & calcObj[key].name === data.name) ? true : false }
            onChange={(e) => {
               onChange(name, data.name, e.target.value)
            }}
            disabled={ name === 'Тип бизнеса' ? true : false}/>
            <div>
               <span>
                  {data.name}
               </span>
               <span>
                  {formatPrice(data?.price)}
               </span>
            </div>
         </label>
      </li>
   )
}

export default ListItem