import { useContext } from "react";
import { SearchInputContext } from "../context/SearchInputContext";

export const useSearchInput = () => {
  const context = useContext(SearchInputContext);
  if (!context) {
    throw new Error("useSearchInput 必須在 SearchInputProvider 內使用");
  }
  return context;
};