import React from 'react'
import { FaQuoteRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className='py-24 px-6 max-w-6xl mx-auto'>
        <h2 className="text-4xl font-bold mb-16 text-center">Testimonials</h2>
        <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-3xl flex flex-col gap-6'>
                <span className='text-5xl text-[#8c2bee]/30'><FaQuoteRight /></span>
                <p className="text-slate-300 italic">"Shreyaa's ability to take complex requirements and turn them into intuitive designs is unmatched. Her AI integration in projects is futuristic."</p>
                <div className='flex items-center gap-4 mt-auto'>
                    <div className="size-10 rounded-full bg-[#8c2bee]/20"></div>
                    <div>
                        <p className="font-bold text-sm">John Doe</p>
                        <p className="text-xs text-slate-500">HR, XYZ Company</p>
                    </div>
                </div>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md p-8 rounded-3xl border border-[#8c2bee]/50 flex flex-col gap-6 scale-105'>
                <span className='text-5xl text-[#8c2bee]/30'><FaQuoteRight /></span>
                <p className="text-slate-300 italic">"Shreyaa's ability to take complex requirements and turn them into intuitive designs is unmatched. Her AI integration in projects is futuristic."</p>
                <div className='flex items-center gap-4 mt-auto'>
                    <div className="size-10 rounded-full bg-[#8c2bee]/20"></div>
                    <div>
                        <p className="font-bold text-sm">John Doe</p>
                        <p className="text-xs text-slate-500">HR, XYZ Company</p>
                    </div>
                </div>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-3xl flex flex-col gap-6'>
                <span className='text-5xl text-[#8c2bee]/30'><FaQuoteRight /></span>
                <p class="text-slate-300 italic">"Shreyaa's ability to take complex requirements and turn them into intuitive designs is unmatched. Her AI integration in projects is futuristic."</p>
                <div className='flex items-center gap-4 mt-auto'>
                    <div className="size-10 rounded-full bg-[#8c2bee]/20"></div>
                    <div>
                        <p className="font-bold text-sm">John Doe</p>
                        <p className="text-xs text-slate-500">HR, XYZ Company</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials