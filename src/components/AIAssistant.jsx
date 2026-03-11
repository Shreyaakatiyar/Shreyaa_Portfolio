import React from 'react'
import { LuBot } from "react-icons/lu";

const AIAssistant = () => {
  return (
    <div className='fixed bottom-8 right-8 z-60'>
        <button className='flex items-center gap-3 bg-[rgba(25,16,34,0.7)] backdrop-blur-md p-6 border border-[#8c2bee]/50 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group cursor-pointer'>
            <div className='relative'>
                <span className="text-primary text-3xl"> <LuBot /> </span>
                <span className='absolute -top-1 -right-1 flex h-3 w-3'>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c2bee] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8c2bee]"></span>
                </span>
            </div>
            <span className="font-bold text-sm tracking-wide">Ask Shreyaa AI</span>
        </button>
    </div>
  )
}

export default AIAssistant