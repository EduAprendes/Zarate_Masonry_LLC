import type { Metadata } from "next";
import Link from "next/link";
import FullGallery from "@/components/FullGallery";

export const metadata: Metadata = {
  title: "Project Gallery | Zarate Masonry LLC",
  description:
    "Real chimney, brick, stone and block work by Zarate Masonry LLC in Des Moines, WA. No stock photos — every image is an actual project.",
};

const PHOTO_COUNT = 67;
const images = Array.from({ length: PHOTO_COUNT }, (_, i) => `/images/project-${String(i + 1).padStart(3, "0")}.jpg`);

export default function GalleryPage() {
  return (
    <main className="fg-page">
      <div className="fg-header wrap">
        <Link href="/" className="fg-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Zarate Masonry
        </Link>
        <h1>Project Gallery</h1>
        <p>{images.length} real photos from Zarate Masonry jobs in Des Moines, WA — no stock photos.</p>
        <Link href="/#contact" className="btn">
          Request a Free Estimate
        </Link>
      </div>
      <div className="wrap">
        <FullGallery images={images} />
      </div>
    </main>
  );
}
