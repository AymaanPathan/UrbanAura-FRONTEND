/* eslint-disable react/prop-types */
import  { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

function ShopCategory(props) {
  const [sort,setSort] = useState('popularity')
  const [input,setInput]  =useState('')
  
  const {Allproduct} = useContext(ShopContext)
  const filteredPRoduct = Allproduct.filter((item)=>{
    if (item.name.toLowerCase().includes(input.toLowerCase())){
      return item
    }
  }).sort((a,b)=>{
    if(sort ==='popularity') {
      return b.id -a.id
    }
   else if(sort ==='High to Low') {
      return b.new_price - a.new_price
    }
   else if(sort ==='Low to High') {
      return a.new_price - b.new_price
    }
  })
  const sortingFunc = (e)=>{
    setSort(e.target.value)
  }
   return (
    <div className='container mx-auto p-6 '>
      <div className='flex h-8 justify-between items-center gap-3 mb-6'>
        <div className='flex items-center'>
          <label htmlFor="sort" className='mr-2 text-gray-700'>Sort by:</label>
          <select 
            onChange={sortingFunc} 
            value={sort} 
            className='cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300' 
            id="sort"
          >
            <option value='popularity'>Popularity</option>
            <option value='High to Low'>High to Low</option>
            <option value='Low to High'>Low to High</option>
          </select>
        </div>
        <input  
          onChange={(e) => setInput(e.target.value)}
          type='text'
          value={input}
          placeholder='Search here...'
          className='border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full max-w-xs'
        />
      </div>
      
      <div className='grid gap-12 grid-cols-2   lg:grid-cols-4'>
        {filteredPRoduct.map((item, i) => {
          if (item.category === props.category) {
            return (
              <div key={i} className='bg-yellow-50 h-full shadow-sm  text-xs md:text-xl  md:max-h-full border border-gray-200 rounded-lg  overflow-hidden'>
                <Link to={`/product/${item.id}`} className='block'>
                  <img className='w-full object-cover bg-no-repeat h-[100%]' src={item.image} alt={item.name} />
                </Link>
                <div className='p-5 grid grid-cols-1 '>
                  <Link to={`/product/${item.id}`}>
                    <h2 className='text-xs md:text-xl font-semibold text-gray-900 mb-2'>{item.name}</h2>
                  </Link>
                  <div className='flex-col items-center  justify-around space-x-2'>
                    <div className=' gap-6 flex justify-normal '>
                    <span className='text-gray-500 text-sm md:text-xl line-through'>₹{item.oldPrice}</span> 
                    <span className='text-[#CEBD9C] mb:text-lg text-sm md:text-xl '>₹{item.newPrice}</span>
                    </div>
                  <Link to={`/product/${item.id}`} className='mt-4 inline-flex items-center px-3 py-2 bg-gray-700 text-white text-sm font-medium rounded-md shadow-sm hover:bg-yellow-200 hover:text-black duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none'>
                    Read more
                    <svg className='w-4 h-4 ml-2' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
                    </svg>
                  </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ShopCategory