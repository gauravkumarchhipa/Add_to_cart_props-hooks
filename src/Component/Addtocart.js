import React from 'react'
function Addtocart(props){
  return (
    <>
      <h1>Total Cart : {props.cartItemCount}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          {props.cart?.map((item, index) => 
            <div key={index} className='card'>
              <h5 className="card-title">{item.name}</h5>
              <h5 className="card-text">Price : {item.price}</h5>
              <button 
              onClick={()=>props.removeFromCart(index)} 
              className="btn btn-primary">Remove from Cart</button>
            </div>
          )}
          </div>
        </div>
      </div> 
      <h1>Total Price : {props.totalPrice}</h1>
    </>
  )
}
export default Addtocart;