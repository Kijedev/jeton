// app/components/InclusiveFutureSection.jsx
"use client";
import { motion } from "framer-motion";

export default function InclusiveFutureSection() {
  return (
    <section className="flex flex-col bg-[#ff3b1f] text-white px-6 md:px-16 py-16">
      {/* Top headline */}
      <div className="flex flex-col gap-10 lg:absolute lg:right-92 md:right-50">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#fffff] px-5 py-2 text-sm font-medium text-[#fffff]">
            Awards & Certifications
          </span>
        </div>
        <motion.h1
          className="font-semibold lg:leading-18 text-4xl md:text-6xl lg:text-7xl max-w-3xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          Working for <br />
          an all inclusive <br />
          financial future
        </motion.h1>
      </div>

      {/* Content rows */}
      <div className="lg:mt-96 mt-10 space-y-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <span className="md:col-span-1 text-xl opacity-80">01.</span>
          <h2 className="md:col-span-4 text-4xl md:text-5xl font-semibold">
            For you
          </h2>
          <p className="md:col-span-7 text-xl md:text-2xl leading-7 opacity-70">
            Jeton is designed with you at its core. Our goal is to create a
            product that seamlessly fits into your life, simplifying your
            finances and make money better for you.
          </p>
        </motion.div>

        <div className="h-px bg-white/30" />

        {/* Row 02 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start opacity-70"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <span className="md:col-span-1 text-xl">02.</span>
          <h2 className="md:col-span-4 text-4xl md:text-5xl font-semibold">
            Accessible
          </h2>
          <p className="md:col-span-7 text-xl md:text-2xl leading-7">
            We try to make Jeton accessible and inclusive for everyone. Our
            commitment is to ensure that our services are easy to use and
            available to all.
          </p>
        </motion.div>

        <div className="h-px bg-white/30" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <span className="md:col-span-1 text-xl opacity-80">03.</span>
          <h2 className="md:col-span-4 text-4xl md:text-5xl font-semibold">
            Transparent
          </h2>
          <p className="md:col-span-7 text-xl md:text-2xl leading-7 opacity-70">
            We believe in transparency and honesty. There are no complicated
            jargons or hard-to-understand terms here. We understand that money
            can be complex, so we are dedicated to making it straightforward and
            transparent. With Jeton, there are no hidden fees or surprises. What
            you see is truly what you get.
          </p>
        </motion.div>
      </div>

      <motion.section
        className="px-6 md:px-16 py-20"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#ff4a32] rounded-3xl p-8 md:p-14 text-white">
            {/* Quote */}
            <p className="text-lg md:text-xl leading-relaxed opacity-80">
              “We observed how difficult it was for people to manage their
              finances. Even the simplest tasks took too long or became
              extremely intricate. The fact that today’s financial system was
              not all-inclusive for everyone, ignited our desire to create
              Jeton. We wanted to offer a human touch and make a positive impact
              in people's lives. Our mission is to give everyone total control
              of their assets and easier access to their funds. At the end of
              the day, it is their money, and they should control it the way
              their hearts desire.”
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-10">
              <div className="w-12 h-12 rounded-full bg-white text-[#ff3b1f] flex items-center justify-center font-semibold">
                HS
              </div>

              <div>
                <p className="font-semibold">Harbin S.</p>
                <p className="text-sm opacity-80">CEO of Jeton</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
