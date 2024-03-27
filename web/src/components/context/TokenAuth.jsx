import React, { createContext, useState } from 'react'

export const tokenAuthorizationContext = createContext()

function TokenAuth({children}) {
    const[isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <>
    <tokenAuthorizationContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
        {children}
        </tokenAuthorizationContext.Provider>
    </>
  )
}

export default TokenAuth