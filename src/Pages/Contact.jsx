import React from 'react'
import { useContextApi } from '../Components/GlovalContext'
export default function Contact() {
  const {user}= useContextApi()
  return (
    <section className='pt-20 w-full h-screen bg-blue-300 flex items-center justify-center'>
        <div className=''>
          <h1 className=' font-bold md:text-7xl sm:text-6xl '> hello <span className='uppercase text-green-900'> {user} </span>please let us know, how we can help you</h1>
        </div>
    </section>
  )
}
