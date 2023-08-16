import logo from '../../assets/logo 1.png'
import brand1 from '../../assets/image 4.png'
import brand2 from '../../assets/image 6.png'
import brand3 from '../../assets/image 9.png'
import brand4 from '../../assets/image 21.png'
import brand5 from '../../assets/image 10.png'
import searchIcon from '../../assets/ri_search-2-line.png'
import group from '../../assets/Group 98.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const index = () => {
   useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  return (
    <div className='flex flex-col gap-10 items-center relative'>
        <div className='w-full h-[300px] bg-gray-700/90 relative'>
           <img className='w-full h-full object-cover mix-blend-overlay img' src={group} alt="" />
        </div>
        

        <div className='absolute top-24 flex flex-col gap-4 items-center max-lg:top-10'>
        <div className='max-w-[1240px] mx-auto items-center flex gap-[50rem]' data-aos='fade-up'>
           <input type="text" name="seach" id="search" placeholder='search' className='p-4 rounded-full w-[40rem] outline-none max-sm:w-[30rem]'/>
           <img src={searchIcon} alt="" className='absolute left-[94%]'/>
        </div>
        <div className='flex flex-row gap-8' data-aos='fade-up'>
            <a href='https://www.aliexpress.com/' target="_blank" className='bg-white h-[100%] p-2 rounded-xl flex flex-col justify-center items-center hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand1} alt="" className='h-7'/>
               <p className=' text-sm'>Ali Express</p>
            </a>

            <a href='https://www.ebay.com/' target="_blank" className='bg-white h-[100%] p-2 rounded-xl flex flex-col justify-center items-center hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand2} alt="" className='h-7'/>
               <p className=' text-sm'>Ebay</p>
            </a>

            <a href='https://www.apple.com/' target="_blank" className='bg-white h-[100%] p-2 rounded-xl flex flex-col justify-center items-center px-6 hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand3} alt="" className='h-7'/>
               <p className=' text-sm'>Apple</p>
            </a>

            <a href='https://www.adidas.com/us' target="_blank" className='bg-white h-[100%] rounded-xl flex flex-col justify-center items-center py-2 px-4 hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand4} alt="" className='h-7'/>
               <p className=' text-sm'>Adidas</p>
            </a>

            <a href='https://www.alibaba.com/' target="_blank" className='bg-white h-[100%] p-2 rounded-xl flex flex-col justify-center items-center hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand5} alt="" className='h-7'/>
               <p className=' text-sm'>Alibaba</p>
            </a>
        </div>
        </div>

        <div className='absolute right-32 top-36' data-aos='fade-up'>
            <a href="/home">
               <img src={logo} alt="" className='select'/>
            </a>
        </div>
    </div>
  )
}

export default index