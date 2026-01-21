import type { Metadata } from "next";
import Home from "./Section/Home/page";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function page() {
  return <Home />;
}
