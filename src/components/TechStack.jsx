import { section } from 'motion/react-client'
import { FaHtml5 } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import React from 'react'
import { color } from 'motion';

function TechStack() {
  return (
    <section className='py-24 px-6 max-w-6xl mx-auto' id="tech">
        <div className="text-center mb-16">
            <h2 className='text-4xl font-bold mb-4'>Tech Stack</h2>
            <p className='text-slate-500'>Tools and Technologies I use to bring ideas to life.</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-2xl hover:border-[#8c2bee]/60 hover:-translate-y-2 transition-all flex flex-col items-center gap-4 group'>
                <div className='size-16 rounded-xl bg-[#8c2bee]/10 flex items-center justify-center group-hover:bg-[#8c2bee]/20 transition-colors'>
                    <span className='text-4xl' style={{color: '#8c2bee'}}>
                        <TbBrandCpp />
                    </span>
                </div>
                <span className='font-bold'>C++</span>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-2xl hover:border-[#8c2bee]/60 hover:-translate-y-2 transition-all flex flex-col items-center gap-4 group'>
                <div className='size-16 rounded-xl bg-[#8c2bee]/10 flex items-center justify-center group-hover:bg-[#8c2bee]/20 transition-colors'>
                    <span className='text-4xl' style={{color: '#8c2bee'}}>
                        <FaHtml5 />
                    </span>
                </div>
                <span className='font-bold'>HTML</span>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-2xl hover:border-[#8c2bee]/60 hover:-translate-y-2 transition-all flex flex-col items-center gap-4 group'>
                <div className='size-16 rounded-xl bg-[#8c2bee]/10 flex items-center justify-center group-hover:bg-[#8c2bee]/20 transition-colors'>
                    <span className='text-4xl' style={{color: '#8c2bee'}}>
                        <MdCss />
                    </span>
                </div>
                <span className='font-bold'>CSS</span>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-2xl hover:border-[#8c2bee]/60 hover:-translate-y-2 transition-all flex flex-col items-center gap-4 group'>
                <div className='size-16 rounded-xl bg-[#8c2bee]/10 flex items-center justify-center group-hover:bg-[#8c2bee]/20 transition-colors'>
                    <span className='text-4xl' style={{color: '#8c2bee'}}>
                        <IoLogoJavascript/>
                    </span>
                </div>
                <span className='font-bold'>JavaScript</span>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-2xl hover:border-[#8c2bee]/60 hover:-translate-y-2 transition-all flex flex-col items-center gap-4 group'>
                <div className='size-16 rounded-xl bg-[#8c2bee]/10 flex items-center justify-center group-hover:bg-[#8c2bee]/20 transition-colors'>
                    <span className='text-4xl' style={{color: '#8c2bee'}}>
                        <FaReact />
                    </span>
                </div>
                <span className='font-bold'>React</span>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-2xl hover:border-[#8c2bee]/60 hover:-translate-y-2 transition-all flex flex-col items-center gap-4 group'>
                <div className='size-16 rounded-xl bg-[#8c2bee]/10 flex items-center justify-center group-hover:bg-[#8c2bee]/20 transition-colors'>
                    <span className='text-4xl' style={{color: '#8c2bee'}}>
                        <RiTailwindCssFill />
                    </span>
                </div>
                <span className='font-bold'>Tailwind</span>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-2xl hover:border-[#8c2bee]/60 hover:-translate-y-2 transition-all flex flex-col items-center gap-4 group'>
                <div className='size-16 rounded-xl bg-[#8c2bee]/10 flex items-center justify-center group-hover:bg-[#8c2bee]/20 transition-colors'>
                    <span className='text-4xl' style={{color: '#8c2bee'}}>
                        <FaGithub />
                    </span>
                </div>
                <span className='font-bold'>Git</span>
            </div>

            <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-8 rounded-2xl hover:border-[#8c2bee]/60 hover:-translate-y-2 transition-all flex flex-col items-center gap-4 group'>
                <div className='size-16 rounded-xl bg-[#8c2bee]/10 flex items-center justify-center group-hover:bg-[#8c2bee]/20 transition-colors'>
                    <span className='text-4xl' style={{color: '#8c2bee'}}>
                        <FiFigma />
                    </span>
                </div>
                <span className='font-bold'>Figma</span>
            </div>
        </div>
    </section>
  )
}

export default TechStack