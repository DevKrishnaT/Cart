import React from 'react'
import Items from './Items'
import Cart from './cart'

const Body = () => {
  return (
    <div className='h-full my-5 mx-5 relative'>
        <Items />
        <div className="absolute top-115 right-120">
           <Cart />
        </div>

    </div>
  )
}

export default Body