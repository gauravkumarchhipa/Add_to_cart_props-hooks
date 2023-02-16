import React from 'react'
const ProductItem = ({item, name, price, cartIncreament, setCart, tPrice}) => {
  function cartHadnler(){
    cartIncreament();
    setCart((cart) =>[...cart, item ])
  }
  return(
    <div>
      <div className='my-4'>
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price : {price}</p>
            <button onClick={cartHadnler} className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductItem