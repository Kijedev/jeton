import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/app/components/DraggableCard/DraggableCard";
import CurrencyConverter from "../CurrenciesConversion/currency-converter";
import { motion } from "framer-motion";

export default function page() {
  const items = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7V0dmmiNePjH3dhrpE56ddggb1JMDaZIzEg&s",
      className: "absolute bottom-0 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_France.png/1200px-Flag_of_France.png",
      className: "absolute bottom-0 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg?semt=ais_hybrid&w=740&q=80",
      className: "absolute bottom-0 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hl3UNL57vH3SQdcJifv594RRe4-T-eyjCw&s",
      className: "absolute bottom-0 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png",
      className: "absolute bottom-0 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://img.freepik.com/free-vector/illustration-switzerland-flag_53876-27100.jpg?semt=ais_hybrid&w=740&q=80",
      className: "absolute bottom-0 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_L3tS_IsS9TNx_rQBodm6Na3QXdvhdEFyA&s",
      className: "absolute bottom-0 left-[30%] rotate-[4deg]",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oxe3oF9pj3fx6ORQYcVyj7ZOsYpXWY2gEA&s",
      className: "absolute bottom-10 left-[0%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHqUFx4yBWukSFU98PfOvQaSbIoVjgSz6tA&s",
      className: "absolute bottom-10 left-[13%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://img.freepik.com/free-vector/basic-rgb_53876-165874.jpg?semt=ais_hybrid&w=740&q=80",
      className: "absolute bottom-8 left-[80%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_South_Korea.png/900px-Flag_of_South_Korea.png",
      className: "absolute bottom-10 left-[50%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png",
      className: "absolute bottom-0 right-[89%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://img.freepik.com/free-vector/illustration-finland-flag_53876-27108.jpg?semt=ais_hybrid&w=740&q=80",
      className: "absolute bottom-0 left-[100%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1280px-Flag_of_Sweden.svg.png",
      className: "absolute bottom-0 right-[0%] rotate-[4deg]",
    },
    {
      title: "Canada",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHi2Ie5LDFBk0aGQXjzVaf8zFGdodznVnDw&s",
      className: "absolute bottom-6 right-[5%] rotate-[4deg]",
    },
    {
      title: "Canada",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBenbeGyOTPPkQdJZcQ2cwK2mHOzJXi_CZuQ&s",
      className: "absolute bottom-6 right-[25%] rotate-[4deg]",
    },
    {
      title: "Canada",
      image:
        "https://img.freepik.com/free-vector/illustration-portugal-flag_53876-18170.jpg?semt=ais_hybrid&w=740&q=80",
      className: "absolute bottom-0 right-[20%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex mt-32 w-full items-center justify-center">
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 justify-center items-center pt-10">
          <p className="text-[#f73b20] border border-[#f73b20] px-2 py-1 rounded-full">
            Exchange
          </p>
          <motion.h1
            className="text-[#f73b20] lg:text-7xl text-4xl text-center max-w-2xl font-semibold lg:leading-16 leading-10"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Convert fiat <br /> cash easily.
          </motion.h1>
          <motion.p
            className="text-[#f73b20]/50 text-center text-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            *The displayed conversion rates and fees may vary during <br />
            the currency exchange process, and the rates shown were <br /> last
            updated on 00:59 updated on 02:01:2026
          </motion.p>
        </div>

        <div>
          <CurrencyConverter />
        </div>
      </div>

      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-20 w-20 rounded-full object-cover"
          />
          {/* <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3> */}
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
