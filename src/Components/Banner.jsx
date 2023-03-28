import React from 'react'
import banner from '../Image/banner.jpg'
// import Typed from 'react-typed'

export default function Banner() {
  return (
    <div className='text-white'>
        <div className='max-w-[2000px] min-w-[400px] mt-0 w-full md:h-screen h-[600px] bg-no-repeat bg-cover mx-auto text-center flex flex-col justify-center '  style={{backgroundImage: `linear-gradient(to bottom, rgba(211,174,238,0.714), rgba(148,190,233,1)),url(${banner})`}}>
            <div className='grid grid-cols-3'>
                <div>

                </div>

                <div className='col-span-2'>
                    <h1 className='uppercase font-bold p-2 md:text-7xl sm:text-6xl md:py-6'>Cloud Production Ltd</h1>
                    <p className=' font-bold p-2 md:text-3xl sm:text-xxl'>We Offer Best for you
                          {/* <Typed
                            strings={[
                                'AI Integration',
                                'Sass',
                                'Software Development',
                                'Consulatncy']}
                                typeSpeed={40}
                                backSpeed={50}
                                attr="placeholder"
                                loop >
                                <input type="text"/>
                            </Typed> */}
                    </p>
                    <h6 className='text-blue-900 font-bold '> To make the difference since 2018</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
