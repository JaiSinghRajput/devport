import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import CodeLine from './CodeLine';

const getColorClass = (value) => {
  if (typeof value === 'string') return 'text-yellow-300';
  if (typeof value === 'number' || typeof value === 'boolean') return 'text-purple-400';
  if (typeof value === 'function') return 'text-green-400';
  return 'text-gray-300';
};

export default function RecursiveObject({ data, level = 0 }) {
  const [open, setOpen] = useState(true);

  if (typeof data !== 'object' || data === null) {
    return <CodeLine text={JSON.stringify(data)} className={getColorClass(data)} />;
  }

  const isArray = Array.isArray(data);
  const entries = isArray ? data : Object.entries(data);

  // Special handling: if array contains only objects, render objects directly
  const skipOuterArray = isArray && data.every(item => typeof item === 'object' && item !== null);

  return (
    <div className={`ml-${level * 2}`}>
      {!skipOuterArray && (
        <div className="flex items-center cursor-pointer select-none" onClick={() => setOpen(!open)}>
          {open ? <ChevronDown size={14} className="text-gray-500 mr-1" /> : <ChevronRight size={14} className="text-gray-500 mr-1" />}
          <CodeLine text={isArray ? '[' : '{'} className="text-pink-400 font-bold" />
        </div>
      )}

      {open && (
        <div className={`ml-6 border-l border-gray-700 pl-3`}>
          {isArray
            ? entries.map((item, i) => (
                <div key={i} className="ml-2">
                  <RecursiveObject data={item} level={level + 1} />
                  {!skipOuterArray && i < entries.length - 1 ? <CodeLine text="," className="text-gray-500" /> : null}
                </div>
              ))
            : entries.map(([key, value], i) => (
                <div key={i} className="ml-2">
                  <CodeLine text={key} className="text-blue-400" />
                  <CodeLine text=": " className="text-gray-400" />
                  <RecursiveObject data={value} level={level + 1} />
                  {i < entries.length - 1 ? <CodeLine text="," className="text-gray-500" /> : null}
                </div>
              ))}
        </div>
      )}

      {!skipOuterArray && <CodeLine text={isArray ? ']' : '}'} className="text-pink-400 font-bold" />}
    </div>
  );
}
