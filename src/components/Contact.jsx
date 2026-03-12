import { color } from 'motion';
import React, { useState, useRef } from 'react'
import { MdMailOutline } from "react-icons/md";
import { IoMdLink} from "react-icons/io";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";

//using emailjs to receive mails
const Contact = () => {
    const form = useRef();
    const [lastSent, setLastSent] = useState(0);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();

      const now = Date.now();

      if (now - lastSent < 30000) {
        alert("Please wait before sending another message.");
        return;
      }

      setLastSent(now);

      setLoading(true);

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            setLoading(false);
            alert("Message sent successfully!");
          },
          (error) => {
            setLoading(false);
            alert("Failed to send message.");
          },
        );
      e.target.reset();
    };


  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto" id="contact">
      <div className="bg-[rgba(25,16,34,0.7)] backdrop-blur-m border border-[rgba(140,43,238,0.2)] p-4 sm:p-6 md:p-0 rounded-2xl md:rounded-[40px] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-5 sm:gap-6 md:gap-8 bg-[#8c2bee]/5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Let's build something{" "}
              <span className="text-[#8c2bee]">together</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-400">
              Open for collaborations, freelance projects, or just a coffee chat
              about AI and Design.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="shrink-0 size-10 sm:size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-5 sm:p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors">
                  <span>
                    <MdMailOutline style={{ fontSize: "18px" }} className="sm:text-[22px]" />
                  </span>
                </div>
                <a href="mailto:shreyaakatiyar@gmail.com" className="flex-1">
                  <span className="text-xs sm:text-sm md:text-base font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors break-all">
                    shreyaakatiyar@gmail.com
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="shrink-0 size-10 sm:size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-5 sm:p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors">
                  <span>
                    <FaLinkedinIn style={{ fontSize: "18px" }} className="sm:text-[20px]" />
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/in/shreyaakatiyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <span className="text-xs sm:text-sm md:text-base font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors">
                    Connect on LinkedIn
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="shrink-0 size-10 sm:size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-5 sm:p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors">
                  <span>
                    <FaGithub style={{ fontSize: "18px" }} className="sm:text-[22px]" />
                  </span>
                </div>
                <a href="https://github.com/Shreyaakatiyar" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <span className="text-xs sm:text-sm md:text-base font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors">
                    View my GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            <form className="space-y-4 sm:space-y-5 md:space-y-6" ref={form} onSubmit={sendEmail}>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Name
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white text-sm sm:text-base"
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Email
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white text-sm sm:text-base"
                  placeholder="john@example.com"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white text-sm sm:text-base"
                  placeholder="What's on your mind?"
                  rows="4"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full py-3 sm:py-4 bg-[#8c2bee] text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:shadow-[0_0_20px_rgba(140,43,238,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span className="text-xs sm:text-sm">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="text-xs sm:text-sm">Send Message</span>
                    <IoSend className="text-xs sm:text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact