import { createContext, useContext, useState } from "react";


const SearchContext = createContext();

function SearchProvider({ children }){
    const [search, SetSearch] = useState("");


    return(
        <SearchContext.Provider value={{ search, SetSearch }}>
            {children}
        </SearchContext.Provider>
    )
};


function useSearch(){
    const context = useContext(SearchContext)

    return context;
};

export { useSearch, SearchProvider };