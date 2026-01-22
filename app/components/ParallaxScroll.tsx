"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const cards = [
  {
    bg: "bg-white",
    rotate: "-rotate-2",
    z: 30,
  },
  {
    bg: "bg-neutral-900 text-white",
    rotate: "rotate-1",
    z: 40,
  },
  {
    bg: "bg-gradient-to-br from-orange-500 to-red-500 text-white",
    rotate: "-rotate-1",
    z: 50,
  },
]

function ParallaxCard({
  index,
}: {
  index: number
}) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const card = cards[index]

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh]"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className={`
          fixed top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[90%] max-w-md h-[70vh]
          rounded-3xl shadow-2xl
          ${card.bg}
          ${card.rotate}
          z-[${card.z}]
          flex items-center justify-center
        `}
      >
        <img
          src="/Image/phone.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  )
}

export default function ParallaxStack() {
  return (
    <main className="relative">
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 bg-[#F96853] -z-50" />

      {/* PARALLAX STACK */}
      {cards.map((_, index) => (
        <ParallaxCard key={index} index={index} />
      ))}

      {/* END SPACER */}
      <div className="h-[50vh]" />
    </main>
  )
}
