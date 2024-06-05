import Hero from '../Hero/Hero'
import NewArrival from '../New Arrival/NewArrival'
import LatestNews from '../LatestNews/LatestNews'
import Fav from '../Fav/Fav'
import Footer from '../Footer/Footer'

function Shop() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <NewArrival/>
        <LatestNews/>
        <Fav/>
        <Footer/>
    </div>
  )
}

export default Shop