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
  return`Your payment has gone through, your new friend or friends will be the cat's meow!`
})  


export default CheckOut