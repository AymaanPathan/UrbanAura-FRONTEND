/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-hot-toast';

function Product() {
  const [added, setAdded] = useState('Add to Cart');
  const { Allproduct, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [size, setSize] = useState('white');

  const product = Allproduct.find((e) => e.id === Number(productId));

  const handleCart = (productId) => {
    addToCart(productId);
    toast.success('Item Added To Cart');
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:ml-6 mt-4 mb-7 lg:mb-0 px-4 lg:px-0">
      <div className="flex justify-center lg:justify-start lg:gap-2 mb-6 lg:mb-0">
        <img className="lg:max-w-96 md:h-96 object-cover" src={product.image} alt="" />
      </div>
      <div className="lg:ml-4 w-full lg:max-w-full px-4 lg:px-0">
        <h2 className="text-3xl lg:text-5xl text-[#A6A87A]">{product.name}</h2>
        <p className="text-gray-600 mt-4">MRP inclusive of all taxes</p>
        <div className="flex gap-4 mt-4">
          <p className="text-gray-500 text-xl line-through">₹{product.oldPrice}</p>
          <p className="text-[#CEBD9C] text-xl font-bold">₹{product.newPrice}</p>
        </div>
        <p className="mt-4 text-gray-400">{product.description}</p>
        <h2 className="mt-12">Sizes:</h2>
        <div className="sizes mt-4 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
          {['S', 'M', 'L', 'XL', 'XLL'].map((sizeOption) => (
            <div
              key={sizeOption}
              onClick={() => setSize(sizeOption)}
              className={`cursor-pointer border border-gray-400 px-1 py-2 text-center text-gray-500 ${size === sizeOption ? 'bg-[#C6A87A] text-white' : ''}`}
            >
              {sizeOption}
            </div>
          ))}
        </div>
        <div className='mt-8 mb-4'>
          <button onClick={() => handleCart(product.id)} className="CartBtn w-full md:w-96">
            <div className="IconContainer">
            <p className="text py-2 px-6 bg-yellow-300">Add to Cart</p>
              <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M2 6h16M2 10h16M2 14h16' />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
