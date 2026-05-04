// src/components/contact/ContactMap.tsx

type ContactMapProps = {
    title?: string;
    mapSrc?: string;
  };
  
  const defaultMapSrc =
    "https://www.google.com/maps?q=4/1/8%20Ho%C3%A0ng%20Vi%E1%BB%87t,%20T%C3%A2n%20S%C6%A1n%20Nh%E1%BA%A5t,%20TP%20HCM&output=embed";
  
  export default function ContactMap({
    title = "Tìm chúng tôi trên Google Map",
    mapSrc = defaultMapSrc,
  }: ContactMapProps) {
    return (
      <section
        className="
          mt-6 overflow-hidden rounded-2xl bg-white
          shadow-[0_12px_32px_rgba(6,63,50,0.06)]
          ring-1 ring-[#e3ebe6]
        "
      >
        <div className="border-b border-[#e3ebe6] px-6 py-5 md:px-8">
          <h2 className="text-[18px] font-bold uppercase text-[#063f32]">
            {title}
          </h2>
        </div>
  
        <div className="h-[430px] w-full">
          <iframe
            title="Bản đồ Samtramy"
            src={mapSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    );
  }