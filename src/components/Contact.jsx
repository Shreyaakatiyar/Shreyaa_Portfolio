import { color } from 'motion';
import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { IoMdLink} from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoSend } from "react-icons/io5";


const Contact = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
        <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-m border border-[rgba(140,43,238,0.2)] p-6 rounded-[40px] overflow-hidden'>
            <div className='grid md:grid-cols-2'>
                <div className='p-12 md:p-16 flex flex-col justify-center gap-8 bg-[#8c2bee]/5'>
                    <h2 className='text-4xl md:text-5xl font-black leading-tight'>
                        Let's build something <span className='text-[#8c2bee]'>together</span>
                    </h2>
                    <p class="text-slate-400">Open for collaborations, freelance projects, or just a coffee chat about AI and Design.</p>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-4 group cursor-pointer'>
                            <div className='size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors'>
                                <span>
                                    <MdMailOutline style={{fontSize: '22px'}} />
                                </span>
                            </div>
                            <span class="font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors">shreyaakatiyar@gmail.com</span>
                        </div>

                        <div className='flex items-center gap-4 group cursor-pointer'>
                            <div className='size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors'>
                                <span>
                                    <IoMdLink style={{fontSize: '22px'}} />
                                </span>
                            </div>
                            <span class="font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors">linkedin.com/in/shreyaakatiyar</span>
                        </div>

                        <div className='flex items-center gap-4 group cursor-pointer'>
                            <div className='size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors'>
                                <span>
                                    <FaGithub style={{fontSize: '22px'}} />
                                </span>
                            </div>
                            <span class="font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors">github.com/Shreyaakatiyar</span>
                        </div>
                    </div>
                </div>
                <div className='p-12 md:p-16'>
                    <form className='space-y-6'>
                        <div className='space-y-2'>
                            <label class="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                            <input class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white" placeholder="John Doe" type="text"/>
                        </div>
                        <div className='space-y-2'>
                            <label class="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                            <input class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white" placeholder="john@example.com" type="email"/>
                        </div>
                        <div className='space-y-2'>
                            <label class="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                            <textarea class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white" placeholder="What's on your mind?" rows="4"></textarea>
                        </div>
                        <button className='w-full py-4 bg-[#8c2bee] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(140,43,238,0.4)] transition-all flex items-center justify-center gap-2'>
                            Send Message <span> <IoSend /> </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact