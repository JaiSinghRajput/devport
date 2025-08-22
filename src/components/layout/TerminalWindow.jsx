export function TerminalWindow({ children, height = 'auto', className = '' }) {
  return (
    <div
      className={`
        w-full
        max-w-5xl
        min-w-[280px]
        mx-auto
        bg-[#111]
        border border-gray-700
        rounded-lg
        shadow-xl
        overflow-hidden
        mt-6
        flex flex-col
        ${className}  /* <- use className here */
      `}
      style={{ height }}
    >
      {/* Top bar with traffic lights */}
      <div className="flex items-center space-x-2 px-3 py-2 bg-[#222] border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Terminal content */}
      <div
        className="p-4 font-mono text-gray-200 bg-black flex-1 overflow-y-auto overflow-x-auto"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {children}
      </div>
    </div>
  );
}
