import ProductItem from './ProductItem'
import cards from './card-data'

const Product =(props) => {
  const AddToCart = ()=>{
    props.setCartItemCount((a)=>a+1)
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {cards?.map(product => <ProductItem key={product.id} item={product} name={product.name} price={product.price} cartIncreament={AddToCart} 
            setCart={props.setCart}
            />)}
          </div>
        </div>
      </div> 
      <div className='card-container'>    
      </div>
    </div>
  )
}
export default Product;
