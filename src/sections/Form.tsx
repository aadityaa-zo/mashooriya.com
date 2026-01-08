"use client"

import { useState } from "react";
import RingLoader from "@/components/RingLoader"

interface FormProps {
  id?: string;
}

// type Data = {
//   Name:string;
//   Email:string;
//   Message:string;
// }

export default function Form({ id = "form-section" }: FormProps) {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (loading) return; // prevents spam clicks

  if (!name.trim() || !email.trim() || !message.trim()) {
    setError("All fields are required");
    setTimeout(() => setError(""), 1500);
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data: { success: boolean; error?: string } = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong");
      setTimeout(() => setError(""), 1500);
    } else {
      setError("Email sent");
      setTimeout(() => setError(""), 1500);
    }
  } catch {
    setError("Network error");
    setTimeout(() => setError(""), 1500);
  } finally {
    setLoading(false);
  }
};

  return (
    <div id={id} className="relative bg-Yellow md:min-h-screen min-h-[calc(100vh+30vh)] flex justify-center items-start p-4 sm:p-6 md:p-4 lg:p-10 overflow-hidden">
      
      {/* Background shape */}
      <div className="pointer-events-none absolute -inset-1 bg-Dark 
        [clip-path:polygon(0_90%,100%_85%,100%_100%,0_100%)]" />

      <div className="w-full max-w-full flex gap-15 md:gap-15 px-[2vw] md:px-[5vw] pt-10 sm:pt-4 flex-wrap md:flex-nowrap">


        <div className="w-full text-Dark uppercase">
          <p className="text-6xl sm:text-7xl md:text-9xl font-bold">get in touch!</p>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-Dark/50">get in touch to know more about our services & other dope things!!</p>
        </div>

        <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-10 md:gap-16">

          <div className="flex flex-col gap-12 md:gap-20">

            {/* NAME */}
            <div className="relative border-4 sm:border-[6px] border-Dark p-2 sm:p-5">
              <span className="absolute -top-8 sm:-top-12 left-3 bg-Dark text-Yellow px-3 sm:px-4 py-1 sm:py-2 font-bold text-lg sm:text-2xl md:text-4xl -rotate-6">
                NAME
              </span>

              <input
                type="text"
                placeholder="ENTER YOUR NAME"
                onChange={(e)=> setName(e.target.value)}
                className="w-full bg-transparent outline-none text-Dark text-xl sm:text-2xl md:text-3xl font-bold
                box-border leading-[3rem]
                   bg-[repeating-linear-gradient(transparent,transparent_2.7rem,#1A2027_2.7rem,#1A2027_3rem)]
                   bg-local"
              />

              {/* <div className="absolute left-4 right-4 bottom-3 sm:bottom-4 h-1 sm:h-1.5 bg-Dark" /> */}
            </div>

            {/* EMAIL */}
            <div className="relative border-4 sm:border-[6px] border-Dark p-2 sm:p-5">
              <span className="absolute -top-8 sm:-top-12 left-3 bg-Dark text-Yellow px-3 sm:px-4 py-1 sm:py-2 font-bold text-lg sm:text-2xl md:text-4xl -rotate-6">
                EMAIL
              </span>

              <input
                type="email"
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="w-full box-border bg-transparent border-none outline-none resize-none
                      font-bold text-xl sm:text-2xl md:text-3xl  leading-[3rem]
                      text-Dark uppercase
                      bg-[repeating-linear-gradient(transparent,transparent_2.7rem,#1A2027_2.7rem,#1A2027_3rem)]
                      bg-local"
              />
              {/* <div className="absolute left-4 right-4 bottom-3 sm:bottom-4 h-1 sm:h-1.5 bg-Dark" /> */}
            </div>

            {/* MESSAGE */}
            <div className="relative border-4 sm:border-[6px] border-Dark p-2 sm:p-5 pb-6 bg-Yellow">
              <span className="absolute -top-8 sm:-top-12 left-3 bg-Dark text-Yellow px-3 sm:px-4 py-1 sm:py-2 font-bold text-lg sm:text-2xl md:text-4xl -rotate-6">
                Message
              </span>

              <textarea
                placeholder="Enter Your Message"
                className="w-full h-50 box-border bg-transparent border-none outline-none resize-none
                      font-bold text-xl sm:text-2xl md:text-3xl  leading-[3rem]
                      text-Dark uppercase
                      bg-[repeating-linear-gradient(transparent,transparent_2.7rem,#1A2027_2.7rem,#1A2027_3rem)]
                      bg-local 
                      [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-Dark [&::-webkit-scrollbar-thumb]:rounded-full
                      "></textarea>

            </div>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full relative bg-Dark text-Yellow text-3xl sm:text-4xl md:text-5xl font-bold py-3 sm:py-4 cursor-pointer uppercase"
          >
           {loading ? <RingLoader/> :" hit upp!"}
         
            <div className={`absolute transition-all -bottom-full w-full text-Dark bg-Yellow text-xl sm:text-2xl md:text-3xl font-bold py-3 sm:py-4 duration-300 cursor-pointer uppercase ${error? "scale-100":"scale-0"}`}>
             {error}
            </div>

          </button>
         
        </form>

      </div>
    </div>
  );
}
