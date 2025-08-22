import React from 'react';
import CodeLine from './CodeLine';

export function QuoteLine({ children }) {
  return <CodeLine text={`“${children}”`} className="text-yellow-300" />;
}
