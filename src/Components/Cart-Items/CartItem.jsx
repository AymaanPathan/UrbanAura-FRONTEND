import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';

function CartItem() {
  const { Allproduct, items, removeFromCart, emptyCart } = useContext(ShopContext);
  let price = Allproduct.reduce((total, product) => total + items[product.id] * product.newPrice, 0).toFixed(2);


  const handleRemove = (productId)=>{
    removeFromCart(productId)
    toast.success("Item Removed")
  }

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-center text-4xl font-light text-gray-400 tracking-wide mt-6 mb-2'>Shopping Bag</h1>
      {Allproduct.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='col-span-2'>
            {Allproduct.map((product) => {
              if(items[product.id]>0){
                return (
                  <div key={product.id} className='cart-item bg-white rounded-lg shadow-md p-6 mb-4 flex items-center'>
                    <img className='h- w-24 mr-4 rounded-lg' src={product.image} alt={product.name} />
                    <div className='flex flex-col'>
                      <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
                      <p className='text-gray-600 mb-2 '>Price: ₹{product.newPrice}</p>
                      <div className='grid grid-cols-2 items-center mb-2'>
                        <button onClick={() => handleRemove(product.id)} className='bg-red-600 text-white py-1 px-2 rounded-md mr-2'>Remove</button>
                        <span className='text-xl font-light'>Quantity: {items[product.id]}</span>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className=''>
            <div className='bg-white rounded-lg  shadow-md p-6'>
              <h2 className='text-lg  mb-4 font-light text-black'>Summary</h2>
              <div className='flex justify-between mb-2'>
                <span className='font-light  text-black'>Subtotal</span>
                <span>₹{price}</span>
              </div>
              <div className='flex justify-between mb-2'>
                <span className='font-light  text-black'>Taxes</span>
                <span >₹190</span>
              </div>
              <div className='flex justify-between mb-2'>
                <span className='font-light  text-black'>Shipping</span>
                <span>Free</span>
              </div>
              <hr className='my-2 w-full'  />
              <div className='flex justify-between mb-2'>
                <span className='font-semibold'>Total</span>
                <span className='font-semibold'>₹{price>0 ? (parseFloat(price) + 190).toFixed(2) :"0.00"}</span>
              </div>
              <button className='bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full'>Checkout</button>
              <button onClick={emptyCart} className='bg-red-500 text-white py-2 px-4 rounded-lg mt-4 w-full'>Empty Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center my-8'>Your shopping bag is empty.</div>
      )}
    </div>
  );
}

export default CartItem;
