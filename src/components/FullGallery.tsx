"use client";

import { useCallback, useEffect, useState } from "react";

export default function FullGallery({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className="fg-grid">
        {images.map((src, i) => (
          <button type="button" className="fg-item" key={src} onClick={() => setOpenIndex(i)} aria-label={`View photo ${i + 1} of ${images.length}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Zarate Masonry project photo ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="fg-lightbox" onClick={close}>
          <button type="button" className="fg-close" onClick={close} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
          <button
            type="button"
            className="fg-nav fg-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="fg-lightbox-img" src={images[openIndex]} alt={`Zarate Masonry project photo ${openIndex + 1}`} onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            className="fg-nav fg-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="fg-counter">
            {openIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
