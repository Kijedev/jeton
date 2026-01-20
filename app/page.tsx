import type { Metadata } from "next";
import Link from "next/link";
import Home from "./Section/Home/page";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function page() {
  return <Home />;
}
