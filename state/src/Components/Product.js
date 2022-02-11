import ListItem from "./ListItem";
import { useState } from "react";
const item=
  {
   discountedPrice:340,
   price:450,
   title:'Title Of The Item1',
   thumbnail:'placeholder.png' 
  }
const Products=()=>{
  
  const [item,setItem]=useState({
      id:0,
      discountedPrice:340,
      price:450,
      title:'Title Of The Item1',
     thumbnail:'placeholder.png' 
     })
  const handleInput=(event)=>{
    setItem({...item,[event.target.name]:event.target.value})
  }
  const submitForm=(event)=>{
    event.preventDefault();
   
    // check
    if(item.discountedPrice>item.price){
      alert(`Discounted Price can't be greater than price`)
      return
    }
      }
 
    return (
        <div className={"product-wrapper"}>
        <div className={"form"}>
          <form onSubmit={"submitForm"}>
            <h2>Item Card Details</h2>
            <div className={"input-field"}>
              <label htmlFor="title">Title</label>
              <input name="title" type="text" placeholder="Enter Title" 
              value={item.title} 
              onChange={handleInput}
              required/>
            </div>
            <div className={"input-field"}>
            <label htmlFor="price">Price</label>
            <input name="price" type="number" placeholder="Enter price" 
            value={item.price} 
            onChange={handleInput}
            required/>
          </div>
          <div className={"input-field"}>
          <label htmlFor="discountedPrice">DiscountedPrice</label>
          <input name="disocuntedPrice" type="number" placeholder="Enter Discountedprice" 
          value={item.discountedPrice} 
          onChange={handleInput}
          required/>
        </div>
        <div className={"input-field"}>
        <label htmlFor="thumbnail">Thumbnail</label>
        <input name="thumbnail" type="text" placeholder="Enter thumbnail" 
        value={item.thumbnail} 
        onChange={handleInput}
        required/>
      </div>
      <div className={"submit-wrap"}>
      <button onClick={submitForm}>Update</button>
      </div>
          </form>
        </div>
          <div>
            <div>
              <ListItem data={item}></ListItem>
            </div>
          </div>
        </div>
    )
}
export default Products;