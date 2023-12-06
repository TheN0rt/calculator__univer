import React from 'react'
import { Link } from 'react-router-dom'

const SuccesPage = () => {
  return (
    <div className='successpage'>
      <h1>Всё прошло успешно!</h1>
      <Link to={'/'}>На главную</Link>
    </div>
  )
}

export default SuccesPage