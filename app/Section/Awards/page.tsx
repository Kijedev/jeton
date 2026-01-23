export default function AwardsSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#ff3b1f] px-5 py-2 text-sm font-medium text-[#ff3b1f]">
              Awards & Certifications
            </span>

            <h2 className="mt-8 text-3xl lg:leading-14 font-semibold text-[#ff3b1f] sm:text-[48px] lg:text-5xl">
              We are here to make
              <br />
              money better for you
            </h2>

            <p className="mt-6 text-base text-[#ff3b1f]">
              We work with a passion that returns in achievements and rewards.
            </p>
          </div>

          <div className="flex flex-col">
            {[
              "UKAS Management Systems",
              "Cyber Essentials Certified",
              "ISO 27001 Certified",
              "EBA Associate Member / EBA Standard Ecosystem Partner of the Euro Banking Association",
              "FT 1000 Europe's fastest growing companies 2024 & 2025",
              "Cyber Essentials Certified Plus",
            ].map((item, index) => (
              <div key={index} className="relative py-4">
                <p className="text-[#ff3b1f] text-base leading-relaxed">
                  {item}
                </p>

                <span className="absolute left-0 bottom-0 h-px w-full bg-[#ff3b1f]/40" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
