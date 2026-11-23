"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Aurem Signature Magnetic Custom Cursor.
 * Inner glowing gold bead + outer smooth lerp ring with interactive hover expansions.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on devices that have a fine pointer (mouse / trackpad)
    if (window.matchMedia("(pointer: fine)").matches) {
      setEnabled(true);
    } else {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }

      // Check what element is under the cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest<HTMLElement>("[data-cursor], a, button, input, [role='button']");
      if (cursorTarget) {
        setIsHovered(true);
        const customText = cursorTarget.getAttribute("data-cursor");
        if (customText) {
          setLabel(customText);
        } else {
          setLabel("");
        }
      } else {
        setIsHovered(false);
        setLabel("");
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    // Smooth lerp loop for the outer ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none">
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2 w-2 -ml-1 -mt-1 rounded-full bg-[#ffc58f] transition-opacity duration-300 opacity-0 shadow-[0_0_8px_#ffc58f]"
      />

      {/* Outer Magnetic Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 grid place-items-center rounded-full border transition-[width,height,margin,background-color,border-color] duration-300 ease-out opacity-0 ${
          label
            ? "h-24 w-24 -ml-12 -mt-12 bg-gradient-to-br from-[#ffc58f] to-[#ff5a2a] border-transparent shadow-[0_10px_30px_rgba(255,90,42,0.5)]"
            : isHovered
            ? "h-16 w-16 -ml-8 -mt-8 bg-[rgba(255,90,42,0.12)] border-[rgba(255,90,42,0.6)]"
            : isClicking
            ? "h-9 w-9 -ml-4.5 -mt-4.5 border-[#ffc58f] bg-[rgba(255,197,143,0.1)]"
            : "h-11 w-11 -ml-5.5 -mt-5.5 border-[rgba(255,197,143,0.5)]"
        }`}
      >
        {label && (
          <span
            ref={labelRef}
            className="font-sans text-[11px] font-extrabold uppercase tracking-widest text-[#07060a]"
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
