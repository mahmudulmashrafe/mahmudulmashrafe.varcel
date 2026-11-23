"use client";

/**
 * Subtle architectural ambient lighting.
 * Soft, low-contrast radial depth without saturated color blobs.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle top spotlight */}
      <div className="absolute -top-[20vw] left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] max-w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.04),transparent_70%)] blur-3xl opacity-70" />

      {/* Subtle technical background grid */}
      <div className="bg-subtle-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)] opacity-80" />
    </div>
  );
}
