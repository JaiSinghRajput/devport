import React from 'react';
import CodeLine from './CodeLine';

export function QuoteLine({ children }) {
  return (
    <>
      <CodeLine text={`“${children}”`} className="text-yellow-300" />
      <span className=" animate-[2s_infinite_blink]">|</span>

    </>
  );
}
