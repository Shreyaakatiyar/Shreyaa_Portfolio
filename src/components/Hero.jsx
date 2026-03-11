import React from 'react'
import {FaArrowRight} from 'react-icons/fa';
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id='hero'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,43,238,0.15)_0%,transparent_50%)]'></div>
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"></div>
        <div className='relative z-10 max-w-4xl px-6 text-center'>
            <h1 className='text-6xl md:text-7xl font-black mb-6 tracking-tighter leading-none bg-linear-to-r from-white to-[#8c2bee] bg-clip-text text-transparent'>
                Hi, I'm Shreyaa Katiyar!
            </h1>

            <p className='text-xl md:text-2xl text-slate-400 font-medium mb-8 max-w-2xl mx-auto'>
                Developer. Designer. Problem Solver.
            </p>

            <p className='text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed'>
                I design and build modern web applications that combine beautiful user experiences with powerful functionality.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <a className="w-full sm:w-auto px-8 py-4 bg-[#8c2bee] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(140,43,238,0.4)] transition-all" href="#projects">
                    View Projects <FaArrowRight />
                </a>

                <button className='w-full sm:w-auto px-8 py-4 bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all cursor-pointer'>
                    Download Resume <MdOutlineFileDownload />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero
