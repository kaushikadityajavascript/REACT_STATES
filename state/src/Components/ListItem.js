import React from 'react';
import AddToCartIcon from '../assets/icons/add_cart.svg';
import {useState} from 'react';
//import AddToCartIcon from './Assets/add_cart.svg'

const ListItem=({data})=>{
  const [counter,setCounter]=useState(0)

  const increaseCounterOne=()=>{
    setCounter(counter+1)
  }
  const decreaseCounterOne=()=>{
    if(counter<=0){
      return
    }
    setCounter(counter-1)
  }
  
  return  (
  <div className={'item-card'}>
    <img className={'img-fluid'} src={`/assets/${data.thumbnail}`} alt='some title'/>
    <div className={'item-card__information'}>
      <div className={'pricing'}> 
      
        <span>₹{data.discountedPrice}</span>
        <small>
          <strike>₹{data.price}</strike>
        </small>
      </div>
      <div className={'title'}>
        <h3>{data.title}</h3>
      </div>
    </div>
       {/*} <small className='cart-message'>{message}</small>
        <button className={"cart-add"} onClick={handleClick}>
  <span>Add to cart</span>
    <img src={AddToCartIcon} alt='image' />
  </button>*/}
  <div className={"cart-addon"}>
  <button onClick={decreaseCounterOne}><span>-</span></button>
  <span className={"counter"}>{counter}</span>
  <button onClick={increaseCounterOne}><span>+</span></button>
  </div>
  </div>
  )
  
}

export default ListItem;
