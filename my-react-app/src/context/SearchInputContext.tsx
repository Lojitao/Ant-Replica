import {createContext,RefObject,useRef} from 'react'


// 定義 Context 類型
type SearchInputContextType = {
  inputRef: RefObject<HTMLInputElement | null>;
};

//createContext
export const SearchInputContext = createContext<SearchInputContextType| null>(null)


//寫provider組件
export const SearchInputProvider: React.FC<{ children: React.ReactNode }> = ({ children })=>{
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <SearchInputContext.Provider value={{inputRef}}>
      {children}
    </SearchInputContext.Provider>
  )
}


//寫useInput hook
// export const useSearchInput = () => {
//   const context = useContext(SearchInputContext);
//   if (!context) {
//     throw new Error("useSearchInput 必須在 SearchInputProvider 內使用");
//   }
//   return context;
// };