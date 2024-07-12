/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import {IoMdClose} from "react-icons/io"


const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {
  return (
    <div className="w-80 flex items-center mx-8 px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Box"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />
      {
      value && (<IoMdClose 
        className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3" 
        onClick={onClearSearch}/>)}
        
      <FaMagnifyingGlass 
        className="text-slate-400 cursor-pinter hover:text-black" 
        onClick={handleSearch}
        />
    </div>
  )
}

export default SearchBar
SearchBar