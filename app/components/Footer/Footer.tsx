"use client";

import Image from "next/image";
import JetonFadeIn from "@/app/components/JetonFadeIn";

export default function Home() {
  return (
    <main className="p-6 md:p-12">
      <div className="flex flex-col mb-20">
        <JetonFadeIn />
        <p className="text-sm text-[#f73b20]/50 lg:-mt-20">
          © 2026 | www.jeton.com is owned and operated by LA Orange CY Limited
          (Gladstonos, 116 M. Kyprianou House, 3&4th Floor, 3032, Limassol,
          Cyprus.) LA Orange CY Limited trading as Jeton, is authorised by the
          Central Bank of Cyprus under the Electronic Money Law of 2012 and 2018
          (Law 81(I)/2012) for distributing or redeeming electronic money
          (e-money), with Licence No: 115.1.3.66. LA Orange CY Limited has been
          incorporated in the Republic of Cyprus under the provisions of the
          Companies Law (Cap 113) with registration number HE 424807, with its
          registered office address at Gladstonos, 116 M. Kyprianou House, 3&4th
          Floor, 3032, Limassol, Cyprus. <br /> <br /> LA Orange Limited,
          trading as Jeton, is authorised by the Financial Conduct Authority
          under the Electronic Money Regulations 2011 for distributing or
          redeeming electronic money (e-money) and providing certain payment
          services on behalf of an e-money institution, with FCA registration
          number 902088. Company Name: LA ORANGE LIMITED, LEI code:
          8945009645M8PD0AD211, BIC Value: ORAGGB22 (Swift Code). LA Orange
          Limited is registered in England and Wales, Company Number 11535714,
          with its registered office address at The Shard Floor 24/25, 32 London
          Bridge Street, London, SE1 9SG, United Kingdom. <br /> <br /> The
          Jeton Card Account and Card are issued by Financial House Limited,
          which is authorised and regulated by the Financial Conduct Authority
          as an Electronic Money Institution under Firm Reference Number 902039.
        </p>
      </div>
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/Image/westham.jpg"
              alt="West Ham United Players"
              fill
              className="object-cover object-left"
              quality={90}
            />

            <div className="absolute inset-0 bg-linear-to-b from-transparent via-red-900/70 to-red-900"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center lg:-bottom-50 p-6 md:p-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Image
                    src="/Image/westhamlogo.png"
                    alt="West Ham United Players"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
                <div>
                  <p className="text-white/80 text-xs md:text-sm font-medium">
                    Official Partner of
                  </p>
                  <p className="text-white text-base md:text-lg font-bold">
                    West Ham United F.C.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/Image/macallister.jpg"
              alt="Brand Ambassadors"
              fill
              className="object-cover object-right"
              quality={90}
            />

            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#f73b20]/70 to-[#f73b20]"></div>

            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-8">
              <div>
                <p className="text-white/90 text-xs md:text-sm font-medium mb-1">
                  Online Payments Brand Ambassadors
                </p>
                <p className="text-white text-base md:text-xl font-bold">
                  Alexis Mac Allister & Kou Itakura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
