export default function TerminalOutput({ children, className }) {
  return (
    <div
      className={`flex flex-col font-mono text-gray-200 bg-black p-4 rounded-md overflow-auto ${className}`}
    >
      {children}
    </div>
  );
}
