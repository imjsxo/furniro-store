import Image from 'next/image'
import { Inter } from 'next/font/google'
import Productcard from '@/component/Productcard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className='bg-hero-banner h-banner-height mx-auto flex justify-end items-center'>
        <div className='bg-[#FFF3E3] w-1/2 px-9 py-14 float-right mr-16'>
          <p className='text-base font-semibold'>New Arrival</p>
          <h1 className='text-[52px] text-[#B88E2F] font-bold leading-[56px] mb-12'>Discover Our <br />New Collection</h1>
          <button className='px-16 py-6 bg-[#B88E2F] text-white text-base font-bold'>Buy Now</button>
        </div>
      </section>
      <section className='my-14'>
        <h1 className='text-center text-[32px] font-bold'>Browse The Range</h1>
        <div className='flex justify-center gap-5 mt-16'>
          <div className='flex justify-center flex-col'>
            <img src="/images/dining.png" alt="dining" className='mb-8' />
            <span className='text-xl font-semibold text-center'>Dining</span>
          </div>
          <div className='flex justify-center flex-col'>
            <img src="/images/living.png" alt="" className='mb-8' />
            <span className='text-xl font-semibold text-center'>Living</span>
          </div>
          <div className='flex justify-center flex-col'>
            <img src="/images/bedroom.png" alt="" className='mb-8' />
            <span className='text-xl font-semibold text-center'>Bedroom</span>
          </div>
        </div>
      </section>

      <section className='flex justify-center flex-col items-center'>
        <h1 className='text-center text-[32px] font-bold mb-8'>Our Products</h1>
        <div className='max-w-[1286px] mx-auto flex flex-wrap gap-8 justify-center'>
          <Productcard />
        </div>
        <button className='mt-8 mb-16 px-20 py-3 text-base font-semibold border border-[#B88E2F] text-[#B88E2F] w-fit'>Show More</button>
      </section>

      <section>
        <p className='text-xl font-semibold text-gray-400 text-center'>Share your setup with</p>
        <h1 className='text-[40px] font-bold text-center'>#FuniroFurniture</h1>
        <img src="/images/banner2.png" alt="" />
      </section>
    </>
  )
}
