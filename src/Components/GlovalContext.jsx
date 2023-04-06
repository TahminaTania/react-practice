import React, {createContext, useContext, useState} from 'react'


const contextApi=createContext()

export const useContextApi=()=>useContext(contextApi)


export default function GlovalContext({children}) {
    const [user,setuser]=useState("tania")

  return (
    <contextApi.Provider value={{user,setuser}}>
       {children}
    </contextApi.Provider>
  )
}
