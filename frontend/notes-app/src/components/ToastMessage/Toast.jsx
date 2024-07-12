/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import {LuCheck} from "react-icons/lu"
import { MdDeleteOutline } from 'react-icons/md'

// eslint-disable-next-line react/prop-types
const Toast = ({isShown, message, type, onClose}) => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    },3000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [onClose])

  return (
    <div className={`absolute top-20 right-6 transition-all duration-400 ${
      !isShown ? "opacity-100" : "opacity-0"
    }`}>
      <div className={`bg-white border shadow-2xl rounded-md after:w-[5px] after:h-full ${
        type === "delete" ? "after:bg-red-500" : "after:bg-green-500"
      } after:absolute after:left-0 after:top-0 after:rounded-l-lg`}>      
        <div className="flex items-center gap-3 py-4 mx-9">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
            type === "delete" ? "bg-red-100" : "bg-green-100"
          }`} >

            {type === 'delete' ? (<MdDeleteOutline className="text-xl text-red-500"/>
            ) : (<LuCheck className="text-xl text-green-600"/>)}
          </div>
          <p className="text-sm text-slate-800">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Toast
