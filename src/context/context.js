import React,{useState,createContext} from 'react'
export const context = createContext();
const ContextProvider = props => {
  const [search,setSearch] = useState({})
  const [apiData,setApiData] = useState({})

    return (
      <context.Provider value={{
          search,
          setSearch,
          apiData,
          setApiData

      }}>
          {props.children}

      </context.Provider>

  )
}
export default ContextProvider