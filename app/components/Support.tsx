import type { Metadata } from "next";
import { MdOutlineMessage } from "react-icons/md";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Support() {
  return (
    <button className="z-999 flex gap-2 items-center cursor-pointer fixed lg:bottom-10 bottom-0 right-10 bg-black/35 text-white rounded-full text-lg font-semibold backdrop-blur-lg px-5 py-2">
      <MdOutlineMessage className="text-lg text-white" />
      Support
    </button>
  );
}
