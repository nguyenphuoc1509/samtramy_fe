"use client";

import { useRef } from "react";

const youtubeVideoId = "7WJNOBF7QI4";

export default function HomeBrandVideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const youtubeSrc = `https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${youtubeVideoId}`;

  return (
    <section className="w-full bg-[#f5f5f3] pb-16">
      <div className="site-container">
        <h2
          className="
            mb-10 text-center text-[34px] font-medium leading-tight
            tracking-wide text-[#063f32]
            md:text-[44px]
          "
        >
          SAMTRAMY – Từ Trà My Vươn Ra Thế Giới
        </h2>

        <div
          className="
            mx-auto max-w-[1280px] overflow-hidden rounded-xl
            bg-[#063f32]/10 shadow-[0_18px_45px_rgba(6,63,50,0.18)]
            ring-1 ring-[#063f32]/10
          "
        >
          <div className="relative h-[225px] w-full md:h-[435px] lg:h-[685px]">
            <iframe
              ref={iframeRef}
              className="absolute inset-0 h-full w-full rounded-xl"
              src={youtubeSrc}
              title="SAMTRAMY – Từ Trà My Vươn Ra Thế Giới"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
