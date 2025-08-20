"use client";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100 flex items-center gap-6 justify-center mt-20">
        <div className="rounded-full ">
          <motion.div
            initial={{ opacity: 0.3, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
            }}
          >
            <Image
              className="rounded-full w-112 h-112 object-cover"
              src="/me.jpg"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </motion.div>
        </div>
        <article className="w-100 flex flex-col">
          <h1 className="text-7xl font-bold mb-6">Hello</h1>
          <p className="text-2xl font-bold">A Bit About Me</p>
          <p className="">
            Maksym — Frontend Developer I create responsive, user-friendly, and
            modern web applications using React, TypeScript, and JavaScript.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              href="/CV_Maksym Kostiv_Frontend Developer.pdf"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out font-medium"
              target="_blank"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Download my portfolio
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
