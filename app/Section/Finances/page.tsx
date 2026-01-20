import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function page() {
  return (
    <main className="md:h-screen h-[50vh] bg-white flex items-center justify-center text-center" id="finances">
      <h1 className="md:text-[13rem] text-6xl text-[#f73b20] md:leading-44 font-bold">
        Unify your <br /> finances
      </h1>
    </main>
  );
}
