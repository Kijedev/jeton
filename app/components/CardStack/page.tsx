"use client";
import { CardStack } from "@/app/components/CardStack/cardstack";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

export function page() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center w-full gap-20"
      style={{
        background: 'url("/Image/client.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h1
        className="text-white font-bold lg:text-8xl text-4xl text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Hear it from our clients
      </motion.h1>
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-500 px-1 py-0.5",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Vamsi K",
    designation: "Senior Software Engineer",
    content: (
      <div>
        <h1 className="text-white">Awesome app very user friendly</h1>
        <p>
          Very happy with the app. Does what it says, simple payments and
          transactions. Quick account verification and withdrawals. 24/7 support
          available.
        </p>
      </div>
    ),
  },
  {
    id: 1,
    name: "Leonie A",
    designation: "Senior Shitposter",
    content: (
      <div>
        <h1 className="text-white">Awesome app very user friendly</h1>
        <p>Would highly recommend Jeton to my friends.</p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Karl R.",
    designation: "Senior Shitposter",
    content: (
      <div>
        <h1 className="text-white">
          The best payment solution for German customers
        </h1>
        <p>
          I've been a Jeton user for a few years!The support was always great
          and I'm always able to make my payments to the websites I want with no
          problem.
        </p>
      </div>
    ),
  },
];

export default page;
