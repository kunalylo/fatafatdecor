'use client';

import { useEffect, useRef } from 'react';

export default function BeforeAfterDemo() {
  const containerRef = useRef(null);
  const dividerRef = useRef(null);
  const handleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const move = (x) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      let pct = ((x - rect.left) / rect.width) * 100;
      pct = Math.max(10, Math.min(90, pct));
      dividerRef.current.style.left = pct + '%';
      handleRef.current.style.left = pct + '%';
      leftRef.current.style.right = 100 - pct + '%';
      rightRef.current.style.left = pct + '%';
    };

    const stop = () => (draggingRef.current = false);
    const onMouseMove = (e) => {
      if (draggingRef.current) move(e.clientX);
    };
    const onTouchMove = (e) => {
      if (draggingRef.current) move(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', stop);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchend', stop);
    window.addEventListener('touchmove', onTouchMove);
    return () => {
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchend', stop);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  const startDrag = () => (draggingRef.current = true);

  return (
    <div className="before-after-demo" ref={containerRef}>
      <div className="ba-side ba-left" ref={leftRef}>
        <img
          src="/image2.jpg"
          alt="Before: plain living room before decoration"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="ba-side ba-right" ref={rightRef}>
        <img
          src="/before2.png"
          alt="After: decorated living room preview created by Fatafat Decor AI"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="ba-divider" ref={dividerRef}></div>
      <div className="ba-handle" ref={handleRef} onMouseDown={startDrag} onTouchStart={startDrag}>
        <span className="ba-icon">⇔</span>
      </div>
    </div>
  );
}
