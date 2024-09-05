import React from 'react'
import Basket from '../Basket/Basket';
import {Routes, Route,} from `react-router-dom`;
const checkoutButton= document.getElementById(`checkoutButton`)

function CheckOut(){
  return(
    <Routes>
      <Route path="basketItems/:{Basket}"
      element={<Basket/>}
      />
      </Routes>
  )
}
checkoutButton.addEventListener(click,() => {
  return`Yourpayment has gone through, your new friend will be the cats meow`
})  


export default CheckOut