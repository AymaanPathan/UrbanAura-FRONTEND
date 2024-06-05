import ourStoryImg from '../../assets/ourStory.jpg'

export default function AboutUs() {
  return (
    <div>
        <div className='text-9xl text-center font-light  grid items-center grid-cols-2'>
          <div>
            <h1 className='p-2 text-5xl text-left font-light' >
                Our Story
                </h1>
                <img className='w-fit h-96 ml-2'  src={ourStoryImg} alt="" />
          </div>
            <div className='grid items-center justify-center'>
              <h1 className='font-extralight'>About Us</h1>
              <p className='text-[12px] p-4 leading-4 text-left ml-8'> At Devine Vogue, we believe that fashion is a powerful form of self-expression. Founded with the vision of bringing stylish urban living to the forefront, we are committed to offering our customers the latest in fashion trends with a touch of elegance and sophistication.</p>
              <div>
              <button className='text-xs bg-black text-white px-5 py-2'>Learn More</button>
              </div>
            </div>
            </div>
    </div>
  )
}
