'use client';

import { useEffect, useState } from 'react';

export default function YearStamp() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  // re-evaluate in the visitor's browser so a statically built page never shows a stale year
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <span id="current-year" suppressHydrationWarning>
      {year}
    </span>
  );
}
