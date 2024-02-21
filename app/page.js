import { links } from "@/lib/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" z-[999] relative font-sans">
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray-200 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
          <ul className="flex justify-around items-center h-full just flex-wrap">
            {links.map((link) => (
              <li
                key={link.name}
                className="cursor-pointer gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
              >
                <a className="p-2 font-bold" href={link.hash}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <section className="flex justify-center font-mono">
        <div className="absolute top-16 text-center p-10 lg:px-10 md:flex md:justify-between md:top-24 lg:top-32 lg:gap-14">
          {/* <img src="" alt="" /> */}
          <div className="relative h-56 w-56 md:h-64 md:w-64 lg:h-96 lg:w-96 overflow-hidden rounded-full mx-auto bg-cyan-700">
            <Image
              src="/foto3.png"
              alt=""
              layout="fill"
              objectFit="contain"
              className="translate-y-6 translate-x-2"
            />
          </div>
          <div className="md:text-justify md:w-1/2 lg:w-3/5 lg:pl-3">
            <h2 className="text-5xl lg:text-6xl py-5 lg:py-7">
              Ares Guivernau
            </h2>
            <h3 className="text-2xl lg:text-4xl py-1 lg:py-3">
              Front-End React Developer
            </h3>
            <p className="text-xl lg:text-2xl py-3 lg:py-4 lg:pr-8 leading-8 lg:leading-10 text-gray-800">
              Hi, I am Ares Guivernau, a passionate Front-end React Developer
              based in Barcelona.
            </p>
            <div className="gap-10 lg:gap-16 py-1 lg:py-3 flex justify-center items-center md:justify-start">
              <FaLinkedin className="  text-cyan-700 text-2xl lg:text-3xl cursor-pointer " />
              <FaGithub className="  text-cyan-700 text-2xl lg:text-3xl cursor-pointer" />
              <p className=" text-2xl lg:text-3xl text-gray-600 cursor-pointer">
                CV
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
