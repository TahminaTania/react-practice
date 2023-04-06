import React, { useReducer, useState } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri';

const initialState=[
  { id:Date.now(), title:"Who We are ?", paragraph:"Cloud Production limited Bangladesh was established on 2018 as a join venture company is bridging between Japan and Bangladesh. Cloud production limited launched with the vision to contribute to the world with an attractive and friendly organization. Our philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry. We have planned our business strategies to cope up with the vision of Bangladesh Government to achieve the goal of Digital Bangladesh. Within this limited time after establishment, Cloud Production Limited has proved its reputation as an ICT Company in Bangladesh by providing services to both foreign and local organizations. With its technical expertise and strategic planning Cloud production is providing wide range of IT related services by implementing its cutting edge information solutions to achieve remarkable business opportunities."},
  { id:Date.now(), title:"Software development process", paragraph:"Cloud Production limited Bangladesh was established on 2018 as a join venture company is bridging between Japan and Bangladesh. Cloud production limited launched with the vision to contribute to the world with an attractive and friendly organization. Our philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry. We have planned our business strategies to cope up with the vision of Bangladesh Government to achieve the goal of Digital Bangladesh. Within this limited time after establishment, Cloud Production Limited has proved its reputation as an ICT Company in Bangladesh by providing services to both foreign and local organizations. With its technical expertise and strategic planning Cloud production is providing wide range of IT related services by implementing its cutting edge information solutions to achieve remarkable business opportunities."},
  { id:Date.now(), title:"UX and UI in Web Application Development", paragraph:"Cloud Production limited Bangladesh was established on 2018 as a join venture company is bridging between Japan and Bangladesh. Cloud production limited launched with the vision to contribute to the world with an attractive and friendly organization. Our philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry. We have planned our business strategies to cope up with the vision of Bangladesh Government to achieve the goal of Digital Bangladesh. Within this limited time after establishment, Cloud Production Limited has proved its reputation as an ICT Company in Bangladesh by providing services to both foreign and local organizations. With its technical expertise and strategic planning Cloud production is providing wide range of IT related services by implementing its cutting edge information solutions to achieve remarkable business opportunities."},
];



function handeleBlog(state,action){
  switch(action.type){
    case "add":
      return [...state,action.payload]
    case "delete":
      return state.filter((blog)=>{
        return blog.id!== action.payload.id;
      });
    default:
      return state
  }
}

export default function Blog() {
  const [state, dispatch]=useReducer(handeleBlog, initialState)
  const [title,setTitle]=useState("")
  const [paragraph,setParagraph]=useState("")
  
  const addBlog=(e)=>{
     e.preventDefault();
     const blog={
      id:Date.now(),
      title,paragraph
     }
     setTitle(" ");
     setParagraph(" ");
     dispatch({type:"add", payload: blog})
  }

  return (
    <section className='w-full bg-white h-full text-black '>
      <div className=' grid grid-cols-5'>
        <div className='pt-20 col-span-4'>
            <div className='uppercase font-bold p-2 md:text-3xl sm:text-xxl text-center bg-teal-500'>blogs:</div> 
          {state.map(blog=>{
            return(
              <div className='py-10'>
              <div key={blog.id} className='mx-[10%] shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300 bg border-dotted border-2  bg-white hover:bg-gradient-to-r from-teal-400 to-green-200 '>
                <div className='flex justify-between py-8'>
                  <h1 className=' uppercase text-xl font-bold text-center  text-gray-600'>{blog.title} </h1>
                  <span className='' onClick={()=> dispatch({type:"delete",payload: {id:blog.id}})}><RiDeleteBinLine size={20}/></span>
                </div> 
                <p className='py-2  text-gray-600 leading-7'>{blog.paragraph}</p>
              </div>
              </div>
            )
          })
          
          }
        </div>


        <div className='col-span-1  bg-gray-200'>
          <form onSubmit={addBlog} className='my-[50%] p-3'>
            <h1 className='font-bold p-2 md:text-xxl sm:text-xl'>Add new Blog..</h1>
            <div className='p-3'>
               <input className='peer block min-h-[auto] w-full rounded border-2  border-slate-500 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0' 
               type='text' 
               placeholder='blog title' 
               value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className='p-3'>
              <textarea 
              className='peer block min-h-[auto] w-full rounded border-2 border-slate-500 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0' 
              type='text' 
              rows='10'
              placeholder='blog body' 
              value={paragraph} 
              onChange={(e)=> setParagraph(e.target.value)}> </textarea>
            </div>
            <div className='p-3'>
              <button className='inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'>Add</button></div>
          </form>
        </div>
      </div>
    </section>
  )
}
