import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function page() {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-6 justify-center items-center pt-10">
        <p className="text-[#f73b20] border border-[#f73b20] px-2 py-1 rounded-full">
          Jeton Card
        </p>
        <h1 className="text-[#f73b20] text-5xl text-center max-w-2xl font-semibold leading-13">
          Contactless payments? Sure. Spending limits? Check. Card freezing?
          Also check.
        </h1>

        <div className="mt-20 flex justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-4xl w-[50%] object-cover"
          >
            <source src="/video/jeton.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <h1 className="text-[#f73b20] text-7xl text-center font-semibold leading-18 mt-20 max-w-3xl mx-auto">
            Jeton Card: Your Go-To for Every Purchase
          </h1>
          <div className="flex justify-center items-center mt-10">
            <button className="bg-[#f73b20] text-white rounded-xl p-4 mt-10 cursor-pointer">
              Learn more
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
